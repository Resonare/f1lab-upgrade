import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

import useModalStore from "../store/modal";

import Section from "./Section";
import StepCard from "../components/cards/StepCard";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Carousel from "../components/misc/Carousel";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Animation from "../components/misc/animations/Animation";

import animationData from "../animations/circles-animation.json";

const ProcessSection = ({ stepsData, tagsData, title = "Процесс", inverseColor = false, rightSided = false }) => {
  if (!stepsData || stepsData.length <= 0) return;

  const { bgColor } = useContext(ThemeContext);

  const { showCallMeBackModal } = useModalStore();

  const findTag = (targetTitle) => {
    return tagsData.filter((tagData) => tagData.title == targetTitle)[0];
  };

  return (
    <>
      <Section
        className="max-sm:hidden"
        inverseColor={inverseColor}
      >
        <SectionTitle
          className={`${inverseColor ? "text-gray-100" : ""} mb-100`}
          row="row-start-1"
          col="col-start-1 lg:col-end-3 col-end-5"
        >
          {title}
        </SectionTitle>

        {stepsData.map((stepData, index) => {
          const lgColStart =
            (index % 4 != 0 ? ((index - 1) % 2 != 0 ? 4 : 3) : 2) - (rightSided ? 1 : 0);
          const colStart = (index % 2) * 2;

          return (
            <StepCard
              key={index}
              className={`${bgColor}`}
              inverseColor={inverseColor}
              row={`row-start-${index + 2}`}
              col={`lg:col-start-${lgColStart} col-start-${
                colStart + 1
              } lg:col-end-${lgColStart + 1} col-end-${colStart + 3}`}
              title={stepData.title}
              tagsData={stepData.tagTitles.map((title) => findTag(title))}
              upperLabels={stepData.upperLabels}
            >
              {stepData.body}
            </StepCard>
          );
        })}

        <div className={`${rightSided ? "lg:col-start-4" : ""} col-start-1 sticky top-0 lg:mt-0 md:mt-60 sm:mt-30 max-lg:col-end-5 lg:row-start-2 row-start-9 lg:row-end-3 lg:h-full h-fit`}>
          <PrimaryButton
            type={inverseColor ? "accent-to-light" : "dark"}
            className="lg:absolute lg:bottom-[-60px]"
            onClick={showCallMeBackModal}
          >
            Консультация
          </PrimaryButton>
        </div>
      </Section>

      <div className={`${inverseColor ? "bg-gray-400" : ""} sm:hidden flex flex-col gap-30 pt-60 px-15`}>
        <SectionTitle
          className={inverseColor ? "text-gray-100" : ""}
        >{title}</SectionTitle>

        <Carousel lastIndicatorIsLight={true} inverseColor={inverseColor}>
          {...stepsData.map((stepData, index) => (
            <StepCard
              key={index}
              className="border-r"
              inverseColor={inverseColor}
              title={stepData.title}
              tagsData={stepData.tagTitles.map((title) => findTag(title))}
              upperLabels={stepData.upperLabels}
            >
              {stepData.body}
            </StepCard>
          ))}

          <StepCard
            title="Заполните форму и мы приступим к определению целей и объема аудита"
            inverseColor={true}
            accentTitle={true}
          >
            <div className="flex flex-col gap-15">
              <Animation className="max-sm:h-[260px]" data={animationData} />

              <SecondaryButton
                variant="accent-light"
                onClick={showCallMeBackModal}
              >
                <p className="text-base font-subtitle">Начать</p>
              </SecondaryButton>
            </div>
          </StepCard>
        </Carousel>
      </div>
    </>
  );
};

export default ProcessSection;
