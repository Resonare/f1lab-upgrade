import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/cloud-1c/Hero";
import Scenarios from "../pages/cloud-1c/Scenarios";
import Offers from "../pages/cloud-1c/Offers";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/cloud-1c/Prices";
import Pockets from "../pages/cloud-1c/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import ProcessSection from "../layout/ProcessSection";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";

const STEPS_DATA = [
  {
    title: "Анализ текущей инфраструктуры",
    tagTitles: ["Test"],
    upperLabels: ["Этап 1", "цели и требования"],
    body: "Оценка существующих решений и проектирование защищённой облачной платформы.",
  },
  {
    title: "Установка серверной части и настройка баз данных",
    tagTitles: ["Test"],
    upperLabels: ["Этап 2", "Серверная инфраструктура"],
    body: "Устанавливается сервер Staffcop, настраиваются базы данных на ресурсы заказчика или арендованные у F1lab.",
  },
  {
    title: "Мониторинг действий сотрудников через агентов",
    tagTitles: ["Test"],
    upperLabels: ["Этап 3", "агенты на устройствах"],
    body: "На рабочие станции и серверы компании устанавливаются агенты Staffcop для мониторинга действий пользователей: работа с файлами, доступ к сетям, активность в мессенджерах и браузерах.",
  },
  {
    title: "Настройка мониторинга и контроля доступа к данным",
    tagTitles: ["Test"],
    upperLabels: ["Этап 4", "политики безопасности"],
    body: "Определяются и настраиваются групповые политики безопасности, которые обеспечивают контроль за инцидентами и действиями сотрудников. Настройка мониторинга включает контроль почты, посещенных сайтов, мессенджеров, доступа к файлам.",
  },
  {
    title: "Обучение сотрудников и техническая поддержка",
    tagTitles: ["Test"],
    upperLabels: ["Этап 5", "Обучение и сопровождение"],
    body: "Проводится обучение администраторов и пользователей по работе с системой Staffcop. F1 Lab предоставляет техническую поддержку для обеспечения стабильной работы системы.",
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | Облачная 1С" },
    {
      name: "Облачная 1С",
      content: "Защищённая 1С-инфраструктура в облаке от F1Lab",
    },
  ];
};

export default function Cloud1C() {
  const { serviceCasesData, critiquesData, tagsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection
        title="Этапы оказания техподдержки"
        stepsData={STEPS_DATA}
        tagsData={tagsData}
      />
      <CasesSection
        title="Примеры кейсов с облачной инфраструктурой"
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
