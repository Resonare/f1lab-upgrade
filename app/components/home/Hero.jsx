import useModalStore from "../../store/modal";

import VerticalCarousel from "../misc/VerticalCarousel";
import ContentCard from "../cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../buttons/PrimaryButton";
import BackgroundGrid from "../BackgroundGrid";
import Animation from "../misc/animations/Animation";

import homeAnimationJson from "../misc/animations/home-animation.json";

const Hero = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <div className="relative">
      <div className="bg-f1-light h-full w-[100svw] -z-[9] absolute left-1/2 translate-x-[-50%]">
        <BackgroundGrid
          className="-z-[9] absolute left-1/2 translate-x-[-50%] h-full"
          customLinesColor="border-gray-250"
          striped={false}
          hFull={false}
        />
        <div className="h-full w-full absolute left-1/2 translate-x-[-50%] pt-[70px] lg:pt-90 max-w-[1921px]">
          <Animation data={homeAnimationJson} hero={true} />
        </div>
      </div>
      <Section
        hero={true}
        className="2xl:border-gray-250 text-5xl font-title sm:pb-60 whitespace-normal inline-block w-full h-full"
      >
        <div className="text-gray-400 row-start-1 col-start-1 2xl:col-end-4 col-end-5 sm:text-[56px] text-[28px]">
          <div className="flex items-center">
            IT-
            <VerticalCarousel
              className="text-f1-light"
              words={["консалтинг", "аутсорсинг", "аутсстаффинг"]}
            />
          </div>
          <p className="mt-[-10px]">
            для малого и среднего бизнеса с подходом крупных лидеров
          </p>
        </div>

        <div className="h-90 col-start-1 col-end-5 row-start-2"></div>

        <ContentCard
          className="border-t border-gray-250"
          row="row-start-3"
          col="col-start-1 lg:col-end-2 sm:col-end-3 col-end-5"
        >
          Мы позаботимся о технической стороне, чтобы вы могли смело развивать
          свой бизнес
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
      </Section>
    </div>
  );
};

export default Hero;
