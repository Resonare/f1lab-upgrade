import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import Tag from "../misc/Tag";
import StepCard from "../cards/StepCard";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import Carousel from "../misc/Carousel";
import SecondaryButton from "../buttons/SecondaryButton";
import Animation from "../misc/animations/Animation";

import animationData from "../misc/animations/circles-animation.json";

const Process = () => {
  const { bgColor } = useContext(ThemeContext);

  const { showCallMeBackModal } = useModalStore();
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
      <Section className="max-sm:hidden">
        <SectionTitle row="row-start-1" col="col-start-1 col-end-5">
          Этапы оказания техподдержки
        </SectionTitle>

        <StepCard
          className={`${bgColor}`}
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
          className={`${bgColor}`}
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
          className={`${bgColor}`}
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
          className={`${bgColor}`}
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
          className={`${bgColor}`}
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

        <div className="sticky top-0 lg:mt-0 md:mt-60 sm:mt-30 col-start-1 max-lg:col-end-5 lg:row-start-2 row-start-7 lg:row-end-3 lg:h-full h-fit">
          <PrimaryButton
            type="dark"
            className="lg:absolute lg:bottom-[-60px]"
            onClick={showCallMeBackModal}
          >
            Консультация
          </PrimaryButton>
        </div>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Процесс проведения аудита</SectionTitle>

        <Carousel lastIndicatorIsLight={true}>
          <StepCard
            className="border-r"
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
            className="border-r"
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
            className="border-r"
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
            className="border-r"
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
            className="border-r"
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
              <Animation data={animationData} height="h-[300px]" />

              <SecondaryButton variant="light" onClick={showCallMeBackModal}>
                <p className="text-base font-subtitle">Начать</p>
              </SecondaryButton>
            </div>
          </StepCard>
        </Carousel>
      </div>
    </>
  );
};

export default Process;
