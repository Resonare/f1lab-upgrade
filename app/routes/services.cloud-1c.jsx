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
    title: "Анализ и план миграции",
    tagTitles: ["Test"],
    upperLabels: ["Этап 1", "цели и требования"],
    body: "Аудит баз, оценка объёма данных, подбор оптимального тарифа и расписания переключения.",
  },
  {
    title: "Развёртывание облачной инфраструктуры",
    tagTitles: ["Test"],
    upperLabels: ["Этап 2", "Серверная инфраструктура"],
    body: "Создание виртуальных серверов, настройка Postgres/файловых баз, организация резервных сетей и VPN.",
  },
  {
    title: "Перенос и тестирование баз",
    tagTitles: ["Test"],
    upperLabels: ["Этап 3", "миграция"],
    body: "Перенос информационных баз, нагрузочное тестирование, проверка обменов и печатных форм.",
  },
  {
    title: "Подключение пользователей и настройка безопасности",
    tagTitles: ["Test"],
    upperLabels: ["Этап 4", "политики безопасности"],
    body: "Выдача VPN-профилей, настройка ролей на сервере.",
  },
  {
    title: "Эксплуатация и поддержка 24/7",
    tagTitles: ["Test"],
    upperLabels: ["Этап 5", "мониторинг"],
    body: "Круглосутчный контроль доступности сервера, проактивные алерты при любых отклонениях, автоматический перезапуск служб и переключение на резерв, чтобы пользователи работали без простоев.",
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
