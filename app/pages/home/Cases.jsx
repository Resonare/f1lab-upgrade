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

  return (
    <div id="cases">
      <Section className="max-sm:hidden my-60">
        <SectionTitle
          row="row-start-1"
          col="col-start-2 col-end-5"
          className="md:pb-60"
        >
          Кейсы: как мы решаем задачи наших клиентов
        </SectionTitle>

        <div className="col-start-1 lg:col-end-4 col-end-5 flex flex-wrap">
          {serviceCases.map((serviceCase) => (
            <CaseCard
              className="border mr-[-1px]"
              outerClassName="mt-[-1px] mb-[-1px] lg:w-1/3 w-1/2"
              key={serviceCase.id}
              tags={serviceCase.services}
              logoPath={serviceCase.imageUrl}
              currentLocation={currentLocation}
            >
              {serviceCase.description}
            </CaseCard>
          ))}
        </div>

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

      <Section className="sm:hidden flex flex-col gap-30 " inverseColor={true}>
        <SectionTitle
          className="text-gray-100 text-2xl font-extended leading-[28px] mb-30"
          col="col-start-1 col-end-5"
        >
          Кейсы: как мы решаем задачи наших клиентов
        </SectionTitle>

        <Carousel
          className="w-full col-start-1 col-end-5 row-start-2 sm:hidden overflow-hidden"
          inverseColor={true}
        >
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
              inverseColor={true}
            >
              {serviceCase.description}
            </CaseCard>
          ))}
        </Carousel>

        <SecondaryButton
          row="row-start-3"
          col="col-start-1 max-lg:col-end-5"
          variant="info"
          className="text-base font-subtitle border-y border-gray-300 text-gray-100 bg-gray-400 "
        >
          Все кейсы
        </SecondaryButton>

        <ReviewCard
          className="text-gray-100 mt-30"
          row="row-start-4"
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
          inverseColor={true}
        ></ReviewCard>
      </Section>
    </div>
  );
};

export default Cases;
