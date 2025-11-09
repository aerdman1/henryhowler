---
title: Welcome to The Henry Howler!
excerpt: A collection and collaboration of family history, current and future events.
deprecated: false
hidden: false
metadata:
  robots: index
---
<Cards columns={2} title="Cards">
  <Card title="Families" href="families-home" icon="fa-people-roof">
    Family Articles
  </Card>

  <Card title="Ancestors" href="ancestors-home" icon="fa-tree">
    Ancestor Articles
  </Card>

  <Card title="Stories & Memories" href="stories-and-memories-home" icon="fa-book-open">
    Find Stories & Memories
  </Card>

  <Card title="Media" href="media-home" icon="fa-photo-film">
    Images, videos, and other media
  </Card>
</Cards>

<Cards class="otherCard" columns={1} title="Other">
  <Card title="Other" href="other-home" icon="fa-ellipsis" />
</Cards>

**Recent Articles (coming soon)**

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


#content-container > section.content-body.grid-75 > div.rm-Markdown.markdown-body.rm-Markdown.markdown-body.ng-non-bindable > div:nth-child(4) {
display:grid; margin:0 auto;width:100% !important;
grid-template-columns: auto !important;
}

a.Card[href="other-home"] {
  text-align: center;
  font-size: 15px !important;
  background: #b2b0b0 !important;
}

</style>
`}</HTMLBlock>

<HTMLBlock>{`
<button class="add-article-btn" onclick="window.location.href='/docs/new-article-1'">
  <i class="fa-solid fa-plus"></i>
  Add an Article!
</button>
<style>
.add-article-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #2563eb, #1e40af); /* blue gradient */
  color: #fff;
  border: none;
  border-radius: 9999px;
  padding: 12px 22px;
  font-family: 'Segoe UI', Roboto, sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.add-article-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #1d4ed8, #1e3a8a);
}

.add-article-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.add-article-btn i {
  font-size: 16px;
}

</style>
`}</HTMLBlock>

<br />
