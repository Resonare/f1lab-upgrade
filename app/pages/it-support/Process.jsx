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
    title: "Анализ потребностей и планирование",
    upperLabels: ["Этап 1", "Аудит"],
    description: `На первом этапе проводится исследование текущих проблем бизнеса, определяются ключевые требования к IT-поддержке и формируются цели службы`,
  },
  {
    title: "Внедрение системы тикетов",
    upperLabels: ["Этап 2", "Helpdesk"],
    description: `Настроим систему тикетов, организуем каналы связи (телефон, почта, веб-портал, мессенджеры, чат-бот)`,
  },
  {
    title: "Тестирование и пилотный запуск",
    upperLabels: ["Этап 3", "Тест"],
    description: `Перед полным внедрением проводится тестирование в ограниченном режиме, выявляются и исправляются ошибки, оценивается качество работы`,
  },
  {
    title: "Полноценный запуск и мониторинг работы",
    upperLabels: ["Этап 4", "Старт"],
    description: `Служба IT-поддержки запускается в полную силу, начинается сбор статистики и обратной связи для дальнейшей оптимизации процессов`,
  },
  {
    title: "Проработка регламентных задач по обслуживанию инфраструктуры",
    upperLabels: ["Этап 5", "Плановые задачи"],
    description: `Разрабатываются и внедряются регламенты по обновлению операционных систем, выполнению резервного копирования и мониторингу оборудования`,
  },
  {
    title: "Оптимизация и развитие",
    upperLabels: ["Этап 6", "Улучшение процессов"],
    description: `Проводится анализ показателей эффективности, автоматизируются рутинные задачи, внедряются новые технологии и улучшения в обслуживании`,
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

        <StepCard
          className={`${bgColor}`}
          row="row-start-7"
          col="xl:col-start-3 lg:col-start-3 xl:col-end-4 lg:col-end-4 col-start-3 col-end-5"
          title={STEPS_DATA[5].title}
          upperLabels={STEPS_DATA[5].upperLabels}
        >
          {STEPS_DATA[5].description}
        </StepCard>

        <div className="sticky top-0 lg:mt-0 md:mt-60 sm:mt-30 col-start-1 max-lg:col-end-5 lg:row-start-2 row-start-8 lg:row-end-3 lg:h-full h-fit">
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
            className="border-r"
            title={STEPS_DATA[5].title}
            upperLabels={STEPS_DATA[5].upperLabels}
          >
            {STEPS_DATA[5].description}
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
