---
title: Welcome to The Henry Howler!
excerpt: A collection and collaboration of family history, current and future events.
deprecated: false
hidden: false
metadata:
  robots: index
---
<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Typewriter Effect</title>
  <style>
    /* ── Base typewriter styles ─────────────────────────────────── */
    .typewriter {
      display: inline-block;        /* shrink-wrap to text */
      overflow: hidden;             /* hide the overflowing text */
      white-space: nowrap;          /* keep it on one line */
      border-right: .1em solid #000;/* the “caret” */
      /* animate typing then blink */
      animation:
        typing 3s steps(30, end) forwards,
        blink-caret .7s step-end infinite;
    }
    /* you can chain multiple delays on the two animations */
    .typewriter.delay {
      animation-delay: 0s, 3s;      /* start blinking 3s in */
    }

    /* ── Keyframes ───────────────────────────────────────────────── */
    @keyframes typing {
      from { width: 0 }
      to   { width: 100% }
    }
    @keyframes blink-caret {
      50% { border-color: transparent; }
    }

    /* ── Multi‐line support ─────────────────────────────────────── */
    .typewriter-wrap {
      display: block;               /* allow block‐level elements */
      /* remove the nowrap if you want wrapping in paragraphs: */
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="row clearfix">
    <div class="col-xs-9">
      <!-- HEADER: 30 steps over 3s -->
      <h1 class="typewriter typewriter-wrap">
        Welcome to The Henry Howler!
      </h1>

      <div class="excerpt">
        <!-- PARAGRAPH: same speed, but wait until the header finishes -->
        <p class="typewriter typewriter-wrap delay">
          A collection and collaboration of family history, current and future events.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`}</HTMLBlock>

<br />

<Cards columns={2} title="Families">
  <Card title="Don Henry’s" href="don-henrys" icon="fa-user-alt">
    Learn more about Don’s branch of the family
  </Card>

  <Card title="Fred Henry’s" href="fred-henrys" icon="fa-user-circle">
    Learn more about Fred’s branch of the family
  </Card>

  <Card title="Gene Henry’s" href="gene-henrys" icon="fa-user-friends">
    Learn more about Gene’s branch of the family
  </Card>

  <Card title="John Henry’s" href="john-henrys" icon="fa-users">
    Learn more about John’s branch of the family
  </Card>
</Cards>

<MasterPageGrid />

## Join Us in Exploring:

***

### Roots & Migration

Trace the path from Simon Henry’s 1797 Connecticut land deed through subsequent waves of migration into Ohio, California, and beyond—each move weaving new threads into our family tapestry.

### Heroes & Service

Read the gripping firsthand accounts of Capt. Charles E. Henry leading the 42nd Regiment O.V.I. and follow Fred H. Henry’s journey of valor in World War II, where courage defined our legacy.

### Law & Legacy

Discover how Judge Frederick A. Henry’s rulings on Cleveland’s bench left an indelible mark on justice in our community—and how that commitment to fairness still resonates today.

### Art & Adventure

Delight in Rhoda Henry Messner’s soul-stirring poetry and join Janet Henry’s high-altitude adventures, from mountaintop climbs to globe-spanning explorations that expand the family story.

<HTMLBlock>{`
<style>
.CardsGrid .Card-title {
    font-weight: 600;
    margin-top: 10px;
    font-size: 30px;
    color: #fff;
}
  
  .CardsGrid .Card-content {
      color: #fff;
}
</style>
`}</HTMLBlock>