import VerticalCarousel from "../misc/VerticalCarousel";
import ContentCard from "../cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../buttons/PrimaryButton";

const Hero = () => {
  return (
    <div>
      <div
        className="bg-f1-light absolute left-0 z-[-10] w-[100svw] h-[755px]"
        // style={{ height: `${contentContainerRef.current.style.height}px`}}
      ></div>
      <Section
        id="testr"
        className="text-5xl font-title pt-180 pb-60 whitespace-normal inline-block w-full h-fit"
      >
        <div className="text-gray-400 row-start-1 col-start-1 col-end-4 text-[56px]">
          <div className="flex items-center">
            IT-
            <VerticalCarousel
              className="text-f1-light"
              words={["консалтинг", "word2", "word3"]}
            />
          </div>
          для малого и среднего бизнеса с подходом крупных лидеров
        </div>

        <div className="h-90 col-start-1 col-end-5 row-start-2"></div>

        <ContentCard row="row-start-3" col="col-start-1">
          Мы позаботимся о технической стороне, чтобы вы могли смело развивать
          свой бизнес
        </ContentCard>

        <div className="md:row-start-4 col-start-1 col-end-5 lg:col-end-2 flex max-sm:flex-col max-sm:gap-15 justify-between max-lg:mt-120 max-md:mt-60 max-sm:mt-30">
          <PrimaryButton row="h-full" type="dark-to-light">
            Консультация
          </PrimaryButton>
        </div>

        {/* <div className="row-start-5 col-start-1 col-end-5 flex items-end">
          <div className="w-full flex items-center justify-between">
            <img src="/images/logo/dv-logo.png" alt="" />
            <img src="/images/logo/onduline-logo.svg" alt="" />
            <img src="/images/logo/dv-logo.png" alt="" />
            <img src="/images/logo/dv-logo.png" alt="" />
            <img src="/images/logo/dv-logo.png" alt="" />
          </div>
        </div> */}
      </Section>
    </div>
  );
};

export default Hero;
