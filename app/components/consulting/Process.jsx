import { useContext } from "react";

import Section from "../Section";
import Tag from "../Tag";
import StepCard from "../cards/StepCard";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";

import { ScreenContext } from "../../store/screen-context";

const Process = () => {
  const { screen } = useContext(ScreenContext);

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
        title="Инвентаризация оборудования, ПО и сетей"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 2", "Сбор данных"]}
      >
        Собранные данные служат основой для дальнейшего анализа и оценки
        состояния IT инфраструктуры.
      </StepCard>
      <StepCard
        row={4}
        col={screenMd || screenSm ? 1 : 4}
        width={screenMd || screenSm ? 2 : 1}
        title="Оценка производительности, безопасности и соответствия нормативным требованиям"
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 3", "Анализ"]}
      >
        Специалисты выявляют узкие места и потенциальные риски, которые могут
        повлиять на работу бизнеса.
      </StepCard>
      <StepCard
        row={5}
        col={3}
        width={screenMd || screenSm ? 2 : 1}
        title="Проведение тестов на уязвимости и отказоустойчивость "
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 4", "Тестирование"]}
      >
        Тесты помогают определить, насколько устойчива инфраструктура к сбоям и
        насколько она защищена от возможных угроз.
      </StepCard>
      <StepCard
        row={6}
        col={screenMd || screenSm ? 1 : 2}
        width={screenMd || screenSm ? 2 : 1}
        title="Составление отчета с результатами и рекомендациями по улучшению."
        tags={[
          tags.zabbix,
          tags.siemCons,
          tags.siemSec,
          tags.siemCloud,
          tags.itil,
        ]}
        upperLabels={["Этап 5", "Отчет и рекомендации"]}
      >
        По завершении аудита составляется подробный отчет, включающий результаты
        проведенного анализа и тестирования. В отчете также предлагаются
        конкретные рекомендации по улучшению производительности, безопасности и
        соответствия нормативным требованиям IT инфраструктуры.
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
