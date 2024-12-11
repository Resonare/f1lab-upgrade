import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import Tag from "../../components/misc/Tag";
import StepCard from "../../components/cards/StepCard";
import SectionTitle from "../../layout/SectionTitle";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Carousel from "../../components/misc/Carousel";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Animation from "../../components/misc/animations/Animation";

import animationData from "../../components/misc/animations/circles-animation.json";

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
        <SectionTitle
          className="mb-100"
          row="row-start-1"
          col="col-start-1 col-end-3"
        >
          Процесс внедрения антивирусного решения
        </SectionTitle>

        <StepCard
          className={`${bgColor}`}
          row="row-start-2"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          title="Анализ и оценка потребностей"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 1", "Подбор лицензии"]}
        >
          Наши специалисты проводят детальную проверку IT-инфраструктуры,
          определяя оптимальную лицензию для вашей компании
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-3"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title="Установка и настройка программного обеспечения"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 2", "Внедрение"]}
        >
          Профессиональная установка и конфигурация антивируса PRO32 на всех
          целевых устройствах, обеспечивая максимальную эффективность защиты.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-4"
          col="xl:col-start-4 lg:col-start-4 col-start-1 xl:col-end-5 lg:col-end-5 col-end-3"
          title="Обучение сотрудников"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 3", "обучение"]}
        >
          Проведение обучающих сессий для сотрудников и руководства по
          эффективному использованию PRO32 и основам кибербезопасности.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-5"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title="Техническая поддержка и сопровождение"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 4", "сопровождение"]}
        >
          Предоставление технической поддержки, регулярные обновления и
          мониторинг системы для поддержания высокого уровня безопасности.
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
              <Animation className="max-sm:h-[260px]" data={animationData} />

              <SecondaryButton
                variant="accent-light"
                onClick={showCallMeBackModal}
              >
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
