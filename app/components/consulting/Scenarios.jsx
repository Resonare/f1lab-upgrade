import Section from "../Section";
import ContentCard from "../cards/ContentCard";
import SectionTitle from "../SectionTitle";

const Scenarios = () => {
  return (
    <div id="why">
      <Section rowsAmount={3}>
        <SectionTitle row="row-start-1" col="col-start-1 col-end-5">
          Сценарии применения
        </SectionTitle>
        <ContentCard
          row="row-start-2"
          col="col-start-1 xl:col-end-2 lg:col-end-2 col-end-3"
          iconPath="audit/audit-scenario-icon1.svg"
        >
          Понять текущее состояние IT-инфраструктуры и выявить слабые места
        </ContentCard>
        <ContentCard
          row="row-start-2"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          iconPath="audit/audit-scenario-icon2.svg"
        >
          Подготовиться к внедрению новых технологий и ит-решений
        </ContentCard>
        <ContentCard
          row="row-start-3"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          iconPath="audit/audit-scenario-icon3.svg"
        >
          Проверить соответствие стандартам безопасности и требованиям отрасли
        </ContentCard>
        <ContentCard
          row="row-start-3"
          col="xl:col-start-4 lg:col-start-4 col-start-3 col-end-5"
          iconPath="audit/audit-scenario-icon4.svg"
        >
          Оптимизировать затраты на ит-инфраструктуру
        </ContentCard>
      </Section>
    </div>
  );
};

export default Scenarios;
