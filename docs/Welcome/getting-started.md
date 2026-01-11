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

<ChangelogEmbed src="https://family.henryhowler.com/changelog" maxPosts={3} maxCharsPerPost={320} showReadMore={true} />

<HTMLBlock>{`
<style>
/* ==================================================
   Layout / Global
================================================== */

.content-toc {
  display: none;
}

@media (min-width: 1080px) {
  .rm-Guides .content-body {
    flex-shrink: 1;
    max-width: 100%;
    width: 85%;
  }
}

/* ==================================================
   Article list container
================================================== */

.hh-changelog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hh-changelog-list article {
  position: relative;
  padding: 1.5rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.hh-changelog-list article:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
}

.dark .hh-changelog-list article {
  background: rgba(17, 24, 39, 0.88);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Divider between articles */
.hh-changelog-list article:not(:last-child)::after {
  content: "";
  display: block;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  opacity: 0.8;
}
.dark .hh-changelog-list article:not(:last-child)::after {
  border-top-color: rgba(255, 255, 255, 0.12);
}

/* ==================================================
   Header (Title, Date, Author)
================================================== */

.hh-changelog-list article header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}

.ChangelogPost_title3ME_vWC95yTD {
  flex: 1 1 auto;
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin: 0;
  color: #6a00ff;
}

.DateLine {
  flex-shrink: 0;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: right;
  white-space: nowrap;
}

.ChangelogPost-author1qH1HFeaAt2u {
  display: block;
  margin-top: 0.25rem;
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Mobile: stack date/title */
@media (max-width: 640px) {
  .hh-changelog-list article header {
    display: block;
  }
  .DateLine {
    text-align: left;
    margin-bottom: 0.25rem;
  }
}

/* ==================================================
   Image float fix (text wraps correctly)
================================================== */

.ChangelogPost_textdx2lvBFg0xLI .rm-Markdown {
  display: block !important;
  overflow: visible !important;
}

.ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox {
  float: left !important;
  display: inline-block !important;
  margin: 0.25rem 1rem 0.75rem 0 !important;
  max-width: 220px !important;
}

.ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
  display: inline-block !important;
  width: 200px !important;
  height: auto !important;
  border-radius: 0.5rem;
  vertical-align: top;
}

.ChangelogPost_textdx2lvBFg0xLI .rm-Markdown p {
  display: block !important;
  overflow: visible !important;
  line-height: 1.65;
  margin: 0.5rem 0;
}

.ChangelogPost_textdx2lvBFg0xLI .rm-Markdown::after {
  content: "";
  display: block;
  clear: both;
}

/* Mobile: stack instead of float */
@media (max-width: 640px) {
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox {
    float: none !important;
    display: block !important;
    margin: 0 0 0.9rem 0 !important;
    max-width: 100% !important;
  }
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
    width: 100% !important;
  }
}

/* ==================================================
   Read More Button
================================================== */

.hh-changelog-more {
  display: block;
  clear: both;
  margin-top: 1.15rem;
  text-align: right;
}

.hh-changelog-more a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.04);
  color: #6a00ff;
  transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
}

.hh-changelog-more a:hover {
  transform: translateY(-1px);
  background: rgba(0, 0, 0, 0.08);
  text-decoration: none;
}

.dark .hh-changelog-more a {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #a78bfa;
}

.dark .hh-changelog-more a:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.18);
}
</style>
`}</HTMLBlock>

<br />

***
