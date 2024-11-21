import { useLoaderData, useLocation } from "@remix-run/react";

import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import CaseCard from "../../components/cards/CaseCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Carousel from "../../components/misc/Carousel";

const Cases = () => {
  const { allCases } = useLoaderData();

  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");
  const currentLocation = path[path.length - 1];

  return (
    <>
      <Section id="cases" className="max-sm:hidden">
        <SectionTitle
          row="row-start-1"
          col="md:col-start-2 col-start-1 lg:col-end-5 md:col-end-4 col-end-5"
          className="md:pb-60"
        >
          Похожие кейсы
        </SectionTitle>

        <div className="row-start-2 col-start-1 col-end-5 flex flex-wrap">
          {allCases.map((serviceCase) => (
            <CaseCard
              className="border mr-[-1px]"
              outerClassName="mt-[-1px] mb-[-1px] lg:w-1/3 w-1/2"
              caseDataId={serviceCase.id}
              key={serviceCase.id}
              tags={serviceCase.services}
              logoPath={serviceCase.imageUrl}
              currentLocation={currentLocation}
            >
              {serviceCase.description}
            </CaseCard>
          ))}
        </div>

        <SecondaryButton
          row="row-start-4"
          col="col-start-1 max-lg:col-end-5"
          variant="shaded"
          className="text-base font-subtitle"
        >
          Все кейсы
        </SecondaryButton>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Примеры кейсов с аудитом</SectionTitle>

        <Carousel>
          {allCases.map((serviceCase, index) => (
            <CaseCard
              className={`${index != allCases.length - 1 && `border-r`} ${
                index != 0 && `border-l`
              } mr-[-1px]`}
              key={serviceCase.id}
              tags={serviceCase.services}
              logoPath={serviceCase.imageUrl}
              currentLocation={currentLocation}
            >
              {serviceCase.description}
            </CaseCard>
          ))}
        </Carousel>

        <SecondaryButton
          row="row-start-4"
          col="col-start-1 max-lg:col-end-5"
          variant="shaded"
          className="text-base font-subtitle"
        >
          Все кейсы
        </SecondaryButton>
      </div>
    </>
  );
};

export default Cases;
