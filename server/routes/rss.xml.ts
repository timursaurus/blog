import { serverQueryContent } from "#content/server";
import rss from "rss";

export default defineEventHandler(async (event) => {

  const feed = new rss({
    title: 'Timur Bolotov',
    site_url: 'https://bolotov.me',
    feed_url: 'https://bolotov.me/rss.xml',
  })

  const content = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({
      _partial: false,
    })
    .find();

  const posts = content.filter(p => p?._path?.includes('/posts'));

  for (const post of posts) {
    feed.item({
      title: post?.title || '',
      url: `https://bolotov.me${post._path}`,
      date: post.date,
      description: post.description,
    })
  }
  const xml = feed.xml({ indent: true });
  event.node.res.setHeader("Content-Type", "text/xml");
  event.node.res.end(xml)
});
