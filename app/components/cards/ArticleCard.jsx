import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

import { LazyImage } from "../LazyImage";
import TagContainer from "../misc/TagContainer";

const ArticleCard = ({
  small = true,
  articleData,
  row = "",
  col = "",
  className = "",
  bgColor,
}) => {
  if (articleData == null || Object.keys(articleData).length === 0) return null;

  return (
    <div
      className={`${row} ${col} ${className} ${
        !small
          ? `max-lg:${bgColor} max-lg:border-b max-lg:ml-[1px] max-lg:flex-col`
          : `max-md:${bgColor} max-md:border-b max-md:ml-[1px] max-md:flex-col`
      } group flex border-dashed border-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors`}
    >
      {articleData.imagePath && (
        <div
          className={`${
            small ? `md:w-1/2 max-md:h-[200px]` : `lg:w-1/2 max-lg:h-[200px]`
          } overflow-hidden relative`}
        >
          <LazyImage
            className="w-full min-h-[300px] absolute -translate-y-1/2 top-1/2 object-cover group-hover:scale-105 transition-transform duration-300"
            src={articleData.imagePath}
            alt={articleData.title}
          />
        </div>
      )}

      <div
        className={cn(
          small
            ? `md:w-1/2 md:gap-30 gap-10 md:p-15`
            : `lg:w-1/2 lg:gap-30 gap-10 lg:p-15`,
          `flex flex-col xl:p-30 px-15 pt-15 pb-30`
        )}
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

        {articleData.excerpt && (
          <p className="text-gray-500 text-sm font-text line-clamp-3">
            {articleData.excerpt}
          </p>
        )}

        <TagContainer hoverable={false}>{articleData?.tags}</TagContainer>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  small: PropTypes.bool,
  articleData: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    author: PropTypes.string,
    excerpt: PropTypes.string,
    tags: PropTypes.array,
  }),
  row: PropTypes.string,
  col: PropTypes.string,
  className: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ArticleCard;
