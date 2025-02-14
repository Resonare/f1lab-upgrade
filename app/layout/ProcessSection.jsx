import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";

import useModalStore from "../store/modal";

import Section from "./Section";
import StepCard from "../components/cards/StepCard";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Carousel from "../components/misc/Carousel";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Animation from "../components/misc/animations/Animation";

import animationData from "../animations/circles-animation.json";

const TAGS_DATA = {
  siemCons: {
    id: 0,
    title: "SIEM система",
    color: "consulting",
  },
  siemSec: {
    id: 1,
    title: "SIEM система",
    color: "security",
  },
  siemCloud: {
    id: 2,
    title: "SIEM система",
    color: "cloud",
  },
  itil: {
    id: 3,
    title: "ITIL",
    color: "cloud",
  },
  zabbix: {
    id: 4,
    title: "ZABBIX",
    color: "[#D40000]",
    inverseColor: true,
  },
};

const DUMMY_STEPS_DATA = [
  {
    title: "Анализ и оценка потребностей",
    tags: [
      TAGS_DATA.zabbix,
      TAGS_DATA.siemCons,
      TAGS_DATA.siemSec,
      TAGS_DATA.siemCloud,
      TAGS_DATA.itil,
    ],
    upperLabels: ["Этап 1", "Подбор лицензии"],
    body: "Наши специалисты проводят детальную проверку IT-инфраструктуры, определяя оптимальную лицензию для вашей компании",
  },
  {
    title: "Установка и настройка программного обеспечения",
    tags: [
      TAGS_DATA.zabbix,
      TAGS_DATA.siemCons,
      TAGS_DATA.siemSec,
      TAGS_DATA.siemCloud,
      TAGS_DATA.itil,
    ],
    upperLabels: ["Этап 2", "Внедрение"],
    body: "Профессиональная установка и конфигурация антивируса PRO32 на всех целевых устройствах, обеспечивая максимальную эффективность защиты.",
  },
  {
    title: "Обучение сотрудников",
    tags: [
      TAGS_DATA.zabbix,
      TAGS_DATA.siemCons,
      TAGS_DATA.siemSec,
      TAGS_DATA.siemCloud,
      TAGS_DATA.itil,
    ],
    upperLabels: ["Этап 3", "обучение"],
    body: "Проведение обучающих сессий для сотрудников и руководства по эффективному использованию PRO32 и основам кибербезопасности.",
  },
  {
    title: "Техническая поддержка и сопровождение",
    tags: [
      TAGS_DATA.zabbix,
      TAGS_DATA.siemCons,
      TAGS_DATA.siemSec,
      TAGS_DATA.siemCloud,
      TAGS_DATA.itil,
    ],
    upperLabels: ["Этап 4", "сопровождение"],
    body: "Предоставление технической поддержки, регулярные обновления и мониторинг системы для поддержания высокого уровня безопасности.",
  },
];

const ProcessSection = ({ stepsData, title = "Процесс" }) => {
  stepsData = DUMMY_STEPS_DATA; //<---------------------------------------DELETE

  if (!stepsData || stepsData.length <= 0) return;

  const { bgColor } = useContext(ThemeContext);

  const { showCallMeBackModal } = useModalStore();

  return (
    <>
      <Section className="max-sm:hidden">
        <SectionTitle
          className="mb-100"
          row="row-start-1"
          col="col-start-1 lg:col-end-3 col-end-5"
        >
          {title}
        </SectionTitle>

        {stepsData.map((stepData, index) => {
          const lgColStart =
            index % 4 != 0 ? ((index - 1) % 2 != 0 ? 4 : 3) : 2;
          const colStart = (index % 2) * 2;

          return (
            <StepCard
              key={index}
              className={`${bgColor}`}
              row={`row-start-${index + 2}`}
              col={`lg:col-start-${lgColStart} col-start-${
                colStart + 1
              } lg:col-end-${lgColStart + 1} col-end-${colStart + 3}`}
              title={stepData.title}
              tags={stepData.tags}
              upperLabels={stepData.upperLabels}
            >
              {stepData.body}
            </StepCard>
          );
        })}

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
          {...stepsData.map((stepData, index) => (
            <StepCard
              key={index}
              className="border-r"
              title={stepData.title}
              tags={stepData.tags}
              upperLabels={stepData.upperLabels}
            >
              {stepData.body}
            </StepCard>
          ))}

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

export default ProcessSection;
