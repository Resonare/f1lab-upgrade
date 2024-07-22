import { useContext } from "react";

import Section from "../Section";
import ContentCard from "../Cards/ContentCard";
import SectionTitle from "../SectionTitle";

import { GlobalContext } from "../../contexts/GlobalContext";

const Scenarios = () => {
  const { screen } = useContext(GlobalContext);

  //Computing screen flags for shorter syntax
  const screenMd = screen == "md";
  const screenSm = screen == "sm";

  return (
    <div id="why">
      <Section rowsAmount={3}>
        <SectionTitle row={1} col={1} width={4}>
          Сценарии применения
        </SectionTitle>
        <ContentCard
          row={2}
          col={1}
          iconPath="audit/audit-scenario-icon1.svg"
          width={screenMd || screenSm ? 2 : 1}
        >
          Понять текущее состояние IT-инфраструктуры и выявить слабые места
        </ContentCard>
        <ContentCard
          row={2}
          col={3}
          iconPath="audit/audit-scenario-icon2.svg"
          width={screenMd || screenSm ? 2 : 1}
        >
          Подготовиться к внедрению новых технологий и ит-решений
        </ContentCard>
        <ContentCard
          row={3}
          col={screenMd || screenSm ? 1 : 2}
          iconPath="audit/audit-scenario-icon3.svg"
          width={screenMd || screenSm ? 2 : 1}
        >
          Проверить соответствие стандартам безопасности и требованиям отрасли
        </ContentCard>
        <ContentCard
          row={3}
          col={screenMd || screenSm ? 3 : 4}
          iconPath="audit/audit-scenario-icon4.svg"
          width={screenMd || screenSm ? 2 : 1}
        >
          Оптимизировать затраты на ит-инфраструктуру
        </ContentCard>
      </Section>
    </div>
  );
};

export default Scenarios;
