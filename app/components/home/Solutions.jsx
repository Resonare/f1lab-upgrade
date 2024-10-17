import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import ContentCard from "../cards/ContentCard";
import SolutionsCarousel from "./SolutionsCarousel";

const Why = () => {
  return (
    <Section
      className="text-5xl font-title pb-60 whitespace-normal inline-block w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle className="text-gray-100 flex" col="col-start-1 col-end-5">
        Решения
      </SectionTitle>

      <SolutionsCarousel className="col-start-1 col-end-5 row-start-2">
        <ContentCard
          className="basis-3/12 gap-30"
          iconPath="home/solutions-icon1.svg"
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
              Прочный фундамент для бизнеса
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Уже 15 лет мы предоставляем компаниям прочную ИТ-основу, на
              которую можно опереться.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="basis-3/12 gap-30 border-t-[0px]"
          iconPath="home/solutions-icon1.svg"
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
              Техническая сторона — наша забота
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Решение технических проблем и предотвращение угроз безопасности
              данных — не ваша работа, а наша.
            </p>
          </div>
        </ContentCard>
      </SolutionsCarousel>
    </Section>
  );
};

export default Why;
