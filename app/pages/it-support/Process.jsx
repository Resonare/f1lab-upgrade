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

import animationData from "../../animations/circles-animation.json";

const STEPS_DATA = [
  {
    title: "Анализ текущего состояния ПО и определение необходимых улучшений",
    upperLabels: ["Этап 1", "Начальная консультация и оценка"],
    description: `Проведем оценку вашего специализированного ПО и определим, какие
      обновления и улучшения необходимы для обеспечения его стабильной и
      эффективной работы, чтобы соответствовать изменяющимся
      бизнес-требованиям и избежать сбоев`,
  },
  {
    title: "Регулярное обновление и управление версиями ПО",
    upperLabels: ["Этап 2", "Поддержка ПО"],
    description: `Обеспечим регулярные обновления и управление версиями вашего ПО, чтобы
      гарантировать его актуальность, безопасность и соответствие
      требованиям бизнеса, минимизируя риски устаревания и уязвимостей`,
  },
  {
    title:
      "Оперативное решение возникающих проблем и техническая поддержка пользователей",
    upperLabels: ["Этап 3", "Техническая поддержка", "и решение проблем"],
    description: `Предоставим круглосуточную техническую поддержку и оперативное решение
      проблем, чтобы пользователи могли продолжать свою работу без простоев
      и задержек, повышая удовлетворенность и продуктивность`,
  },
  {
    title: "Внедрение и интеграция новых функций в ПО",
    upperLabels: ["Этап 4", "Интеграция новых функций"],
    description: `Интегрируем новые функции и возможности в ваше ПО, чтобы оно могло
      адаптироваться к изменяющимся бизнес-процессам и требованиям,
      обеспечивая конкурентоспособность и инновационность ваших решений`,
  },
  {
    title: "Постоянный мониторинг производительности и оптимизация работы ПО",
    upperLabels: ["Этап 5", "Мониторинг и оптимизация"],
    description: `Будем мониторить производительность вашего ПО и проводить регулярную
      оптимизацию, чтобы обеспечить его бесперебойную работу и высокую
      эффективность, что особенно важно для быстрореагирующих бизнесов и
      стартапов`,
  },
];

const Process = () => {
  const { bgColor } = useContext(ThemeContext);

  const { showCallMeBackModal } = useModalStore();

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
          title={STEPS_DATA[0].title}
          upperLabels={STEPS_DATA[0].upperLabels}
        >
          {STEPS_DATA[0].description}
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-3"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title={STEPS_DATA[1].title}
          upperLabels={STEPS_DATA[1].upperLabels}
        >
          {STEPS_DATA[1].description}
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-4"
          col="xl:col-start-4 lg:col-start-4 col-start-1 xl:col-end-5 lg:col-end-5 col-end-3"
          title={STEPS_DATA[2].title}
          upperLabels={STEPS_DATA[2].upperLabels}
        >
          {STEPS_DATA[2].description}
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-5"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          title={STEPS_DATA[3].title}
          upperLabels={STEPS_DATA[3].upperLabels}
        >
          {STEPS_DATA[3].description}
        </StepCard>

        <StepCard
          className={`${bgColor}`}
          row="row-start-6"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          title={STEPS_DATA[4].title}
          upperLabels={STEPS_DATA[4].upperLabels}
        >
          {STEPS_DATA[4].description}
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
            title={STEPS_DATA[0].title}
            upperLabels={STEPS_DATA[0].upperLabels}
          >
            {STEPS_DATA[0].description}
          </StepCard>

          <StepCard
            className="border-r"
            title={STEPS_DATA[1].title}
            upperLabels={STEPS_DATA[1].upperLabels}
          >
            {STEPS_DATA[1].description}
          </StepCard>

          <StepCard
            className="border-r"
            title={STEPS_DATA[2].title}
            upperLabels={STEPS_DATA[2].upperLabels}
          >
            {STEPS_DATA[2].description}
          </StepCard>

          <StepCard
            className="border-r"
            title={STEPS_DATA[3].title}
            upperLabels={STEPS_DATA[3].upperLabels}
          >
            {STEPS_DATA[3].description}
          </StepCard>

          <StepCard
            className="border-r"
            title={STEPS_DATA[4].title}
            upperLabels={STEPS_DATA[4].upperLabels}
          >
            {STEPS_DATA[4].description}
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
