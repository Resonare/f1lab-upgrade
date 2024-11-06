import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import Tag from "../../components/misc/Tag";
import StepCard from "../../components/cards/StepCard";
import SectionTitle from "../../components/SectionTitle";
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
        <SectionTitle row="row-start-1" col="col-start-1 col-end-5">
          Процесс внедрения Staffcop
        </SectionTitle>

        <StepCard
          className={`${bgColor}`}
          row="row-start-2"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          title="Определение ключевых задач и объема мониторинга"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 1", "цели и требования"]}
        >
          На этом этапе F1 Lab вместе с клиентом анализирует бизнес-процессы и
          определяет, какие задачи нужно решать с помощью Staffcop. Это
          позволяет точно настроить систему под нужды компании.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-3"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title="Установка серверной части"
          tags={[
            <Tag key="1" className="bg-[#D40000]" inverseColor={true}>
              Postgresql
            </Tag>,
            <Tag key="2" className="bg-consulting">
              ClickHouse
            </Tag>,
            <Tag key="3" className="bg-cloud">
              Обслуживание серверов
            </Tag>,
          ]}
          upperLabels={["Этап 2", "Серверная инфраструктура"]}
        >
          Развернём сервер Staffcop на вашем сервере или в нашем облаке.
          Настроим сервер распознавания.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-4"
          col="xl:col-start-4 lg:col-start-4 col-start-1 xl:col-end-5 lg:col-end-5 col-end-3"
          title="Мониторинг действий сотрудников через агентов"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 3", "агенты на устройствах"]}
        >
          На рабочие станции и серверы компании устанавливаются агенты Staffcop
          для мониторинга действий пользователей: работа с файлами, доступ к
          сетям, активность в мессенджерах и браузерах.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-5"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title="Настройка мониторинга и контроля доступа к данным"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 4", "политики безопасности"]}
        >
          Определяются и настраиваются групповые политики безопасности, которые
          обеспечивают контроль за инцидентами и действиями сотрудников.
          Настройка мониторинга включает контроль почты, посещенных сайтов,
          мессенджеров, доступа к файлам.
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-6"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          title="Обучение сотрудников и техническая поддержка"
          tags={[
            tags.zabbix,
            tags.siemCons,
            tags.siemSec,
            tags.siemCloud,
            tags.itil,
          ]}
          upperLabels={["Этап 5", "Обучение и сопровождение"]}
        >
          Проводится обучение администраторов и пользователей по работе с
          системой Staffcop. F1 Lab предоставляет техническую поддержку для
          обеспечения стабильной работы системы.
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
        <SectionTitle>Процесс внедрения Staffcop</SectionTitle>

        <Carousel lastIndicatorIsLight={true}>
          <StepCard
            className={`${bgColor} border-r`}
            title="Определение ключевых задач и объема мониторинга"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 1", "цели и требования"]}
          >
            На этом этапе F1 Lab вместе с клиентом анализирует бизнес-процессы и
            определяет, какие задачи нужно решать с помощью Staffcop. Это
            позволяет точно настроить систему под нужды компании.
          </StepCard>

          <StepCard
            className={`${bgColor} border-r`}
            title="Установка серверной части"
            tags={[
              <Tag key="1" className="bg-[#D40000]" inverseColor={true}>
                Postgresql
              </Tag>,
              <Tag key="2" className="bg-consulting">
                ClickHouse
              </Tag>,
              <Tag key="3" className="bg-cloud">
                Обслуживание серверов
              </Tag>,
            ]}
            upperLabels={["Этап 2", "Серверная инфраструктура"]}
          >
            Развернём сервер Staffcop на вашем сервере или в нашем облаке.
            Настроим сервер распознавания.
          </StepCard>

          <StepCard
            className={`${bgColor} border-r`}
            title="Мониторинг действий сотрудников через агентов"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 3", "агенты на устройствах"]}
          >
            На рабочие станции и серверы компании устанавливаются агенты
            Staffcop для мониторинга действий пользователей: работа с файлами,
            доступ к сетям, активность в мессенджерах и браузерах.
          </StepCard>

          <StepCard
            className={`${bgColor} border-r`}
            title="Настройка мониторинга и контроля доступа к данным"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 4", "политики безопасности"]}
          >
            Определяются и настраиваются групповые политики безопасности,
            которые обеспечивают контроль за инцидентами и действиями
            сотрудников. Настройка мониторинга включает контроль почты,
            посещенных сайтов, мессенджеров, доступа к файлам.
          </StepCard>

          <StepCard
            className={`${bgColor} border-r`}
            title="Обучение сотрудников и техническая поддержка"
            tags={[
              tags.zabbix,
              tags.siemCons,
              tags.siemSec,
              tags.siemCloud,
              tags.itil,
            ]}
            upperLabels={["Этап 5", "Обучение и сопровождение"]}
          >
            Проводится обучение администраторов и пользователей по работе с
            системой Staffcop. F1 Lab предоставляет техническую поддержку для
            обеспечения стабильной работы системы.
          </StepCard>

          <StepCard title="Заполните форму и мы приступим" inverseColor={true}>
            <div className="flex flex-col gap-15">
              <Animation height="h-[300px]" data={animationData} />

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
