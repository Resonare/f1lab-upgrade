import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/audit/Hero";
import Scenarios from "../pages/audit/Scenarios";
import Offers from "../pages/audit/Offers";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/audit/Prices";
import Pockets from "../pages/audit/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";
import ProcessSection from "../layout/ProcessSection";

const STEPS_DATA = [
  {
    title: "Определение целей и объема аудита",
    tagTitles: ["Test"],
    upperLabels: ["Этап 1", "Начальная консультация"],
    body: "Чтобы определить ключевые области, требующие проверки и анализа. Это помогает установить общие ожидания и план действий для проведения аудита.",
  },
  {
    title: "Инвентаризация оборудования, ПО и сетей",
    tagTitles: ["Test"],
    upperLabels: ["Этап 2", "Сбор данных"],
    body: "Собранные данные служат основой для дальнейшего анализа и оценки состояния IT инфраструктуры.",
  },
  {
    title:
      "Оценка производительности, безопасности и соответствия нормативным требованиям",
    tagTitles: ["Test"],
    upperLabels: ["Этап 3", "Анализ"],
    body: "Специалисты выявляют узкие места и потенциальные риски, которые могут повлиять на работу бизнеса.",
  },
  {
    title: "Проведение тестов на уязвимости и отказоустойчивость",
    tagTitles: ["Test"],
    upperLabels: ["Этап 4", "Тестирование"],
    body: "Тесты помогают определить, насколько устойчива инфраструктура к сбоям и насколько она защищена от возможных угроз.",
  },
  {
    title: "Составление отчета с результатами и рекомендациями по улучшению",
    tagTitles: ["Test"],
    upperLabels: ["Этап 5", "Отчет и рекомендации"],
    body: "По завершении аудита составляется подробный отчет, включающий результаты проведенного анализа и тестирования. В отчете также предлагаются конкретные рекомендации по улучшению производительности, безопасности и соответствия нормативным требованиям IT инфраструктуры.",
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | ИТ-Аудит" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
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
        title="Процесс проведения аудита"
        stepsData={STEPS_DATA}
        tagsData={tagsData}
      />
      <CasesSection
        title="Примеры кейсов с аудитом"
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
