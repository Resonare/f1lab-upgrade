import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/automation/Hero";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllTags } from "../data/tags.server";
import Scenarios from "../pages/automation/Scenarios";
import Offers from "../pages/automation/Offers";
import ProcessSection from "../layout/ProcessSection.jsx";
import CasesSection from "../layout/CasesSection.jsx";

const STEPS_DATA = [
  {
    title: "Определение целей и рамок проекта",
    tagTitles: ["ИТ-аудит"],
    upperLabels: ["Этап 1", "Диагностика целей"],
    body: "Встреча в удобном формате и бриф: фиксируем бизнес-цели, ограничения, метрики успеха. Определяем, где автоматизация даст максимальный эффект и окупится.",
  },
  {
    title: "Интервью, наблюдение, проверка решений на рынке",
    tagTitles: ["Test"],
    upperLabels: ["Этап 2", "ИССЛЕДОВАНИЕ ПРОЦЕССОВ И РЫНКА"],
    body: "Общаемся с командами, наблюдаем работу, собираем артефакты. Описываем «как есть», считаем потери и риски. Смотрим рынок, чтобы не изобретать лишнее.",
  },
  {
    title: "Целевой поток, гипотезы и дорожная карта",
    tagTitles: ["Test"],
    upperLabels: ["Этап 3", "АРХИТЕКТУРА И ПЛАН"],
    body: "Формируем «как должно быть», приоритизируем гипотезы. Выбираем стек и интеграции, оцениваем сроки и бюджет, фиксируем этапы MVP → релизы.",
  },
  {
    title: "Скелеты экранов под ключевые сценарии",
    tagTitles: ["Test"],
    upperLabels: ["Этап 4", "ВАЙРФРЕЙМЫ"],
    body: "Собираем чёрно-белые схемы экранов в Figma. Проверяем логику на пользователях, уточняем объём и роли.",
  },
  {
    title: "Интерактивная проверка решений",
    tagTitles: ["Test"],
    upperLabels: ["Этап 5", "ПРОТОТИП"],
    body: "Делаем кликабельный прототип. Тестируем сценарии, собираем обратную связь, фиксируем границы релиза.",
  },
  {
    title: "Модули, API, доступы, тесты",
    tagTitles: ["Test"],
    upperLabels: ["Этап 6", "РАЗРАБОТКА И ИНТЕГРАЦИИ"],
    body: "Реализуем функционал итерациями, подключаем внешние сервисы, настраиваем права и логи. Готовим окружение в облаке, пишем тесты.",
  },
  {
    title: "Пилот, обучение, мониторинг",
    tagTitles: ["Test"],
    upperLabels: ["Этап 7", "ЗАПУСК И ПОДДЕРЖКА"],
    body: "Выкатываем пилот, правим критичные ошибки, обучаем команду. Включаем мониторинг и бэкапы, берём на поддержку и планируем улучшения.",
  },
];

export const meta = () => {
  return [
    { title: "F1Lab | Автоматизация бизнес-процессов" },
    {
      name: "Автоматизация бизнес-процессов",
      content: "Автоматизация бизнес-процессов с измеримым эффектом",
    },
  ];
};

export default function Automation() {
  const { serviceCasesData, critiquesData, tagsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection
        inverseColor={true}
        rightSided={true}
        title="Процесс разработки и внедрения"
        stepsData={STEPS_DATA}
        tagsData={tagsData}
      />
      <CasesSection
        title="Кейсы: как мы решаем задачи наших клиентов"
        serviceCasesData={serviceCasesData}
        critiquesData={critiquesData}
        inverseColor={true}
      />

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
