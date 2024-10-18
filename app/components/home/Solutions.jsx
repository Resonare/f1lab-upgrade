import { useState } from "react";

import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import ContentCard from "../cards/ContentCard";
import SolutionsCarousel from "./SolutionsCarousel";
import SwitchButton from "../buttons/SwitchButton";

const Why = () => {
  const [sortingByIndustry, setSortingByIndustry] = useState(true);

  const handleSortByIndustry = () => {
    setSortingByIndustry(true);
  };

  const handleSortByTask = () => {
    setSortingByIndustry(false);
  };

  return (
    <Section
      className="text-5xl font-title pb-60 whitespace-normal inline-block w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle className="text-gray-100 flex" col="col-start-1 col-end-5">
        Решения
      </SectionTitle>

      <div className="col-start-1 row-start-2 flex gap-5 mb-30 p-5">
        <SwitchButton
          selected={sortingByIndustry}
          onClick={handleSortByIndustry}
        >
          По задачам
        </SwitchButton>

        <SwitchButton selected={!sortingByIndustry} onClick={handleSortByTask}>
          По задачам
        </SwitchButton>
      </div>

      <SolutionsCarousel className="col-start-1 col-end-5 row-start-3">
        <ContentCard
          className="basis-3/12 gap-30 border-r border-gray-300"
          iconPath="home/solutions-icon1.svg"
          notInGrid={true}
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
          className="ml-[-1px] basis-3/12 gap-30 border-r border-gray-300"
          iconPath="home/solutions-icon1.svg"
          notInGrid={true}
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

        <ContentCard
          className="ml-[-1px] basis-3/12 gap-30 border-r border-gray-300"
          iconPath="home/solutions-icon1.svg"
          notInGrid={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
              С нами приятно иметь дело
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Профессионализм, порядочность, исполнительность, пунктуальность,
              доброжелательность - те качества, которые в F1Lab ценятся превыше
              всего.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="ml-[-1px] basis-3/12 gap-30 border-r border-gray-300"
          iconPath="home/solutions-icon1.svg"
          notInGrid={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
              С нами приятно иметь дело
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Профессионализм, порядочность, исполнительность, пунктуальность,
              доброжелательность - те качества, которые в F1Lab ценятся превыше
              всего.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="basis-3/12 gap-30 border-r border-gray-300"
          iconPath="home/solutions-icon1.svg"
          notInGrid={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
              С нами приятно иметь дело
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Профессионализм, порядочность, исполнительность, пунктуальность,
              доброжелательность - те качества, которые в F1Lab ценятся превыше
              всего.
            </p>
          </div>
        </ContentCard>
      </SolutionsCarousel>
    </Section>
  );
};

export default Why;
