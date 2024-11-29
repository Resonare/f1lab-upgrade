import { useLoaderData } from "@remix-run/react";

import Section from "./Section";
import SectionTitle from "./SectionTitle";
import CaseCard from "../components/cards/CaseCard";
import ReviewCard from "../components/cards/ReviewCard";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Carousel from "../components/misc/Carousel";

const DUMMY_REVIEW_PATHS = [
  "test-review.png",
  "test-review.png",
  "test-review.png",
  "test-review.png",
  "test-review.png",
  "test-review.png",
  "test-review.png",
];

const CasesSection = ({
  title = "Примеры кейсов",
  mobileInverseColor = false,
  withReviewCards = true,
  children,
}) => {
  const serviceCases = children ? children : useLoaderData();

  const caseCards = serviceCases.map((serviceCase, index) => (
    <CaseCard
      className={`${index != serviceCases.length - 1 && `max-sm:border-r`} ${
        index != 0 && `border-l`
      } sm:border mr-[-1px]`}
      outerClassName="sm:mt-[-1px] sm:mb-[-1px] lg:w-1/3 sm:w-1/2 min-h-[400px]"
      key={serviceCase.id}
      caseData={serviceCase}
    />
  ));

  const mobileCaseCards = serviceCases.map((serviceCase, index) => (
    <CaseCard
      className={`${index != serviceCases.length - 1 && `max-sm:border-r`} ${
        index != 0 && `max-sm:border-l`
      } sm:border mr-[-1px]`}
      outerClassName="sm:mt-[-1px] sm:mb-[-1px] lg:w-1/3 sm:w-1/2"
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

        <div
          className={`${
            withReviewCards && `lg:col-end-4`
          } col-start-1 col-end-5 flex flex-wrap`}
        >
          {caseCards}
        </div>

        {withReviewCards && (
          <>
            <ReviewCard
              className="ml-[0.5px] mt-[-1px] max-lg:hidden"
              row="row-start-2 row-end-4"
              col="col-start-4 col-end-4"
              reviewPaths={DUMMY_REVIEW_PATHS}
            ></ReviewCard>

            <ReviewCard
              row="row-start-5"
              col="col-start-1 col-end-5"
              reviewPaths={DUMMY_REVIEW_PATHS}
              reviewsOnPage={3}
              className="lg:hidden"
            ></ReviewCard>
          </>
        )}

        <SecondaryButton
          row="row-start-4"
          col="col-start-1 max-lg:col-end-5"
          variant="shaded"
          className="text-base font-subtitle"
        >
          Все кейсы
        </SecondaryButton>
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

        {withReviewCards && (
          <ReviewCard
            className="h-fit"
            reviewPaths={DUMMY_REVIEW_PATHS}
            inverseColor={mobileInverseColor}
          ></ReviewCard>
        )}
      </Section>
    </>
  );
};

export default CasesSection;
