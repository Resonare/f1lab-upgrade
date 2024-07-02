import SimpleCard from "../SimpleCard";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 p-[120px]">
      <p className="row-start-1 row-end-3 col-start-1 col-end-3 text-gray-400 text-[56px] font-title leading-[60px]">
        ИТ‑аудит с применимыми рекомендациями
      </p>
      <SimpleCard row={1} col={0}>
        Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего
        бизнеса и не создает ненужных рисков?
      </SimpleCard>
      <SimpleCard row={2} col={1}>
        ИТ-аудит F1 LAB, предоставит полный отчёт о состоянии и
        отказоустойчивости вашей ИТ-среды.
      </SimpleCard>
      <img
        className="row-start-1 row-end-5 col-start-3 col-end-5"
        src="/images/consulting-hero.svg"
        alt=""
      />
    </div>
  );
};

export default Hero;
