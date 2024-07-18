import Section from "../Section";
import ContentCard from "../ContentCard";
import SectionTitle from "../SectionTitle";

const SCENARIOS_DATA = [
  {
    descriptionText:
      "Понять текущее состояние IT-инфраструктуры и выявить слабые места",
    iconPath: "audit/audit-scenario-icon1.svg",
    row: 2,
    col: 1,
  },
  {
    descriptionText: "Подготовиться к внедрению новых технологий и ит-решений",
    iconPath: "audit/audit-scenario-icon2.svg",
    row: 2,
    col: 3,
  },
  {
    descriptionText:
      "Проверить соответствие стандартам безопасности и требованиям отрасли",
    iconPath: "audit/audit-scenario-icon3.svg",
    row: 3,
    col: 2,
  },
  {
    descriptionText: "Оптимизировать затраты на ит-инфраструктуру",
    iconPath: "audit/audit-scenario-icon4.svg",
    row: 3,
    col: 4,
  },
];

const Scenarios = () => {
  return (
    <div id="why">
      <Section rowsAmount={3}>
        <SectionTitle row={1} col={1} width={4}>
          Сценарии применения
        </SectionTitle>
        {SCENARIOS_DATA.map((card, index) => (
          <ContentCard
            key={index}
            row={card.row}
            col={card.col}
            iconPath={card.iconPath}
          >
            {card.descriptionText}
          </ContentCard>
        ))}
      </Section>
    </div>
  );
};

export default Scenarios;
