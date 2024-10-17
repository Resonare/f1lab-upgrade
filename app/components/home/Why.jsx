import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import ContentCard from "../cards/ContentCard";

const Why = () => {
  return (
    <Section
      className="text-5xl font-title pb-60 whitespace-normal inline-block w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle
        className="text-gray-100 flex justify-center"
        col="col-start-1 col-end-5"
      >
        Почему F1lab?
      </SectionTitle>

      <div className="col-start-1 col-end-5 border-t border-gray-300 border-dashed row-start-2 flex">
        <img src="" alt="" />
      </div>

      <div className="col-start-1 col-end-5 row-start-3 flex">
        <ContentCard
          className="bg-gray-400 border-y border-r mr-[-1px] ml-[1px] gap-60 basis-4/12"
          iconPath="home/why-icon1.svg"
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              Прочный фундамент для бизнеса
            </p>
            <p>
              Уже 15 лет мы предоставляем компаниям прочную ИТ-основу, на
              которую можно опереться.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="bg-gray-400 border-y border-r mr-[-1px] ml-[1px] gap-60 basis-4/12"
          iconPath="home/why-icon2.svg"
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              Техническая сторона — наша забота
            </p>
            <p>
              Решение технических проблем и предотвращение угроз безопасности
              данных — не ваша работа, а наша.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="bg-gray-400 border-y gap-60 basis-4/12"
          iconPath="home/why-icon3.svg"
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              С нами приятно иметь дело
            </p>
            <p>
              Профессионализм, порядочность, исполнительность, пунктуальность,
              доброжелательность - те качества, которые в F1Lab ценятся превыше
              всего.
            </p>
          </div>
        </ContentCard>
      </div>
    </Section>
  );
};

export default Why;
