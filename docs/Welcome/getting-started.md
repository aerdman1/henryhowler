---
title: Getting Started with The Henry Howler
excerpt: A collection and collaboration of family history, current and future events.
deprecated: false
hidden: false
metadata:
  robots: index
---
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
    color: var(--Card-title-color);
    font-weight: 600;
    margin-top: 10px;
    font-size: 30px;
}  
  
  
/* Fun fresh palette—one color per card */
.Card:nth-child(1) { background: #3AA2FF; } /* sky blue */
.Card:nth-child(2) { background: #FF6E59; } /* coral */
.Card:nth-child(3) { background: #FFC23A; } /* sunflower */
.Card:nth-child(4) { background: #6BCB77; } /* minty green */

.Card {
  display: block;
  padding: 1.5rem;
  color: #fff;
  text-decoration: none;
  border-radius: 0.75rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Hover “lift” effect */
.Card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
</style>
`}</HTMLBlock>