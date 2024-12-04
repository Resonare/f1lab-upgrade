import Section from "./Section";
import SectionTitle from "./SectionTitle";
import CaseCard from "../components/cards/CaseCard";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Carousel from "../components/misc/Carousel";
import CritiqueCard from "../components/cards/CritiqueCard";

const CasesSection = ({
  title = "Примеры кейсов",
  mobileInverseColor = false,
  critiquesData,
  serviceCasesData,
}) => {
  if (!serviceCasesData || serviceCasesData.length <= 0) return;

  const caseCards = serviceCasesData.map((serviceCase, index) => (
    <CaseCard
      className={`sm:border mr-[-1px]`}
      outerClassName="sm:mt-[-1px] sm:mb-[-1px] sm:w-1/2 min-h-[400px]"
      key={serviceCase.id}
      caseData={serviceCase}
    />
  ));

  const mobileCaseCards = serviceCasesData.map((serviceCase, index) => (
    <CaseCard
      className={`${
        index != serviceCasesData.length - 1 && `max-sm:border-r`
      } ${index != 0 && `max-sm:border-l`} sm:border mr-[-1px]`}
      outerClassName="sm:mt-[-1px] sm:mb-[-1px] sm:w-1/2"
      key={serviceCase.id}
      caseData={serviceCase}
      inverseColor={mobileInverseColor}
    />
  ));

  return (
    <>
      <Section id="cases" className="max-sm:hidden my-60">
        <SectionTitle
          row="row-start-1"
          col="md:col-start-2 col-start-1 lg:col-end-5 md:col-end-4 col-end-5"
          className="md:pb-60"
        >
          {title}
        </SectionTitle>

        <div className={`col-start-1 col-end-5 flex flex-wrap`}>
          <div
            className={`${
              critiquesData?.length > 0 && `lg:w-2/3`
            } flex flex-wrap`}
          >
            {caseCards}
          </div>

          <SecondaryButton
            variant="shaded"
            className="lg:border-t-0 lg:border-r lg:w-1/3 lg:order-last text-base font-subtitle"
          >
            Все кейсы
          </SecondaryButton>

          <CritiqueCard
            className={`max-lg:mt-60 lg:border-t lg:w-1/3 mt-[-1px]`}
            critiquesData={critiquesData}
          />
        </div>
      </Section>

      <Section
        className="sm:hidden"
        innerClassName="max-sm:flex flex-col gap-30"
        inverseColor={mobileInverseColor}
      >
        <SectionTitle className={mobileInverseColor ? `text-gray-100` : null}>
          {title}
        </SectionTitle>

        <Carousel inverseColor={mobileInverseColor}>{mobileCaseCards}</Carousel>

        <SecondaryButton
          variant={mobileInverseColor ? `info` : `shaded`}
          className={`${
            mobileInverseColor && `border border-gray-300 text-gray-100`
          } text-base font-subtitle`}
        >
          Все кейсы
        </SecondaryButton>
        {console.log(critiquesData)}
        <CritiqueCard
          className={`max-lg:mt-60 lg:border-t lg:w-1/3 mt-[-1px]`}
          critiquesData={critiquesData}
          inverseColor={mobileInverseColor}
        />
      </Section>
    </>
  );
};

export default CasesSection;
