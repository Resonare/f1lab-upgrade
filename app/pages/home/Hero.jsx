import useModalStore from "../../store/modal";

import VerticalCarousel from "../../components/misc/VerticalCarousel";
import ContentCard from "../../components/cards/ContentCard";
import Section from "../../layout/Section";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Animation from "../../components/misc/animations/Animation";

import homeAnimationJson from "../../components/misc/animations/home-animation.json";

const Hero = () => {
  const { showCallMeBackModal } = useModalStore();

  const animationClasses = {
    width: "min-[1100px]:[&>div>svg]:w-[1950px] sm:[&>div>svg]:w-[730px] min-[615px]:[&>div>svg]:w-[600px] min-[470px]:[&>div>svg]:w-[450px] min-[400px]:[&>div>svg]:w-[380px] [&>div>svg]:w-[320px]",
    translate:
      "min-[1100px]:[&>div>svg>g]:translate-x-[45%] [&>div>svg>g]:translate-x-[0%] min-[1634px]:[&>div>svg>g]:translate-y-[-360px] xl:[&>div>svg>g]:translate-y-[-330px] min-[1300px]:[&>div>svg>g]:translate-y-[-390px] min-[1100px]:[&>div>svg>g]:translate-y-[-200px] min-[869px]:[&>div>svg>g]:translate-y-[-100px] sm:[&>div>svg>g]:translate-y-[0px] min-[711px]:[&>div>svg>g]:translate-y-[-580px] min-[615px]:[&>div>svg>g]:translate-y-[-530px] min-[560px]:[&>div>svg>g]:translate-y-[-560px] min-[470px]:[&>div>svg>g]:translate-y-[-800px] min-[454px]:[&>div>svg>g]:translate-y-[-870px] min-[426px]:[&>div>svg>g]:translate-y-[-780px] min-[400px]:[&>div>svg>g]:translate-y-[-690px] [&>div>svg>g]:translate-y-[-720px]",
    other: "[&>div>svg]:right-0",
  };

  return (
    <div className="">
      <Section
        className="relative 2xl:border-gray-250 text-5xl sm:font-expanded font-extended sm:font-extrabold font-bold lg:mt-90 sm:mt-[70px] mt-15"
        inverseColor={true}
        customBackground="bg-f1-light"
        customLinesColor="border-gray-250"
      >
        <div className="lg:hidden col-start-1 col-end-5 row-start-2 md:h-[280px] sm:h-[300px]"></div>

        <div className="row-start-6 col-start-1 col-end-5 h-[calc(100%)] xl:right-120 lg:right-60 sm:right-[44.1px] right-15 w-full absolute bottom-0">
          <Animation
            className={`${animationClasses.width} ${animationClasses.translate} ${animationClasses.other}`}
            data={homeAnimationJson}
            hero={true}
          />
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

          <div className="lg:h-90 md:h-60 sm:h-30 min-[560px]:h-[280px] h-[160px] col-start-1 col-end-5 row-start-2"></div>

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
        </div>
      </Section>
    </div>
  );
};

export default Hero;
