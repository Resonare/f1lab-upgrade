import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/it-support/Hero";
import Scenarios from "../pages/it-support/Scenarios";
import Offers from "../pages/it-support/Offers";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/it-support/Prices";
import Pockets from "../pages/it-support/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import ProcessSection from "../layout/ProcessSection";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";

const STEPS_DATA = [
  {
    title: "Анализ потребностей и планирование",
    upperLabels: ["Этап 1", "Аудит"],
    body: `На первом этапе проводится исследование текущих проблем бизнеса, определяются ключевые требования к IT-поддержке и формируются цели службы.`,
    tagTitles: ["Test"],
  },
  {
    title: "Внедрение системы тикетов",
    upperLabels: ["Этап 2", "Helpdesk"],
    body: `Настроим систему тикетов, организуем каналы связи (телефон, почта, веб-портал, мессенджеры, чат-бот).`,
    tagTitles: ["Test"],
  },
  {
    title: "Тестирование и пилотный запуск",
    upperLabels: ["Этап 3", "Тест"],
    body: `Перед полным внедрением проводится тестирование в ограниченном режиме, выявляются и исправляются ошибки, оценивается качество работы.`,
    tagTitles: ["Test"],
  },
  {
    title: "Полноценный запуск и мониторинг работы",
    upperLabels: ["Этап 4", "Старт"],
    body: `Служба IT-поддержки запускается в полную силу, начинается сбор статистики и обратной связи для дальнейшей оптимизации процессов.`,
    tagTitles: ["Test"],
  },
  {
    title: "Проработка регламентных задач по обслуживанию инфраструктуры",
    upperLabels: ["Этап 5", "Плановые задачи"],
    body: `Разрабатываются и внедряются регламенты по обновлению операционных систем, выполнению резервного копирования и мониторингу оборудования.`,
    tagTitles: ["Test"],
  },
  {
    title: "Оптимизация и развитие",
    upperLabels: ["Этап 6", "Улучшение процессов"],
    body: `Проводится анализ показателей эффективности, автоматизируются рутинные задачи, внедряются новые технологии и улучшения в обслуживании.`,
    tagTitles: ["Test"],
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | ИТ-Техподдержка" },
    { name: "ИТ-Техподдержка", content: "Быстрая IT-техподдержка от F1Lab" },
  ];
};

export default function ITSupport() {
  const { serviceCasesData, critiquesData, tagsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection
        title="Этапы оказания техподдержки"
        tagsData={tagsData}
        stepsData={STEPS_DATA}
      />
      <CasesSection
        title="Примеры кейсов с техподдержкой"
        serviceCasesData={serviceCasesData}
        critiquesData={critiquesData}
      />
      <Prices />
      {/*  <Pockets /> */}
      <TailwindCrutch />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  const critiquesData = await getAllCritiques();
  const tagsData = await getAllTags();

  return { critiquesData, serviceCasesData, tagsData };
}
