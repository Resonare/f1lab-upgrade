import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Articles from "../pages/blog/Articles";
import { getPosts } from "../services/ghost.server";

export const meta = () => {
  return [
    { title: "F1Lab | Блог" },
    {
      name: "description",
      content: "Блог компании F1Lab - актуальные новости и статьи об ИТ",
    },
  ];
};

export const loader = async () => {
  try {
    const posts = await getPosts({
      limit: 10,
      include: ["tags", "authors"],
    });

    return json({ posts });
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    return json({ posts: [] });
  }
};

export default function Blog() {
  const { posts } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Articles posts={posts} />
    </div>
  );
}
