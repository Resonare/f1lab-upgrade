import SimpleCard from "../SimpleCard";
import PrimaryButton from "../PrimaryButton";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 p-[120px]">
      <p className="row-start-1 row-end-2 col-start-1 col-end-3 text-gray-400 text-[56px] font-title leading-[60px]">
        ИТ‑аудит с применимыми рекомендациями
      </p>
      <SimpleCard row={1} col={0}>
        Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего
        бизнеса и не создает ненужных рисков?
      </SimpleCard>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex items-end">
        <img src="/images/misc/arrow-card-right.svg" alt="" />
      </div>
      <SimpleCard row={2} col={1}>
        ИТ-аудит F1 LAB, предоставит полный отчёт о состоянии и
        отказоустойчивости вашей ИТ-среды.
      </SimpleCard>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <img src="/images/misc/arrow-card-left.svg" alt="" />
      </div>
      <PrimaryButton type="accent" row={3} col={0}>Консультация</PrimaryButton>
      <img
        className="row-start-1 row-end-5 col-start-3 col-end-5"
        src="/images/consulting/hero-scheme.svg"
        alt=""
      />
    </div>
  );
};

export default Hero;
