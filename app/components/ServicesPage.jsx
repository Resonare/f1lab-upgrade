import BackgroundGrid from "./BackgroundGrid";
import Scenarios from "./Scenarios/Scenarios";

const ServicesPage = () => {
  return (
    <>
      <BackgroundGrid></BackgroundGrid>
      <div className="p-[120px]">
        <div className="text-5xl font-title p-5">Услуги</div>
        <Scenarios />
      </div>
    </>
  );
};

export default ServicesPage;
