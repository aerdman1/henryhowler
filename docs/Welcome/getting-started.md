---
title: Welcome to The Henry Howler!
excerpt: UNDER CONSTRUCTION!
deprecated: false
hidden: false
metadata:
  robots: index
---
A living family archive — stories, photos, and history in one place.

***

<Columns layout="auto">
  <Column>
    ![Family photo](https://family.henryhowler.com/update/docs/birthday-party-for-aunt-barbie-2011)

    *This is a placeholder — swap in a favorite family photo anytime.*

    ## How to navigate

    This site is organized into a few main areas so you can browse by time period, family line, or theme.\
    If you’re not sure where to start, **Through the Decades** is the easiest on-ramp.

    * [Through the Decades](#) — family articles organized by era
    * [Ancestors](#) — family lines, notes, and background
    * [Odds & Ends](#) — stories, memories, and one-offs
    * [Media](#) — images, videos, and other files
    * [Other](#) — misc. pages and experiments
  </Column>

  <Column>
    <div className="hh-aside">
      <h3>Recent posts</h3>
      <p className="hh-sub">Latest updates pulled from GitHub commit history.</p>

      <div id="hh-recent-posts">
        <p className="hh-note"><strong>Recent posts</strong>: loading…</p>
      </div>

      <p className="hh-note" style={{ marginTop: 12 }}>
        If nothing appears here, it usually means the global JS couldn’t map repo file paths to your ReadMe page slugs.
      </p>
    </div>
  </Column>
</Columns>

<HTMLBlock>{`
<style>
/* Optional: hide ReadMe’s right-side TOC on this page */
.content-toc{display:none!important;}

/* Optional: let the guide content span wide */
.rm-Guides .content-body{flex-shrink:1;max-width:100%!important;padding-top:30px;width:100%!important;}

/* Aside styling */
.hh-aside{border:1px solid rgba(0,0,0,.10);border-radius:14px;padding:16px;background:#fff;}
.hh-aside h3{margin:0 0 10px 0;font-size:16px;font-weight:800;}
.hh-aside .hh-sub{margin:0 0 14px 0;font-size:13px;opacity:.75;line-height:1.35;}
.hh-note{font-size:12px;opacity:.75;margin:0;line-height:1.35;}

/* If your JS injects links into #hh-recent-posts, these styles help them look like “cards” */
#hh-recent-posts a{display:block;border:1px solid rgba(0,0,0,.10);border-radius:12px;padding:10px 12px;background:#fafafa;text-decoration:none;color:inherit;}
#hh-recent-posts a:hover{background:#f1f1f1;}
#hh-recent-posts .hh-title{font-weight:800;margin:0 0 2px 0;font-size:14px;}
#hh-recent-posts .hh-meta{font-size:12px;opacity:.7;margin:0;}
</style>
`}</HTMLBlock>
