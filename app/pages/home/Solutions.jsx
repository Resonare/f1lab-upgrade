import { useState } from "react";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import SolutionsCarousel from "../../components/misc/SolutionsCarousel";
import SwitchButton from "../../components/buttons/SwitchButton";
import Carousel from "../../components/misc/Carousel";

const Why = () => {
  const [sortingByIndustry, setSortingByIndustry] = useState(true);

  const handleSortByIndustry = () => {
    setSortingByIndustry(true);
  };

  const handleSortByTask = () => {
    setSortingByIndustry(false);
  };

  const carouselContent = [
    <ContentCard
      key={0}
      className="bg-gray-400 gap-30 border-r max-sm:mr-[1px] border-gray-300"
      iconPath="/images/home/solutions-icon1.svg"
      notInGrid={true}
      hideIconOnMobile={false}
    >
      <div className="flex flex-col gap-15">
        <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
          Прочный фундамент для бизнеса
        </p>
        <p className="text-gray-100 text-xl font-light font-text">
          Уже 15 лет мы предоставляем компаниям прочную ИТ-основу, на которую
          можно опереться.
        </p>
      </div>
    </ContentCard>,
    <ContentCard
      key={1}
      className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
      iconPath="/images/home/solutions-icon1.svg"
      notInGrid={true}
      hideIconOnMobile={false}
    >
      <div className="flex flex-col gap-15">
        <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-[35px]">
          Техническая сторона — наша забота
        </p>
        <p className="text-gray-100 text-xl font-light font-text">
          Решение технических проблем и предотвращение угроз безопасности данных
          — не ваша работа, а наша.
        </p>
      </div>
    </ContentCard>,
    <ContentCard
      key={2}
      className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
      iconPath="/images/home/solutions-icon1.svg"
      notInGrid={true}
      hideIconOnMobile={false}
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
    </ContentCard>,
    <ContentCard
      key={3}
      className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
      iconPath="/images/home/solutions-icon1.svg"
      notInGrid={true}
      hideIconOnMobile={false}
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
    </ContentCard>,
    <ContentCard
      key={4}
      className="bg-gray-400 gap-30 sm:border-r border-gray-300"
      iconPath="/images/home/solutions-icon1.svg"
      notInGrid={true}
      hideIconOnMobile={false}
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
    </ContentCard>,
  ];

  return (
    <Section
      className="text-5xl font-title whitespace-normal w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle
        className="sm:text-gray-100 text-f1-light max-sm:font-extended sm:justify-center max-sm:pb-30 flex"
        col="col-start-1 col-end-5"
      >
        Решения
      </SectionTitle>

      {/* <div className="col-start-1 lg:col-end-2 sm:col-end-3 col-end-2 row-start-2 flex gap-5 mb-30 p-5">
        <SwitchButton
          className="max-sm:w-1/2"
          selected={sortingByIndustry}
          onClick={handleSortByIndustry}
        >
          По отраслям
        </SwitchButton>

        <SwitchButton
          className="max-sm:w-1/2"
          selected={!sortingByIndustry}
          onClick={handleSortByTask}
        >
          По задачам
        </SwitchButton>
      </div> */}

      <SolutionsCarousel className="max-lg:hidden border-t col-start-1 col-end-5 row-start-3">
        {carouselContent}
      </SolutionsCarousel>

      <SolutionsCarousel
        cardsOnPage={3}
        className="lg:hidden max-md:hidden border-t col-start-1 col-end-5 row-start-3"
      >
        {carouselContent}
      </SolutionsCarousel>

      <SolutionsCarousel
        cardsOnPage={1}
        className="md:hidden max-sm:hidden border-t col-start-1 col-end-5 row-start-3"
      >
        {carouselContent}
      </SolutionsCarousel>

      <Carousel
        inverseColor={true}
        className="w-full col-start-1 col-end-5 row-start-3 sm:hidden overflow-hidden"
      >
        <ContentCard
          key={0}
          className="bg-gray-400 gap-30 border-r max-sm:mr-[1px] border-gray-300"
          iconPath="/images/home/solutions-icon1-mobile.svg"
          notInGrid={true}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[22px] font-bold font-extended leading-[26px]">
              Прочный фундамент для бизнеса
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Уже 15 лет мы предоставляем компаниям прочную ИТ-основу, на
              которую можно опереться.
            </p>
          </div>
        </ContentCard>
        <ContentCard
          key={1}
          className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
          iconPath="/images/home/solutions-icon1-mobile.svg"
          notInGrid={true}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[22px] font-bold font-extended leading-[26px]">
              Техническая сторона — наша забота
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Решение технических проблем и предотвращение угроз безопасности
              данных — не ваша работа, а наша.
            </p>
          </div>
        </ContentCard>
        <ContentCard
          key={2}
          className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
          iconPath="/images/home/solutions-icon1-mobile.svg"
          notInGrid={true}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[22px] font-bold font-extended leading-[26px]">
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
          key={3}
          className="bg-gray-400 max-sm:ml-[-1px] gap-30 border-r max-sm:mr-[1px] border-gray-300"
          iconPath="/images/home/solutions-icon1-mobile.svg"
          notInGrid={true}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[22px] font-bold font-extended leading-[26px]">
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
          key={4}
          className="bg-gray-400 gap-30 sm:border-r border-gray-300"
          iconPath="/images/home/solutions-icon1-mobile.svg"
          notInGrid={true}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-100 text-[22px] font-bold font-extended leading-[26px]">
              С нами приятно иметь дело
            </p>
            <p className="text-gray-100 text-xl font-light font-text">
              Профессионализм, порядочность, исполнительность, пунктуальность,
              доброжелательность - те качества, которые в F1Lab ценятся превыше
              всего.
            </p>
          </div>
        </ContentCard>
      </Carousel>
    </Section>
  );
};

export default Why;
