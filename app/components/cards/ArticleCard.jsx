import { useContext } from "react";
import { NavLink } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";

import { LazyImage } from "../LazyImage";
import TagContainer from "../misc/TagContainer";

const ArticleCard = ({
  small = true,
  articleData,
  row = "",
  col = "",
  className = "",
}) => {
  if (articleData == null || articleData.length == 0) return;

  const { bgColor } = useContext(ThemeContext);

  return (
    <NavLink
      to={String(articleData.id)}
      className={`${row} ${col} ${className} ${
        !small
          ? `max-lg:${bgColor} max-lg:border-b max-lg:ml-[1px] max-lg:flex-col`
          : `max-md:${bgColor} max-md:border-b max-md:ml-[1px] max-md:flex-col`
      } group flex border-dashed border-gray-200`}
    >
      <div
        className={`${
          small ? `md:w-1/2 max-md:h-[200px]` : `lg:w-1/2 max-lg:h-[200px]`
        } overflow-hidden relative`}
      >
        <LazyImage
          className="w-full min-h-[300px] absolute -translate-y-1/2 top-1/2"
          src={articleData.imagePath}
        />
      </div>

      <div
        className={`${
          small
            ? `md:w-1/2 md:gap-30 gap-10 md:p-15`
            : `lg:w-1/2 lg:gap-30 gap-10 lg:p-15`
        } flex flex-col xl:p-30 px-15 pt-15 pb-30`}
      >
        <div className="flex gap-15 text-gray-300 uppercase text-sm font-text font-semibold">
          <p>
            {articleData.date.toLocaleString("ru", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>{articleData.author}</p>
        </div>

        <p
          className={`${
            small ? `text-[22px]` : `sm:text-[28px] text-[26px]`
          } group-hover:underline text-gray-400 sm:font-expanded font-extended font-extrabold sm:leading-tight leading-none`}
        >
          {articleData.title}
        </p>

        <TagContainer hoverable={false}>{articleData.tags}</TagContainer>
      </div>
    </NavLink>
  );
};

export default ArticleCard;
