import Section from "../Section";

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
    <Section cardsData={SCENARIOS_DATA} sectionTitle={"Сценарии применения"} />
  );
};

export default Scenarios;
