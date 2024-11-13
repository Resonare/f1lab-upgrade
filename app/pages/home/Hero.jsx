import useModalStore from "../../store/modal";

import VerticalCarousel from "../../components/misc/VerticalCarousel";
import ContentCard from "../../components/cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import BackgroundGrid from "../../components/BackgroundGrid";
import Animation from "../../components/misc/animations/Animation";

import homeAnimationJson from "../../components/misc/animations/home-animation.json";

const Hero = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <div className="">
      <Section
        className="relative 2xl:border-gray-250 text-5xl font-expanded font-extrabold lg:mt-90 mt-[70px]"
        inverseColor={true}
        customBackground="bg-f1-light"
        customLinesColor="border-gray-250"
      >
        <div className="row-start-5 col-start-1 col-end-5 h-[calc(100%+90px)] xl:right-120 lg:right-60 sm:right-[44.1px] right-15 w-full lg:absolute lg:top-[-90px]">
          <Animation data={homeAnimationJson} hero={true} />
        </div>

        <div className="z-[0] col-start-1 col-end-5 grid grid-cols-4">
          <div className="text-gray-400 row-start-1 col-start-1 xl:col-end-4 col-end-5 sm:text-[56px] text-[28px]">
            <div className="flex items-center">
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
            <p className="mt-[-10px]">
              для малого и среднего бизнеса, вдохновлённый практиками
              топ-компаний
            </p>
          </div>

          <div className="h-90 col-start-1 col-end-5 row-start-2"></div>

          <ContentCard
            className="border-t border-gray-250"
            row="row-start-3"
            col="col-start-1 lg:col-end-2 sm:col-end-3 col-end-5"
          >
            Мы позаботимся о технической стороне, чтобы вы сосредоточились на
            бизнесе
          </ContentCard>

          <div className="md:row-start-4 col-start-1 lg:col-end-2 sm:col-end-3 col-end-5 flex max-sm:flex-col max-sm:gap-15 justify-between">
            <PrimaryButton
              row="h-full"
              type="dark-to-light"
              onClick={showCallMeBackModal}
            >
              Консультация
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
