---
title: Welcome to The Henry Howler!
excerpt: A collection and collaboration of family history, current and future events.
deprecated: false
hidden: false
metadata:
  robots: index
---
<Cards columns={2} title="Cards">
  <Card title="Families" href="families-home" icon="fa-user-alt">
    Family Articles
  </Card>

  <Card title="Ancestors" href="ancestors-home" icon="fa-user-circle">
    Ancenstor Articles
  </Card>

  <Card title="Stories & Memories" href="stories-and-memories-home" icon="fa-user-friends">
    Find Stories & Memories
  </Card>

  <Card title="Media" href="media-home" icon="fa-users">
    Images, videos, and other media
  </Card>
</Cards>

<Cards columns={1} title="Other">
  <Card title="Other" href="other-home" icon="fa-user-alt">
    Other fun stuff!
  </Card>
</Cards>

<br />

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

#content-container > section.content-body.grid-75 > div.rm-Markdown.markdown-body.rm-Markdown.markdown-body.ng-non-bindable > div:nth-child(3) {
    grid-template-columns: repeat(1, 1fr) !important;
  text-align: center;
background:grey !important;

}
</style>
`}</HTMLBlock>
