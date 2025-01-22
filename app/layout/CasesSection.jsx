import { useNavigate } from "@remix-run/react";

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
          className={`col-start-1 col-end-5 flex flex-wrap [&>div:last-child]:grow  items-start`}
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
                </div>
              ))}
            </div>

            <SecondaryButton
              variant="shaded"
              className="lg:border-t-0 lg:border-r lg:w-[50%] mt-[-1px] text-base font-subtitle"
              onClick={() => navigate("/cases")}
            >
              Все кейсы
            </SecondaryButton>
          </div>

          <CritiqueCard
            className={`max-lg:mt-60 lg:border-t w-1/3 mt-[-1px]`}
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
          onClick={() => navigate("/some/path")}
        >
          Все кейсы
        </SecondaryButton>

        <CritiqueCard
          className={`max-lg:mt-60 max-sm:mt-0 lg:border-t lg:w-1/3 mt-[-1px]`}
          critiquesData={critiquesData}
          inverseColor={mobileInverseColor}
        />
      </Section>
    </>
  );
};

export default CasesSection;
