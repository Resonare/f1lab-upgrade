import ScenarioCard from "./ScenarioCard";

const SCENARIOS_DATA = [
  {
    descriptionText:
      "Понять текущее состояние IT-инфраструктуры и выявить слабые места",
    iconName: "consulting-scenario-icon1.svg",
    position: 0,
  },
  {
    descriptionText: "Подготовиться к внедрению новых технологий и ит-решений",
    iconName: "consulting-scenario-icon2.svg",
    position: 2,
  },
  {
    descriptionText:
      "Проверить соответствие стандартам безопасности и требованиям отрасли",
    iconName: "consulting-scenario-icon3.svg",
    position: 5,
  },
  {
    descriptionText: "Оптимизировать затраты на ит-инфраструктуру",
    iconName: "consulting-scenario-icon4.svg",
    position: 7,
  },
];

const Scenarios = () => {
  return (
    <>
      <div className="flex flex-col gap-[100px]">
        <p className="text-black font-bold text-[40px] font-subtitle">
          Сценарии применения
        </p>
        <div className="grid grid-cols-4 grid-rows-2">
          {SCENARIOS_DATA.map((scenario, index) => (
            <ScenarioCard
              key={index}
              descriptionText={scenario.descriptionText}
              iconName={scenario.iconName}
              position={scenario.position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Scenarios;
