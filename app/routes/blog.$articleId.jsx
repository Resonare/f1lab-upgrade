import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "../services/ghost.server";
//import Prices from "../pages/item-article/Prices";
//import Pockets from "../pages/item-article/Pockets";
import ArticleInfo from "../pages/item-article/ArticleInfo";
//import Articles from "../pages/item-article/Articles";
import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

export const meta = ({ data }) => {
  if (!data?.post) {
    return [
      { title: "F1Lab | Статья не найдена" },
      { name: "description", content: "Статья не найдена" },
    ];
  }

  const { post } = data;

  return [
    { title: post.meta_title || `${post.title} | F1Lab` },
    {
      name: "description",
      content: post.meta_description || post.excerpt,
    },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:image", content: post.og_image || post.feature_image },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.excerpt },
    {
      name: "twitter:image",
      content: post.twitter_image || post.feature_image,
    },
  ];
};

export const loader = async ({ params }) => {
  const { articleId } = params;

  if (!articleId) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const post = await getPostBySlug(articleId);

    if (!post) {
      throw new Response("Not Found", { status: 404 });
    }

    return Response.json({ post });
  } catch (error) {
    console.error("Failed to load blog post:", error);
    throw new Response("Not Found", { status: 404 });
  }
};

export default function Article() {
  const { post } = useLoaderData();

  const { bgColor } = useContext(ThemeContext);

  return (
    <div className="pt-30">
      <ArticleInfo post={post} bgColor={bgColor} />
      {/** <Articles />
      <Prices />
      <Pockets /> **/}
    </div>
  );
}
