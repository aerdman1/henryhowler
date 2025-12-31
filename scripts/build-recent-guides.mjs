// scripts/build-recent-guides.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";

const DOCS_DIR = "docs";
const OUT_FILE = path.join(DOCS_DIR, "_recent.json");

// You can tweak this to match your ReadMe URL structure:
const README_BASE = process.env.README_BASE || "";          // e.g. "" or "/family"
const README_DOCS_PREFIX = process.env.README_DOCS_PREFIX || "/docs"; // e.g. "/guides" if needed
const LIMIT = Number(process.env.RECENT_LIMIT || 8);

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function slugifySegment(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function pathToSlug(relFromDocs) {
  // relFromDocs like "through-the-decades/1992.md"
  let noExt = relFromDocs.replace(/\.(md|mdx)$/i, "");
  noExt = noExt.replace(/\/index$/i, ""); // treat index as folder root
  const parts = noExt.split("/").filter(Boolean).map(slugifySegment);
  return parts.join("/");
}

async function walk(dirAbs) {
  const out = [];
  const entries = await fs.readdir(dirAbs, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const abs = path.join(dirAbs, e.name);
    if (e.isDirectory()) out.push(...(await walk(abs)));
    else out.push(abs);
  }
  return out;
}

function gitLastCommitISO(fileAbs) {
  // Use committed time for "last updated"
  const cmd = `git log -1 --format=%cI -- "${toPosix(fileAbs)}"`;
  return execSync(cmd, { encoding: "utf8" }).trim();
}

async function extractTitle(fileAbs) {
  const raw = await fs.readFile(fileAbs, "utf8");

  // frontmatter: title: ...
  const fm = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n/m);
  if (fm) {
    const t = fm[1].match(/^\s*title:\s*(.+)\s*$/m);
    if (t) return t[1].replace(/^["']|["']$/g, "").trim();
  }

  // first markdown H1
  const h1 = raw.match(/^\s*#\s+(.+)\s*$/m);
  if (h1) return h1[1].trim();

  // fallback to filename
  return path.basename(fileAbs).replace(/\.(md|mdx)$/i, "");
}

async function main() {
  const docsAbs = path.resolve(DOCS_DIR);
  const files = (await walk(docsAbs)).filter(f => /\.(md|mdx)$/i.test(f));

  const items = [];
  for (const fileAbs of files) {
    const relFromDocs = toPosix(path.relative(docsAbs, fileAbs));
    const slug = pathToSlug(relFromDocs);

    const title = await extractTitle(fileAbs);
    let updatedAt = "";
    try {
      updatedAt = gitLastCommitISO(fileAbs);
    } catch {
      // If git log fails for any reason, skip date
      updatedAt = "";
    }

    const readmeUrl = `${README_BASE}${README_DOCS_PREFIX}${slug ? "/" + slug : ""}`;
    const githubUrl = `https://github.com/aerdman1/henryhowler/blob/v1.0/${DOCS_DIR}/${relFromDocs}`;

    items.push({
      title,
      updatedAt,
      file: relFromDocs,
      slug,
      url: readmeUrl,     // what your site should link to
      githubUrl           // fallback link if your slugs differ
    });
  }

  items.sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));

  const payload = {
    generatedAt: new Date().toISOString(),
    limit: LIMIT,
    items: items.slice(0, LIMIT)
  };

  await fs.writeFile(OUT_FILE, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(`Wrote ${OUT_FILE} with ${payload.items.length} items.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
