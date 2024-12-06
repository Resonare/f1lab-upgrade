import Prices from "../pages/item-article/Prices";
import Pockets from "../pages/item-article/Pockets";
import ArticleInfo from "../pages/item-article/ArticleInfo";
import Articles from "../pages/item-article/Articles";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Портфолио", content: "Welcome to Remix!" },
  ];
};

export default function Article() {
  // params.articleId

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <ArticleInfo />
      <Articles />
      <Prices />
      <Pockets />
    </div>
  );
}
