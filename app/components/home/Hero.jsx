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
    <div className="relative h-[750px]">
      <div className="bg-f1-light h-full w-[100svw] -z-[9] absolute left-1/2 translate-x-[-50%]">
        <BackgroundGrid
          className="-z-[9] absolute left-1/2 translate-x-[-50%] h-[750px]"
          customLinesColor="border-gray-250"
          hFull={false}
        />
        <div className="h-[750px] w-full absolute left-1/2 translate-x-[-50%] xl:px-120 lg:px-60 sm:px-[44.1px] px-15 pt-[70px] lg:pt-90 max-w-[1921px]">
          <Animation data={homeAnimationJson} width="3000px" />
        </div>
      </div>
      <Section className="2xl:border-gray-250 text-5xl font-title pt-180 pb-60 whitespace-normal inline-block w-full h-fit">
        <div className="text-gray-400 row-start-1 col-start-1 col-end-4 text-[56px]">
          <div className="flex items-center">
            IT-
            <VerticalCarousel
              className="text-f1-light"
              words={["консалтинг", "аутсорсинг", "аутсстаффинг"]}
            />
          </div>
          для малого и среднего бизнеса с подходом крупных лидеров
        </div>

        <div className="h-90 col-start-1 col-end-5 row-start-2"></div>

        <ContentCard
          className="border-t border-gray-250"
          row="row-start-3"
          col="col-start-1"
        >
          Мы позаботимся о технической стороне, чтобы вы могли смело развивать
          свой бизнес
        </ContentCard>

        <div className="md:row-start-4 col-start-1 col-end-5 lg:col-end-2 flex max-sm:flex-col max-sm:gap-15 justify-between max-lg:mt-120 max-md:mt-60 max-sm:mt-30">
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
