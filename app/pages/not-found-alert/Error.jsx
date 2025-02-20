import Section from "../../layout/Section";
import Animation from "../../components/misc/animations/Animation";
import BackButton from "../../components/buttons/BackButton";

import animationData from "../../animations/404-animation.json";

const Error = () => {
  const goBack = (window) => {
    if (window) {
      window.location.replace("/");
    }
  };

  return (
    <Section className="sm:mb-100 mb-60 xl:mt-90 mt-30">
      <div className="col-start-1 col-end-5 xl:border-t-0 sm:border-y border-dashed max-xl:mt-90 max-sm:mt-0">
        <div className="lg:h-[500px] md:h-[400px] sm:h-[300px] h-[120px]">
          <Animation
            className="lg:[&>div>svg]:h-[800px] md:[&>div>svg]:h-[650px] sm:[&>div>svg]:h-[450px] [&>div>svg]:h-[200px]"
            data={animationData}
            hero={true}
          />
        </div>
      </div>

      <p className="mt-60 col-start-1 col-end-5 text-gray-400 lg:text-[56px] sm:text-[44px] text-[28px] font-extrabold font-expanded text-center">
        Эта страница не найдена
      </p>

      <BackButton
        className="mt-60 lg:col-start-2 col-start-1 lg:col-end-4 col-end-5 font-expanded font-bold"
        text="На главную"
        onClick={() => {
          goBack(window);
        }}
      />
    </Section>
  );
};

export default Error;
