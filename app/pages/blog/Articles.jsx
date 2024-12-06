import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import ArticleCard from "../../components/cards/ArticleCard";

const DUMMY_TAGS_DATA = [
  { id: 1, title: "ИТ-Аудит", color: "consulting" },
  { id: 2, title: "Тэг", color: "alert" },
];

const DUMMY_ARTICLES_DATA = [
  {
    date: new Date(3600 * 24 * 1000 * 365 * 55),
    author: "Антон Швецов",
    imagePath: "/images/articles/article-test.png",
    title:
      "Как провести аудит IT-инфраструктуры и устранить слабые места в любом бизнесе",
    tags: DUMMY_TAGS_DATA,
  },
  {
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
    <Section hero={true}>
      <SectionTitle col="max-sm:[&>p]:text-[28px] col-start-1 lg:col-end-4 md:col-end-3 col-end-5 max-sm:mb-30">
        Следите за актуальными новостями
      </SectionTitle>

      <div className="lg:col-start-4 md:col-start-3 col-start-1 col-end-5">
        <ContentCard className={`${bgColor} border-y max-sm:ml-[1px]`}>
          Здесь вы найдете новости о событиях в отрасли и анонсы F1lab
        </ContentCard>
      </div>

      <ArticleCard
        className="my-[50px]"
        col="col-start-1 col-end-5"
        articleData={DUMMY_ARTICLES_DATA[0]}
        small={false}
      />

      {DUMMY_ARTICLES_DATA.map((articleData, index) => {
        if (index == 0) return null;

        const col =
          index % 2 != 0
            ? `col-start-1 lg:col-end-3 col-end-5`
            : `lg:col-start-3 col-start-1 col-end-5`;

        return (
          <ArticleCard
            className="lg:mb-60 mb-30"
            key={index}
            col={col}
            articleData={articleData}
          />
        );
      })}
    </Section>
  );
};

export default Articles;
