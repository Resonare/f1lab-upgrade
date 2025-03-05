import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/antivirus/Hero";
import Scenarios from "../pages/antivirus/Scenarios";
import Offers from "../pages/antivirus/Offers";
import ProcessSection from "../layout/ProcessSection";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/antivirus/Prices";
import Pockets from "../pages/antivirus/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import Trial from "../pages/antivirus/Trial";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";

const STEPS_DATA = [
  {
    title: "Анализ и оценка потребностей",
    tagTitles: ["Test"],
    upperLabels: ["Этап 1", "Подбор лицензии"],
    body: "Наши специалисты проводят детальную проверку IT-инфраструктуры, определяя оптимальную лицензию для вашей компании",
  },
  {
    title: "Установка и настройка программного обеспечения",
    tagTitles: ["Test"],
    upperLabels: ["Этап 2", "Внедрение"],
    body: "Профессиональная установка и конфигурация антивируса PRO32 на всех целевых устройствах, обеспечивая максимальную эффективность защиты.",
  },
  {
    title: "Обучение сотрудников",
    tagTitles: ["Test"],
    upperLabels: ["Этап 3", "обучение"],
    body: "Проведение обучающих сессий для сотрудников и руководства по эффективному использованию PRO32 и основам кибербезопасности.",
  },
  {
    title: "Техническая поддержка и сопровождение",
    tagTitles: ["Test"],
    upperLabels: ["Этап 4", "сопровождение"],
    body: "Предоставление технической поддержки, регулярные обновления и мониторинг системы для поддержания высокого уровня безопасности.",
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | Антивирус" },
    {
      name: "PRO32 Endpoint Security",
      content: "Антивирусная защита для вашего бизнеса",
    },
  ];
};

export default function ITAudit() {
  const { serviceCasesData, critiquesData, tagsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection
        title="Процесс внедрения антивирусного решения"
        stepsData={STEPS_DATA}
        tagsData={tagsData}
      />
      <Trial />
      <CasesSection
        title="Кейсы: как мы решаем задачи наших клиентов"
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
