import PrimaryButton from "../buttons/PrimaryButton";
import ContentCard from "../ContentCard";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 transition-all">
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 text-gray-400 xl:text-[56px] text-[44px] font-title leading-[60px] pb-60">
        ИТ‑аудит с применимыми рекомендациями
      </div>
      <ContentCard row={2} col={1}>
        Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего
        бизнеса и не создает ненужных рисков?
      </ContentCard>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex items-end overflow-auto">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className=""></div>
          <div className="lg:border-t lg:border-r lg:border-dashed lg:rounded-tr-2xl"></div>
          <div className=""></div>
        </div>
      </div>
      <ContentCard row={3} col={2}>
        ИТ-аудит F1 LAB, предоставит полный отчёт о состоянии и
        отказоустойчивости вашей ИТ-среды.
      </ContentCard>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className="lg:border-b lg:border-l lg:border-dashed lg:rounded-bl-2xl"></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="row-start-4 max-lg:mt-60 col-start-1 col-end-5 ">
        <PrimaryButton type="accent" row={4} col={1}>
          Консультация
        </PrimaryButton>
      </div>
      <img
        className="row-start-2 row-end-4 col-start-3 col-end-5 lg:row-start-1 lg:row-end-5 lg:col-start-3 lg:col-end-5"
        src="/images/consulting/hero-scheme.svg"
        alt=""
      />
    </div>
  );
};

export default Hero;
