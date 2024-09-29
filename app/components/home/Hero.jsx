import VerticalCarousel from "../misc/VerticalCarousel";
import ContentCard from "../cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../buttons/PrimaryButton";

const Hero = () => {
  return (
    <Section className="whitespace-normal inline-block w-[100svw]">
      <div className="row-start-1 col-start-1 col-end-4 text-[56px]">
        <div className="flex items-center">
          IT-
          <div className="bg-gray-400 pb-15 px-30 rounded-[15px]">
            <VerticalCarousel
              className="text-f1-light"
              words={["консалтинг", "word2", "word3"]}
            />
          </div>
        </div>
        для малого и среднего бизнеса с подходом крупных лидеров
      </div>

      <div className="h-90 col-start-1 col-end-5 row-start-2"></div>

      <ContentCard row="row-start-3" col="col-start-1">
        Мы позаботимся о технической стороне, чтобы вы могли смело развивать
        свой бизнес
      </ContentCard>

      <PrimaryButton row="row-start-4 col-start-1" type="dark">
        Консультация
      </PrimaryButton>

      <div className="row-start-5 col-start-1 col-end-5 flex items-end">
        <div className="w-full flex items-center justify-between">
          <img src="/images/logo/dv-logo.png" alt="" />
          <img src="/images/logo/onduline-logo.svg" alt="" />
          <img src="/images/logo/dv-logo.png" alt="" />
          <img src="/images/logo/dv-logo.png" alt="" />
          <img src="/images/logo/dv-logo.png" alt="" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
