import Section from "../Section";
import Tag from "../Tag";
import StepCard from "../StepCard";
import SectionTitle from "../SectionTitle";

const Process = () => {
  return (
    <Section rowsAmount={3}>
      <SectionTitle row={1} col={1} width={4}>
        Процесс проведения аудита
      </SectionTitle>
      <StepCard
        row={2}
        col={1}
        title="Определение целей и объема аудита"
        tags={[
          <Tag className="bg-red" inverseColor={true}>
            ZABBIX
          </Tag>,
          <Tag className="bg-consulting">SIEM система</Tag>,
          <Tag className="bg-security">SIEM система</Tag>,
          <Tag className="bg-cloud">SIEM система</Tag>,
          <Tag className="bg-cloud">ITIL</Tag>,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
    </Section>
  );
};

export default Process;
