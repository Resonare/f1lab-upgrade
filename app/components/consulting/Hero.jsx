import PrimaryButton from "../PrimaryButton";
import ContentCard from "../ContentCard";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-4 p-[120px]"
      style={{ "grid-template-rows": "1.2fr repeat(3, minmax(0, 1fr))" }}
    >
      <p className="row-start-1 row-end-2 col-start-1 col-end-3 text-gray-400 text-[56px] font-title leading-[60px]">
        ИТ‑аудит с применимыми рекомендациями
      </p>
      <ContentCard row={2} col={1}>
        Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего
        бизнеса и не создает ненужных рисков?
      </ContentCard>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex items-end">
        <img src="/images/misc/arrow-card-right.svg" alt="" />
      </div>
      <ContentCard row={3} col={2}>
        ИТ-аудит F1 LAB, предоставит полный отчёт о состоянии и
        отказоустойчивости вашей ИТ-среды.
      </ContentCard>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <img src="/images/misc/arrow-card-left.svg" alt="" />
      </div>
      <PrimaryButton type="accent" row={4} col={1}>
        Консультация
      </PrimaryButton>
      <img
        className="row-start-1 row-end-5 col-start-3 col-end-5"
        src="/images/consulting/hero-scheme.svg"
        alt=""
      />
    </div>
  );
};

export default Hero;
