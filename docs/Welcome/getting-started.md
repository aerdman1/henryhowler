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
     Global / layout
  ================================================== */

  /* Hide table of contents */
  .content-toc {
    display: none;
  }

  /* Modern container layout */
  @media (min-width: 1080px) {
    .rm-Guides .content-body {
      flex-shrink: 1;
      max-width: 100%;
      width: 85%;
    }
  }

  /* ==================================================
     Changelog header layout (title left, meta right)
  ================================================== */

  .hh-changelog-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem; /* spacing between cards */
  }

  .hh-changelog-list article {
    position: relative;
  }

  .hh-changelog-list article header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .hh-changelog-list article header a {
    min-width: 0;
    text-decoration: none;
  }

  /* Title */
  .ChangelogPost_title3ME_vWC95yTD {
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin: 0;
  }

  /* Meta (date/author) on the right */
  .hh-changelog-list article header .DateLine,
  .hh-changelog-list article header address {
    text-align: right;
    white-space: nowrap;
  }

  .DateLine {
    position: static;
    display: block;
    margin-top: 0.15rem;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.1;
    opacity: 0.75;
  }

  .ChangelogPost-author1qH1HFeaAt2u {
    display: block; /* stack under date */
    margin-top: 0.15rem;
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.1;
    opacity: 0.75;
  }

  /* Mobile: stack header content */
  @media (max-width: 640px) {
    .hh-changelog-list article header {
      display: block;
    }

    .hh-changelog-list article header .DateLine,
    .hh-changelog-list article header address {
      text-align: left;
      white-space: normal;
      margin-top: 0.35rem;
    }
  }

  /* ==================================================
     Article cards + separators
  ================================================== */

  .hh-changelog-list article {
    padding: 1.25rem 1.25rem 1.05rem;
    margin: 0; /* gap on wrapper handles spacing */
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    transition: transform 150ms ease, box-shadow 150ms ease, border-color 150ms ease;
  }

  .hh-changelog-list article:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.12);
  }

  .dark .hh-changelog-list article {
    background: rgba(17, 24, 39, 0.85);
    border-color: rgba(255, 255, 255, 0.10);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.30);
  }

  .dark .hh-changelog-list article:hover {
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.40);
  }

  /* Optional inner divider line for clarity */
  .hh-changelog-list article:not(:last-child)::after {
    content: "";
    display: block;
    margin-top: 1.1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    opacity: 0.7;
  }

  .dark .hh-changelog-list article:not(:last-child)::after {
    border-top-color: rgba(255, 255, 255, 0.12);
    opacity: 1;
  }

  /* ==================================================
     YOUR IMAGE WRAP FIX (works with floats + block paragraphs)
     This replaces the old conflicting "p inline !important" trick.
  ================================================== */

  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown {
    overflow: visible;
  }

  /* Float the wrapper so text wraps */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox {
    float: left !important;
    display: block !important;
    max-width: 220px;
    margin: 0.35rem 1rem 0.75rem 0;
  }

  /* Ensure inner wrapper doesn't break layout */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox .lightbox-inner {
    display: block !important;
  }

  /* Image styling */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
    display: block !important;
    width: 200px;
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.10);
    vertical-align: top;
  }

  /* Keep paragraphs block so float wrapping actually works */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown p {
    display: block !important;
    margin: 0.6rem 0 0;
    line-height: 1.6;
  }

  /* Avoid awkward top gap on first paragraph next to image */
  .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown p:first-of-type {
    margin-top: 0;
  }

  /* Clear float at end of section */
  .ChangelogPost_textdx2lvBFg0xLI::after,
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
      max-width: 100%;
      margin: 0 0 0.9rem 0;
    }

    .ChangelogPost_textdx2lvBFg0xLI .rm-Markdown .img.lightbox img {
      width: 100%;
    }
  }

  /* ==================================================
     Excerpt + Read More (right-aligned, below float)
  ================================================== */

  .hh-changelog-excerpt {
    margin-top: 0.9rem;
    opacity: 0.95;
    line-height: 1.65;
  }

  .hh-changelog-more {
    display: block;
    clear: both;        /* drop below floated image */
    margin-top: 1.15rem;
    text-align: right;  /* right align button */
  }

  .hh-changelog-more a {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.55rem 1rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: rgba(0, 0, 0, 0.05);
    transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
    margin-left: 0 !important; /* ensure no leftover offsets */
  }

  .hh-changelog-more a:hover {
    transform: translateY(-1px);
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.16);
    text-decoration: none;
  }

  .dark .hh-changelog-more a {
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
  }

  .dark .hh-changelog-more a:hover {
    background: rgba(255, 255, 255, 0.10);
    border-color: rgba(255, 255, 255, 0.18);
  }
</style>
`}</HTMLBlock>

<br />

***
