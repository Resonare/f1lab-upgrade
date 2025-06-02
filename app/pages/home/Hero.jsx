import useModalStore from "../../store/modal";

import VerticalCarousel from "../../components/misc/VerticalCarousel";
import ContentCard from "../../components/cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Animation from "../../components/misc/animations/Animation";

import homeAnimationJson from "../../animations/home-animation.json";

const Hero = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <div className="">
      <Section
        className="lg:h-[700px] relative 2xl:border-gray-250 text-5xl sm:font-expanded font-extended sm:font-extrabold font-bold lg:mt-90 sm:mt-[70px] mt-15"
        inverseColor={true}
        customBackground="bg-f1-light"
        customLinesColor="border-gray-250"
      >
        <div className="h-full w-full absolute top-0 left-0 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 lg:py-60 pt-60 pb-15">
          <div className="grid grid-cols-4 h-full">
            <div className="lg:col-start-2 col-start-1 col-end-5 relative lg:pl-[150px]">
              <Animation
                className={`h-full lg:w-[calc(100%-150px)] w-full bottom-0 absolute [&>svg]:absolute sm:[&>svg]:bottom-0 max-[638px]:[&>svg]:bottom-[130px] [&>svg]:bottom-[110px] [&>svg]:w-full`}
                data={homeAnimationJson}
              />
            </div>
          </div>
        </div>

        <div className="z-[0] col-start-1 col-end-5 grid grid-cols-4">
          <div className="text-gray-400 row-start-1 col-start-1 xl:col-end-4 col-end-5 lg:text-[56px] sm:text-[44px] text-[28px]">
            <div className="flex gap-5 items-center">
              IT-
              <VerticalCarousel
                className="text-f1-light"
                words={[
                  "консалтинг",
                  "менеджмент",
                  "безопасность",
                  "аутсорсинг",
                  "техподдержка",
                ]}
              />
            </div>
            <p className="mt-[-10px] lg:leading-[60px] sm:leading-[48px] leading-[32px]">
              для малого и среднего бизнеса, вдохновлённые практиками{" "}
              <span className="text-nowrap">топ-компаний</span>
            </p>
          </div>

          <div className="xl:h-90 lg:h-[120px] md:h-60 sm:h-30 min-[560px]:h-[280px] h-[160px] col-start-1 col-end-5 row-start-2"></div>

          <ContentCard
            className="border-t border-gray-250 font-light"
            row="row-start-3"
            col="col-start-1 lg:col-end-2 md:col-end-3 sm:col-end-4 col-end-5"
          >
            Мы позаботимся о технической стороне, чтобы вы сосредоточились на
            бизнесе
          </ContentCard>

          <div className="md:row-start-4 col-start-1 lg:col-end-2 md:col-end-3 sm:col-end-4 col-end-5 flex max-sm:flex-col max-sm:gap-15 justify-between">
            <PrimaryButton
              row="h-full"
              type="dark-to-light"
              onClick={showCallMeBackModal}
            >
              Консультация
            </PrimaryButton>
          </div>

          <div className="row-start-5 h-[360px] lg:hidden max-sm:hidden"></div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
