import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";

const Why = () => {
  return (
    <Section
      className="text-5xl font-title pb-60 whitespace-normal inline-block w-full h-fit"
      inverseColor={true}
    >
      <SectionTitle
        className="text-gray-100 flex justify-center"
        col="col-start-1 col-end-5"
      >
        Почему F1lab?
      </SectionTitle>

      <img src="/images/animations/home-animation.svg" alt="" />
    </Section>
  );
};

export default Why;
