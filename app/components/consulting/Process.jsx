import Section from "../Section";
import Tag from "../Tag";
import StepCard from "../cards/StepCard";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";

const Process = () => {
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
      <Tag key="5" className="bg-[#D40000]" inverseColor={true}>
        ZABBIX
      </Tag>
    ),
  };

  return (
    <Section rowsAmount={8}>
      <SectionTitle row="row-start-1" col="col-start-1 col-end-5">
        Процесс проведения аудита
      </SectionTitle>
      <StepCard
        row="row-start-2"
        col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
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
        row="row-start-3"
        col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
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
        row="row-start-4"
        col="xl:col-start-4 lg:col-start-4 col-start-1 xl:col-end-5 lg:col-end-5 col-end-3"
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
        row="row-start-5"
        col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
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
        row="row-start-6"
        col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
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
        type="dark"
        row="xl:row-start-3 lg:row-start-3 row-start-7"
        col="col-start-1 xl:col-end-2 lg:col-end-2 col-end-6"
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Process;
