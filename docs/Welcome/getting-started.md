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

<Cards class="otherCard" columns={1} title="Other">
  <Card title="Other" href="other-home" icon="" />
</Cards>

<br />

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


a.Card[href="other-home"] {
  text-align: center;
  font-size: 15px !important;
  background: grey !important;
  display:grid; margin:0 auto;width:100% !important;
grid-template-columns: auto !important;
}


</style>
`}</HTMLBlock>
