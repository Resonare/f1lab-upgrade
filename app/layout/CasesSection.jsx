import { useNavigate } from "@remix-run/react";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import CaseCard from "../components/cards/CaseCard";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Carousel from "../components/misc/Carousel";
import CritiqueSection from "./CritiquesSection";

const CasesSection = ({
  title = "Примеры кейсов",
  mobileInverseColor = false,
  critiquesData,
  serviceCasesData,
}) => {
  const navigate = useNavigate();

  if (!serviceCasesData || serviceCasesData.length <= 0) return;

  const splitArrayIntoTwo = (array) => {
    const part1 = array.slice(0, Math.ceil(array.length / 2));
    const part2 = array.slice(Math.ceil(array.length / 2));

    return [part1, part2];
  };

  return (
    <>
      <Section id="cases" className="max-sm:hidden my-60">
        <SectionTitle
          row="row-start-1"
          col="md:col-start-2 col-start-1 lg:col-end-4 md:col-end-4 col-end-5"
          className="md:pb-60"
        >
          {title}
        </SectionTitle>

        <div
          className={`col-start-1 col-end-5 flex flex-wrap [&>div:last-child]:grow items-start`}
        >
          <div className="flex flex-wrap lg:w-2/3 w-full">
            <div className="flex h-fit w-full">
              {splitArrayIntoTwo(serviceCasesData).map((partData, index) => (
                <div key={index} className="basis-1/2 [&>div>div]:border">
                  {partData.map((caseData) => (
                    <CaseCard
                      key={caseData.id}
                      className="mr-[-1px]"
                      outerClassName="sm:mt-[-1px]"
                      caseData={caseData}
                    />
                  ))}

                  {index == 0 && (
                    <SecondaryButton
                      variant="shaded"
                      className="lg:border-t-0 mt-[-1px] text-base font-subtitle max-md:hidden"
                      onClick={() => navigate("/cases")}
                    >
                      Все кейсы
                    </SecondaryButton>
                  )}
                </div>
              ))}
            </div>

            <SecondaryButton
              variant="shaded"
              className="md:hidden mt-[-1px] text-base font-subtitle"
              onClick={() => navigate("/cases")}
            >
              Все кейсы
            </SecondaryButton>
          </div>
        </div>

        {/* <CritiqueSection
          className={`mt-120 max-xl:hidden`}
          col="col-start-1 col-end-5"
          cardsOnPage={3}
          critiquesData={critiquesData}
        />

        <CritiqueSection
          className={`mt-120 xl:hidden max-md:hidden`}
          col="col-start-1 col-end-5"
          cardsOnPage={2}
          critiquesData={critiquesData}
        />

        <CritiqueSection
          className={`mt-120 md:hidden max-sm:hidden`}
          col="col-start-1 col-end-5"
          cardsOnPage={1}
          critiquesData={critiquesData}
        /> */}
      </Section>

      <Section
        className="sm:hidden"
        innerClassName="max-sm:flex flex-col gap-30"
        inverseColor={mobileInverseColor}
      >
        <SectionTitle className={mobileInverseColor ? `text-gray-100` : null}>
          {title}
        </SectionTitle>

        <Carousel inverseColor={mobileInverseColor}>
          {serviceCasesData.map((serviceCase, index) => (
            <CaseCard
              key={serviceCase.id}
              className={`${
                index != serviceCasesData.length - 1 && `max-sm:border-r`
              } ${index != 0 && `max-sm:border-l`} border-b mr-[-1px]`}
              caseData={serviceCase}
              inverseColor={mobileInverseColor}
            />
          ))}
        </Carousel>

        <SecondaryButton
          variant={mobileInverseColor ? `info` : `shaded`}
          className={`${mobileInverseColor && `border`}`}
          onClick={() => navigate("/cases")}
        >
          Все кейсы
        </SecondaryButton>

        {/* <CritiqueSection
          className={`sm:hidden`}
          col="col-start-1 col-end-5"
          minimized={true}
          inverseColor={mobileInverseColor}
          critiquesData={critiquesData}
        /> */}
      </Section>
    </>
  );
};

export default CasesSection;
