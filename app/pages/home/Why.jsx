import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import Animation from "../../components/misc/animations/Animation";

import whyAnimationJson from "../../components/misc/animations/why-animation.json";

const Why = () => {
  return (
    <Section
      className="mt-[-1px] text-5xl font-title whitespace-normal inline-block w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle
        className="sm:text-gray-100 text-f1-light max-sm:font-extended flex sm:justify-center max-sm:pb-30"
        col="col-start-1 col-end-5"
      >
        Почему F1LAB?
      </SectionTitle>

      <div className="sm:h-[360px] h-200 col-start-1 col-end-5 border-t border-gray-300 border-dashed row-start-2 flex justify-center">
        <Animation data={whyAnimationJson} />
      </div>

      <div className="col-start-1 col-end-5 row-start-3 flex max-md:flex-col">
        <ContentCard
          className="bg-gray-400 border-y border-r basis-4/12"
          iconPath="/images/home/why-icon1.svg"
          hideIconOnMobile={false}
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              Прочная основа для бизнеса
            </p>
            <p>
              Уже 15 лет мы предоставляем компаниям прочную ИТ-платформу,
              которая поддерживает бизнес и помогает ему расти.
            </p>
          </div>
        </ContentCard>

        <ContentCard
          className="bg-gray-400 sm:border-y border-b border-r max-sm:border-t basis-4/12"
          iconPath="/images/home/why-icon2.svg"
          hideIconOnMobile={false}
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              Сосредоточьтесь на главном
            </p>
            <p>
              Решение технических задач и предотвращение угроз безопасности —
              наша забота.
            </p>
          </div>
        </ContentCard>
        <ContentCard
          className="bg-gray-400 border-y max-sm:border-x basis-4/12"
          iconPath="/images/home/why-icon3.svg"
          hideIconOnMobile={false}
          inverseColor={true}
        >
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              С нами приятно иметь дело
            </p>
            <p>
              Профессионализм, порядочность, исполнительность,
              доброжелательность - те качества, которые мы ценим превыше всего.
            </p>
          </div>
        </ContentCard>
      </div>
    </Section>
  );
};

export default Why;
