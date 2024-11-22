import { useLoaderData, useLocation } from "@remix-run/react";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import CaseCard from "../../components/cards/CaseCard";
import ReviewCard from "../../components/cards/ReviewCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Carousel from "../../components/misc/Carousel";

const Cases = () => {
  const serviceCases = useLoaderData();

  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");
  const currentLocation = path[path.length - 1];

  if (serviceCases[0]) {
    serviceCases[0] = {
      ...serviceCases[0],
      row: "row-start-2",
      col: "col-start-1 col-end-3 lg:col-end-1",
    };
  }

  if (serviceCases[1]) {
    serviceCases[1] = {
      ...serviceCases[1],
      row: "row-start-2",
      col: "col-start-3 col-end-5 lg:col-start-2 lg:col-end-2",
    };
  }

  if (serviceCases[2]) {
    serviceCases[2] = {
      ...serviceCases[2],
      row: "lg:row-start-2 row-start-3",
      col: "col-start-1 col-end-3 lg:col-start-3 lg:col-end-3",
    };
  }

  if (serviceCases[3]) {
    serviceCases[3] = {
      ...serviceCases[3],
      row: "row-start-3",
      col: "lg:col-start-1 col-start-3 lg:col-end-1 col-end-5",
    };
  }

  if (serviceCases[4]) {
    serviceCases[4] = {
      ...serviceCases[4],
      row: "row-start-3",
      col: "col-start-2",
    };
  }

  if (serviceCases[5]) {
    serviceCases[5] = {
      ...serviceCases[5],
      row: "row-start-3",
      col: "col-start-3",
    };
  }

  return (
    <>
      <Section id="cases" className="max-sm:hidden">
        <SectionTitle
          row="row-start-1"
          col="md:col-start-2 col-start-1 lg:col-end-5 md:col-end-4 col-end-5"
          className="md:pb-60"
        >
          Примеры кейсов с аудитом
        </SectionTitle>

        {serviceCases.map((serviceCase) => (
          <CaseCard
            className="border mr-[-1px]"
            outerClassName="mt-[-1px] mb-[-1px]"
            key={serviceCase.id}
            tags={serviceCase.services}
            logoPath={serviceCase.imageUrl}
            currentLocation={currentLocation}
            row={serviceCase.row}
            col={serviceCase.col}
          >
            {serviceCase.description}
          </CaseCard>
        ))}

        <ReviewCard
          className="ml-[0.5px] mt-[-1px] max-lg:hidden"
          row="row-start-2 row-end-4"
          col="col-start-4 col-end-4"
          reviewPaths={[
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
          ]}
        ></ReviewCard>

        <ReviewCard
          row="row-start-5"
          col="col-start-1 col-end-5"
          reviewPaths={[
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
          ]}
          reviewsOnPage={3}
          className="lg:hidden"
        ></ReviewCard>

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
          {serviceCases.map((serviceCase, index) => (
            <CaseCard
              className={`${index != serviceCases.length - 1 && `border-r`} ${
                index != 0 && `border-l`
              } mr-[-1px]`}
              key={serviceCase.id}
              tags={serviceCase.services}
              logoPath={serviceCase.imageUrl}
              currentLocation={currentLocation}
              row={serviceCase.row}
              col={serviceCase.col}
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

        <ReviewCard
          reviewPaths={[
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
          ]}
          className="h-fit"
        ></ReviewCard>
      </div>
    </>
  );
};

export default Cases;
