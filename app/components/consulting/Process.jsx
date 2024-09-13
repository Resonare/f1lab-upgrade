import Section from "../../layout/Section";
import Tag from "../misc/Tag";
import StepCard from "../cards/StepCard";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import Carousel from "../misc/Carousel";
import SecondaryButton from "../buttons/SecondaryButton";

const Process = ({ onRecallModalOpen }) => {
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
    <>
      <Section rowsAmount={8} className="max-sm:hidden">
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
          Тесты помогают определить, насколько устойчива инфраструктура к сбоям
          и насколько она защищена от возможных угроз.
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
          По завершении аудита составляется подробный отчет, включающий
          результаты проведенного анализа и тестирования. В отчете также
          предлагаются конкретные рекомендации по улучшению производительности,
          безопасности и соответствия нормативным требованиям IT инфраструктуры.
        </StepCard>

        <div className="sticky top-0 max-lg:pt-100 col-start-1 max-lg:col-end-5 lg:row-start-2 row-start-7 lg:row-end-3 lg:h-full h-fit">
          <PrimaryButton
            type="dark"
            className="lg:absolute lg:bottom-[-60px]"
            onClick={onRecallModalOpen}
          >
            Консультация
          </PrimaryButton>
        </div>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Процесс проведения аудита</SectionTitle>

        <Carousel
          className="border-x [&>*]:border-r [&>*]:border-t [&>*]:mt-[0.1px]"
          lastIndicatorIsLight={true}
        >
          <StepCard
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
            Специалисты выявляют узкие места и потенциальные риски, которые
            могут повлиять на работу бизнеса.
          </StepCard>

          <StepCard
            title="Проведение тестов на уязвимости и отказоустойчивость"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 4", "Тестирование"]}
          >
            Тесты помогают определить, насколько устойчива инфраструктура к
            сбоям и насколько она защищена от возможных угроз.
          </StepCard>

          <StepCard
            title="Составление отчета с результатами и рекомендациями по улучшению"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 5", "Отчет и рекомендации"]}
          >
            По завершении аудита составляется подробный отчет, включающий
            результаты проведенного анализа и тестирования. В отчете также
            предлагаются конкретные рекомендации по улучшению
            производительности, безопасности и соответствия нормативным
            требованиям IT инфраструктуры.
          </StepCard>

          <StepCard
            title="Заполните форму и мы приступим к определению целей и объема аудита"
            inverseColor={true}
          >
            <div className="flex flex-col gap-15">
              <img src="/images/misc/moving-scheme.gif" alt="" />

              <SecondaryButton variant="light" onClick={onRecallModalOpen}>
                <p className="text-gray-400 text-base font-subtitle">Начать</p>
              </SecondaryButton>
            </div>
          </StepCard>
        </Carousel>
      </div>
    </>
  );
};

export default Process;
