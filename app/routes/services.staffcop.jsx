import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/staffcop/Hero";
import Scenarios from "../pages/staffcop/Scenarios";
import Offers from "../pages/staffcop/Offers";
import ProcessSection from "../layout/ProcessSection";
import Prices from "../pages/staffcop/Prices";
import Pockets from "../pages/staffcop/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import CasesSection from "../layout/CasesSection";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";

const STEPS_DATA = [
  {
    title: "Определение ключевых задач и объема мониторинга",
    upperLabels: ["Этап 1", "цели и требования"],
    body: `На этом этапе F1 Lab вместе с клиентом анализирует бизнес-процессы и
          определяет, какие задачи нужно решать с помощью Staffcop. Это
          позволяет точно настроить систему под нужды компании.`,
    tagTitles: ["Test"],
  },
  {
    title: "Установка серверной части",
    upperLabels: ["Этап 2", "Серверная инфраструктура"],
    body: `Развернём сервер Staffcop на вашем сервере или в нашем облаке.
          Настроим сервер распознавания.`,
    tagTitles: ["Test"],
  },
  {
    title: "Мониторинг действий сотрудников через агентов",
    upperLabels: ["Этап 3", "агенты на устройствах"],
    body: `На рабочие станции и серверы компании устанавливаются агенты Staffcop
          для мониторинга действий пользователей: работа с файлами, доступ к
          сетям, активность в мессенджерах и браузерах.`,
    tagTitles: ["Test"],
  },
  {
    title: "Настройка мониторинга и контроля доступа к данным",
    upperLabels: ["Этап 4", "политики безопасности"],
    body: `Определяются и настраиваются групповые политики безопасности, которые
          обеспечивают контроль за инцидентами и действиями сотрудников.
          Настройка мониторинга включает контроль почты, посещенных сайтов,
          мессенджеров, доступа к файлам.`,
    tagTitles: ["Test"],
  },
  {
    title: "Обучение сотрудников и техническая поддержка",
    upperLabels: ["Этап 5", "Обучение и сопровождение"],
    body: `Проводится обучение администраторов и пользователей по работе с
          системой Staffcop. F1 Lab предоставляет техническую поддержку для
          обеспечения стабильной работы системы.`,
    tagTitles: ["Test"],
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | Защита от утечек" },
    {
      name: "Staffcop",
      content:
        "Система расследования инцидентов внутренней безопасности от F1Lab",
    },
  ];
};

export default function Staffcop() {
  const { serviceCasesData, critiquesData, tagsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-100 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection
        title="Процесс внедрения Staffcop"
        stepsData={STEPS_DATA}
        tagsData={tagsData}
      />
      <CasesSection
        title="Примеры кейсов со Staffcop"
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
