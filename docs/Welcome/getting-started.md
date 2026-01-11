---
title: Welcome to The Henry Howler!
excerpt: A living family archive — stories, photos, and history in one place.
deprecated: false
hidden: false
metadata:
  robots: index
---
## How to navigate

This site is organized into a few main areas so you can browse by time period, family line, or theme.  
If you’re not sure where to start, **Through the Decades** is the easiest on-ramp.

* [Through the Decades](#) — family articles organized by era
* [Ancestors](#) — family lines, notes, and background
* [Odds & Ends](#) — stories, memories, and one-offs
* [Media](#) — images, videos, and other files
* [Other](#) — misc. pages and experiments
* this could be an anouncement of some kind
  *January 1, 2026  Where are pictures that we include in new posts being saved?  We looked for them in the amazon images bucket and found nothing, whereas we were able to find old post pictures that you put there in the original migration.

***

## Recent Articles

<ChangelogEmbed
  src="https://family.henryhowler.com/changelog"
  maxPosts={3}
  maxCharsPerPost={320}
  showReadMore={true}
/> 

<HTMLBlock>{`
<style>
  /* -----------------------------
     Global / layout tweaks
  ------------------------------ */
  .content-toc {
    display: none;
  }

  /* Make the guide content a bit wider on large screens */
  @media (min-width: 1080px) {
    .rm-Guides .content-body {
      -ms-flex-negative: 1;
      flex-shrink: 1;
      max-width: 100%;
      width: 85%;
    }
  }

  /* -----------------------------
     Changelog: post meta/date line
     (positioned nicely, not overlapping)
  ------------------------------ */
  .ChangelogPage_list-post,
  .hh-changelog-list article {
    position: relative;
  }

  .DateLine {
    position: static; /* override absolute to avoid overlap */
    display: block;
    margin-top: 0.35rem;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.2;
    opacity: 0.75;
  }

  /* If your HTML uses <address> for author, make it match the DateLine vibe */
  .ChangelogPost-author1qH1HFeaAt2u {
    display: inline-block;
    margin-top: 0.25rem;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    opacity: 0.75;
  }

  /* Give titles a modern rhythm */
  .ChangelogPost_title3ME_vWC95yTD {
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin: 0;
  }

  /* -----------------------------
     Changelog: "nice and modern" list styling
  ------------------------------ */
  .hh-changelog-list article {
    padding: 1.15rem 1.15rem 1.1rem;
    margin: 0 0 1rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
  }

  /* Dark mode: keep it subtle */
  .dark .hh-changelog-list article {
    background: rgba(17, 24, 39, 0.85);
    border-color: rgba(255, 255, 255, 0.10);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.30);
  }

  /* Slight hover affordance */
  .hh-changelog-list article:hover {
    transform: translateY(-1px);
    transition: transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease;
    border-color: rgba(0, 0, 0, 0.12);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
  }

  .dark .hh-changelog-list article:hover {
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.38);
  }

  /* -----------------------------
     Changelog: image float + wrap
  ------------------------------ */
  /* Scope to your embedded changelog block */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown {
    overflow: visible; /* helps floated media behave consistently */
  }

  /* Float the lightbox wrapper so text wraps around the whole block */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox {
    float: left;
    display: block;
    max-width: 220px; /* matches your 200px image + padding */
    margin: 0.35rem 1rem 0.9rem 0;
  }

  /* Ensure inner wrapper doesn't break layout */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox .lightbox-inner {
    display: block;
  }

  /* Image styling */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
    display: block;
    width: 200px; /* keep consistent with your markup */
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.10);
  }

  /* Remove the accidental inline override (this breaks wrapping/paragraph layout) */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown p {
    display: block;
    margin-top: 0.65rem;
    margin-bottom: 0;
    line-height: 1.6;
  }

  /* If you have multiple paragraphs and want the float to stop after the section */
  .ChangelogPost_textdx2lvBFg0xLI::after,
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown::after {
    content: "";
    display: block;
    clear: both;
  }

  /* Mobile: don’t float—stack instead */
  @media (max-width: 640px) {
    .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox {
      float: none;
      max-width: 100%;
      margin: 0 0 0.9rem 0;
    }

    .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
      width: 100%;
    }
  }

  /* -----------------------------
     Excerpt + Read more (more breathing room, modern button-like link)
  ------------------------------ */
  .hh-changelog-excerpt {
    margin-top: 0.75rem;
    opacity: 0.95;
  }

  .hh-changelog-more {
    margin-top: 0.9rem; /* <-- gives space away from excerpt */
  }

  .hh-changelog-more a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 0.85rem;
    border-radius: 999px;
    font-weight: 800;
    font-size: 0.9rem;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.04);
    transition: transform 120ms ease, background 120ms ease, border-color 120ms ease;
  }

  .hh-changelog-more a:hover {
    text-decoration: none;
    transform: translateY(-1px);
    background: rgba(0, 0, 0, 0.06);
    border-color: rgba(0, 0, 0, 0.16);
  }

  .dark .hh-changelog-more a {
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }

  .dark .hh-changelog-more a:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.18);
  }
</style>
`}</HTMLBlock>

<br />

***
