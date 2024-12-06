import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ArticleCard from "../../components/cards/ArticleCard";

const DUMMY_TAGS_DATA = [
  { id: 1, title: "ИТ-Аудит", color: "consulting" },
  { id: 2, title: "Тэг", color: "alert" },
];

const DUMMY_ARTICLES_DATA = [
  {
    id: 1,
    date: new Date(3600 * 24 * 1000 * 365 * 55),
    author: "Антон Швецов",
    imagePath: "/images/articles/article-test.png",
    title:
      "Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе",
    tags: DUMMY_TAGS_DATA,
  },
  {
    id: 2,
    date: new Date(3600 * 24 * 1000 * 365 * 55),
    author: "Антон Швецов",
    imagePath: "/images/articles/article-test.png",
    title:
      "Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе",
    tags: DUMMY_TAGS_DATA,
  },
];

const Articles = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section className="lg:-mt-200 sm:-mt-[82px] md:pt-0" hero={true}>
      <SectionTitle
        col="lg:col-start-2 col-start-1 lg:col-end-4 col-end-5"
        className={`${bgColor} md:text-[28px] sm:pt-30 sm:px-30 p-15 ml-[1px] max-sm:w-full`}
      >
        Связанные с темой посты
      </SectionTitle>

      {DUMMY_ARTICLES_DATA.map((articleData, index) => (
        <ArticleCard
          className={`${bgColor} mb-30`}
          key={index}
          col="lg:col-start-2 col-start-1 lg:col-end-4 col-end-5"
          articleData={articleData}
        />
      ))}
    </Section>
  );
};

export default Articles;
