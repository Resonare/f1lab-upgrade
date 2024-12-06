import { useContext } from "react";
import DOMPurify from "isomorphic-dompurify";

import { ThemeContext } from "../../store/theme-context";

import ContentCard from "../../components/cards/ContentCard";
import Section from "../../layout/Section";
import { LazyImage } from "../../components/LazyImage";
import SectionTitle from "../../layout/SectionTitle";
import TagContainer from "../../components/misc/TagContainer";

const DUMMY_TAGS_DATA = [
  { id: 1, title: "ИТ-Аудит", color: "consulting" },
  { id: 2, title: "Тэг", color: "alert" },
];

const DUMMY_ARTICLE_DATA = {
  id: 1,
  date: new Date(3600 * 24 * 1000 * 365 * 55),
  author: {
    title: "Антон Швецов",
    subtitle: "Кто?...",
    avatarPath: "/images/avatars/critiques/samarga.png",
  },
  imagePath: "/images/articles/article-test.png",
  title:
    "Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе",
  subtitle:
    "Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе",
  paragraphs: [
    {
      title: "Подзаголовок текста",
      body: `С ростом компании возникла необходимость в организации современной службы техподдержки для обеспечения пользователей быстрым и качественным обслуживанием. Заказчик поручил задачу ИТ-директору, который в свою очередь обратился к нам.
        <br><br><b>С ростом компании возникла необходимость в организации</b> современной службы техподдержки для обеспечения пользователей быстрым и качественным обслуживанием. Заказчик поручил задачу ИТ-директору, который в свою очередь обратился к нам.
        С ростом компании возникла необходимость в организации современной службы техподдержки для обеспечения пользователей быстрым и качественным обслуживанием. Заказчик поручил задачу ИТ-директору, который в свою очередь обратился к нам.
        С ростом компании возникла необходимость в организации современной службы техподдержки для обеспечения пользователей быстрым и качественным обслуживанием. Заказчик поручил задачу ИТ-директору, который в свою очередь обратился к нам.
        <br><br>С ростом компании возникла необходимость в организации современной службы техподдержки для обеспечения пользователей быстрым и качественным обслуживанием. Заказчик поручил задачу ИТ-директору, который в свою очередь обратился к нам.`,
      tags: DUMMY_TAGS_DATA,
    },
    {
      imagePath: "/images/articles/article-test.png",
      body: `Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесеКак провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесеКак провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе`,
    },
    {
      imagePath: "/images/articles/article-test.png",
      body: `Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесеКак провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесеКак провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе`,
    },
  ],
  tags: DUMMY_TAGS_DATA,
};

const ArticleInfo = () => {
  const articleData = DUMMY_ARTICLE_DATA;

  if (articleData == null || articleData.length == 0) return;

  const { bgColor } = useContext(ThemeContext);

  const createMarkup = (html) => {
    if (!html) return null;

    return {
      __html: DOMPurify.sanitize(html),
    };
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
                <LazyImage
                  className="w-60 h-60 rounded-[15px]"
                  src={articleData.author.avatarPath}
                  alt=""
                />

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

            <div className="max-lg:w-1/2 flex flex-col">
              <p className="font-text text-sm uppercase font-semibold">
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
          </div>
        </ContentCard>

        <ContentCard className="border-b">
          <TagContainer
            titleClassName="text-gray-300 uppercase font-bold"
            title="Тэги"
          >
            {articleData.tags}
          </TagContainer>
        </ContentCard>
      </div>

      <div className="lg:col-start-2 col-start-1 col-end-5 row-start-1">
        <div className="flex flex-col gap-5 border-t border-dashed border-gray-200 mt-[-1px] sm:pt-30 sm:px-30 p-15">
          <p className="text-gray-300 text-sm uppercase font-text font-bold">
            Пост в блоге
          </p>

          <SectionTitle>{articleData.title}</SectionTitle>
        </div>

        <div className="max-lg:hidden relative overflow-hidden h-[300px]">
          <LazyImage
            className="w-full absolute -translate-y-1/2 top-1/2"
            src={articleData.imagePath}
          />
        </div>
      </div>

      <div className="lg:hidden relative overflow-hidden sm:h-[300px] col-start-1 col-end-5">
        <LazyImage
          className="w-full sm:absolute sm:-translate-y-1/2 sm:top-1/2"
          src={articleData.imagePath}
        />
      </div>

      <p
        className={`${bgColor} max-sm:border-b border-dashed ml-[1px] lg:col-start-2 col-start-1 lg:col-end-4 col-end-5 sm:pt-30 sm:px-30 p-15 font-expanded font-extrabold text-[28px] leading-tight`}
      >
        {articleData.subtitle}
      </p>

      {articleData.paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className="lg:col-start-2 col-start-1 lg:col-end-4 col-end-5"
        >
          {paragraph.imagePath && (
            <LazyImage
              className="max-h-[400px] w-full object-cover"
              src={paragraph.imagePath}
            />
          )}
          <div
            key={index}
            className={`${bgColor} flex flex-col gap-15 ml-[1px] sm:p-30 p-15`}
          >
            {paragraph.title && (
              <p className="text-[22px] font-bold font-extended leading-none">
                {paragraph.title}
              </p>
            )}
            <p
              className="text-xl font-text font-light leading-tight"
              dangerouslySetInnerHTML={createMarkup(paragraph.body)}
            />
            <TagContainer>{paragraph.tags}</TagContainer>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ArticleInfo;
