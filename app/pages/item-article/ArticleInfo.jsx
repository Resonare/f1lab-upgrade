import DOMPurify from "isomorphic-dompurify";

import ContentCard from "../../components/cards/ContentCard";
import Section from "../../layout/Section";
import { LazyImage } from "../../components/LazyImage";
import SectionTitle from "../../layout/SectionTitle";
import TagContainer from "../../components/misc/TagContainer";

import PropTypes from "prop-types";

const ArticleInfo = ({ post, bgColor }) => {
  if (!post) return null;

  const createMarkup = (html) => {
    if (!html) return null;

    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  // Transform Ghost data to match component structure
  const articleData = {
    id: post.id,
    date: new Date(post.published_at),
    author: {
      title: post.authors?.[0]?.name || "F1Lab",
      subtitle: "Автор блога F1Lab",
      avatarPath:
        post.authors?.[0]?.profile_image ||
        "/images/avatars/default-author.png",
    },
    imagePath: post.feature_image,
    title: post.title,
    subtitle: post.excerpt || "",
    content: post.html,
    tags:
      post.tags?.map((tag) => ({
        id: tag.id,
        title: tag.name,
        color: tag.color || "consulting",
      })) || [],
    reading_time: post.reading_time,
  };

  return (
    <Section className="text-gray-400" hero={true}>
      <div className="col-start-1 lg:col-end-2 col-end-5">
        <ContentCard className="border-y">
          <div className="flex flex-col gap-30">
            <div className="max-lg:w-1/2 max-sm:w-full flex flex-col gap-15">
              <p className="text-gray-300 font-text text-sm uppercase font-semibold">
                Автор
              </p>
              <div className="flex gap-15">
                {/** <LazyImage
                  className="w-60 h-60 rounded-[15px]"
                  src={articleData.author.avatarPath}
                  alt=""
                /> **/}

                <div className="flex flex-col gap-10 justify-center">
                  <p className="text-[22px] font-extended font-bold leading-none">
                    {articleData.author.title}
                  </p>
                  <p className="text-gray-300 text-sm font-text leading-none">
                    {articleData.author.subtitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="max-lg:w-1/2 flex flex-col gap-15">
              <div className="flex flex-col">
                <p className="text-gray-300 font-text text-sm uppercase font-semibold">
                  Дата публикации
                </p>
                <p className="text-[22px] font-extended font-bold">
                  {articleData.date.toLocaleString("ru", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              {articleData.reading_time && (
                <div className="flex flex-col">
                  <p className="text-gray-300 font-text text-sm uppercase font-semibold">
                    Время чтения
                  </p>
                  <p className="text-[22px] font-extended font-bold">
                    {articleData.reading_time} мин
                  </p>
                </div>
              )}
            </div>
          </div>
        </ContentCard>
        {post.tags?.length > 0 && (
          <ContentCard className="border-b">
            <TagContainer
              titleClassName="text-gray-300 uppercase font-bold"
              title="Тэги"
            >
              {articleData.tags}
            </TagContainer>
          </ContentCard>
        )}
      </div>

      <div className="lg:col-start-2 col-start-1 lg:col-end-5 col-end-5 row-start-1  ">
        {/** articleData.subtitle && (
        <p
          className={`${bgColor} max-sm:border-b border-dashed ml-[1px] lg:col-start-2 col-start-1 lg:col-end-5 col-end-5 sm:pt-30 sm:px-30 p-15 font-expanded font-extrabold text-[28px] leading-tight`}
        >
          {articleData.subtitle}
        </p>
      ) **/}

        {/* Ghost post content */}
        <div>
          <div className="flex flex-col gap-5 border-t border-s border-dashed border-gray-200 mt-[-1px] sm:pt-30 sm:px-30 pt-60 px-15 bg-gray-100 bg-opacity-100 z-90">
            <SectionTitle>{articleData.title}</SectionTitle>
          </div>

          {articleData.imagePath && (
            <div className="max-lg:hidden relative overflow-hidden h-[300px]">
              <LazyImage
                className="w-full absolute -translate-y-1/2 top-1/2 object-cover"
                src={articleData.imagePath}
                alt={articleData.title}
              />
            </div>
          )}
        </div>

        {articleData.imagePath && (
          <div className="lg:hidden relative overflow-hidden sm:h-[300px] col-start-1 col-end-5">
            <LazyImage
              className="w-full sm:absolute sm:-translate-y-1/2 sm:top-1/2 object-cover"
              src={articleData.imagePath}
              alt={articleData.title}
            />
          </div>
        )}
        <div
          className={`${bgColor} ml-[1px] sm:p-30 p-15 ghost-content`}
          dangerouslySetInnerHTML={createMarkup(articleData.content)}
        />
      </div>
    </Section>
  );
};

ArticleInfo.propTypes = {
  post: PropTypes.object,
  bgColor: PropTypes.string,
};

export default ArticleInfo;
