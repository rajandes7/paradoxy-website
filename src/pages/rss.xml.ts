import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/config";

export async function GET() {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(post => ({
      link: `/blog/${post.id}/`,
      title: post.data.title,
      description: post.data.description,
      author: post.data.author,
      pubDate: post.data.modDatetime ?? post.data.pubDatetime,
    })),
  });
}
