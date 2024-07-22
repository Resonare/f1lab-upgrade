import { useContext } from "react";

import Section from "../Section";
import Tag from "../Tag";
import StepCard from "../Cards/StepCard";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import { GlobalContext } from "../../contexts/GlobalContext";

const Process = () => {
  const { screen } = useContext(GlobalContext);

  //Computing screen flags for shorter syntax
  const screenMd = screen == "md";
  const screenSm = screen == "sm";

  //REDO NEEDED
  const tags = {
    siemCons: (
      <Tag key="1" className="bg-consulting">
        SIEM система
      </Tag>
    ),
    siemSec: (
      <Tag key="2" className="bg-security">
        SIEM система
      </Tag>
    ),
    siemCloud: (
      <Tag key="3" className="bg-cloud">
        SIEM система
      </Tag>
    ),
    itil: (
      <Tag key="4" className="bg-cloud">
        ITIL
      </Tag>
    ),
    zabbix: (
      <Tag key="5" className="bg-red" inverseColor={true}>
        ZABBIX
      </Tag>
    ),
  };

  return (
    <Section rowsAmount={8}>
      <SectionTitle row={1} col={1} width={4}>
        Процесс проведения аудита
      </SectionTitle>
      <StepCard
        row={2}
        col={screenMd || screenSm ? 1 : 2}
        width={screenMd || screenSm ? 2 : 1}
        title="Определение целей и объема аудита"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
      <StepCard
        row={3}
        col={3}
        width={screenMd || screenSm ? 2 : 1}
        title="Определение целей и объема аудита"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
      <StepCard
        row={4}
        col={screenMd || screenSm ? 1 : 4}
        width={screenMd || screenSm ? 2 : 1}
        title="Определение целей и объема аудита"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
      <StepCard
        row={5}
        col={3}
        width={screenMd || screenSm ? 2 : 1}
        title="Определение целей и объема аудита"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
      <StepCard
        row={6}
        col={screenMd || screenSm ? 1 : 2}
        width={screenMd || screenSm ? 2 : 1}
        title="Определение целей и объема аудита"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 1", "Начальная консультация"]}
      >
        Чтобы определить ключевые области, требующие проверки и анализа. Это
        помогает установить общие ожидания и план действий для проведения
        аудита.
      </StepCard>
      <PrimaryButton
        className={screenMd || screenSm ? `self-center` : null}
        type="dark"
        col={1}
        row={screenMd || screenSm ? 7 : 3}
        width={screenMd || screenSm ? 5 : 1}
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Process;
