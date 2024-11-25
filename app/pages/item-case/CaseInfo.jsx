import { useState, useContext } from "react";
import { useLoaderData } from "@remix-run/react";

import useModalStore from "../../store/modal";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import ServiceTags from "../../components/misc/ServiceTags";
import CritiqueCard from "../../components/cards/CritiqueCard";
import TechTags from "../../components/misc/TechTags";
import Tag from "../../components/misc/Tag";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const DUMMY_CASE_DATA = {
  technologies: [
    { title: "F1 HD", color: "bg-cloud" },
    { title: "Telegram", color: "bg-cloud" },
    { title: "PRO32 Connect", color: "bg-cloud" },
  ],
  done: [
    {
      iconPath: "/images/icons/services/audit.svg",
      mobileIconPath: "/images/icons/services/audit-small.svg",
      title: "Аудит:",
      description:
        "Провели комплексную проверку текущих процессов и систем, выявили проблемные зоны и возможности для оптимизации.",
      tags: [{ title: "IT - аудит", color: "bg-cloud" }],
    },
    {
      iconPath: "/images/icons/services/helpdesk.svg",
      mobileIconPath: "/images/icons/services/helpdesk-small.svg",
      title: "Единая система обработки запросов:",
      description:
        "Внедрили программное решение Helpdesk для консолидации всех обращений пользователей.",
      tags: [{ title: "IT - аудит", color: "bg-cloud" }],
    },
    {
      iconPath: "/images/icons/services/telephony.svg",
      mobileIconPath: "/images/icons/services/telephony-small.svg",
      title: "Каналы связи:",
      description:
        "Организовали многоканальную систему поддержки, включающую телефон, email, Telegram и веб-портал.",
      tags: [{ title: "IT - аудит", color: "bg-cloud" }],
    },
    {
      iconPath: "/images/icons/services/layers.svg",
      mobileIconPath: "/images/icons/services/layers-small.svg",
      title: "Многоуровневая поддержка:",
      description:
        "Построили систему многоуровневой поддержки, позволяющую эскалировать запросы в зависимости от их сложности.",
      tags: [{ title: "IT - аудит", color: "bg-cloud" }],
    },
    {
      iconPath: "/images/icons/services/education.svg",
      mobileIconPath: "/images/icons/services/education-small.svg",
      title: "Обучение пользователей:",
      description:
        "Провели обучающие мероприятия для повышения осведомлённости и навыков сотрудников в работе с новой системой.",
      tags: [{ title: "IT - аудит", color: "bg-cloud" }],
    },
  ],
};

const CaseInfo = () => {
  const themeContext = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(themeContext.bgColor);

  const { showCallMeBackModal } = useModalStore();

  const { selectedCase } = useLoaderData();

  return (
    <Section className="lg:pt-60 max-sm:[&>div]:pt-15">
      <div className="col-start-1 md:col-end-3 col-end-5">
        <ContentCard
          className={`${bgColor} md:justify-between border-t max-sm:border-x`}
          iconPath={selectedCase.client.logoPath}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-30">
            <ServiceTags>{selectedCase.services}</ServiceTags>
            <TechTags>{DUMMY_CASE_DATA.technologies}</TechTags>
          </div>
        </ContentCard>

        <ContentCard className={`${bgColor} border-y max-sm:border-x`}>
          {selectedCase.client.description}
        </ContentCard>
      </div>

      {selectedCase.client.critiques.map((critiqueData, index) => (
        <CritiqueCard
          key={index}
          className={`${bgColor} max-sm:hidden border-y max-md:border-l`}
          col="md:col-start-3 col-start-1 col-end-5"
          avatarPath={critiqueData.avatarPath}
          title={critiqueData.title}
          subtitle={critiqueData.subtitle}
        >
          {critiqueData.body}
        </CritiqueCard>
      ))}

      <SectionTitle
        className="md:mt-60 sm:mt-30 md:mb-90 sm:mb-60 mb-30 max-sm:font-extended max-sm:font-bold max-sm:text-[28px] max-sm:leading-[30px]"
        row="md:row-start-3 row-start-1"
        col="col-start-1 col-end-5"
      >
        {selectedCase.description}
      </SectionTitle>

      <div
        className={`lg:${bgColor} md:pt-0 sm:pt-60 pt-0 max-sm:mx-[1px] lg:border-x border-dashed border-gray-200 lg:flex grid grid-cols-4 row-start-4 col-start-1 col-end-5`}
      >
        {selectedCase.numbers.map((numberData, index) => (
          <ContentCard
            key={index}
            className={`${
              index != selectedCase.numbers.length - 1 && `lg:border-r`
            } max-lg:${bgColor} lg:w-1/3 border-y`}
            col={
              index % 2 == 0
                ? "col-start-1 md:col-end-3 col-end-5"
                : "md:col-start-3 col-start-1 col-end-5"
            }
          >
            <div className="flex flex-col gap-15">
              <p className="xl:text-[50px] md:text-[46px] text-[40px] font-expanded font-extrabold text-f1-dark">
                {numberData.title}
              </p>
              <p>{numberData.body}</p>
            </div>
          </ContentCard>
        ))}
      </div>

      <ContentCard
        row="row-start-5"
        col="lg:col-start-1 md:col-start-3 col-start-1 lg:col-end-3 col-end-5"
        className={`${bgColor} border-y max-sm:mx-[1px]`}
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Задача:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            {selectedCase.task}
          </p>
        </div>
      </ContentCard>

      <ContentCard
        row="row-start-6"
        col="lg:col-start-3 col-start-1 lg:col-end-5 md:col-end-3 col-end-5"
        className={`${bgColor} border-y max-sm:mx-[1px]`}
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Результаты:
          </p>
          <div className="flex flex-col text-gray-400 text-xl font-text font-light">
            {selectedCase.results.split("•").map((result, index) => (
              <div key={index} className="flex gap-10">
                <p>•</p>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        row="row-start-7"
        col="col-start-1 lg:col-end-3 col-end-5"
      >
        <p className="text-gray-400 text-[40px] font-expanded font-extrabold">
          Что было сделано:
        </p>
      </ContentCard>

      {DUMMY_CASE_DATA.done.map((doneData, index) => (
        <ContentCard
          key={index}
          className={`${bgColor} max-sm:mx-[1px] border-y`}
          iconPath={doneData.iconPath}
          mobileIconPath={doneData.mobileIconPath}
          hideIconOnMobile={false}
          row={`row-start-${8 + index}`}
          col={
            index % 2 == 0
              ? "sm:col-start-3 col-start-1 col-end-5"
              : "col-start-1 sm:col-end-3 col-end-5"
          }
        >
          <div className="flex flex-col gap-15">
            <p className="text-gray-400 text-[22px] font-extended font-bold">
              {doneData.title}
            </p>
            <p className="text-gray-400 text-xl font-text font-light">
              {doneData.description}
            </p>
            <div className="flex gap-10">
              {doneData.tags.map((tagData, index) => (
                <Tag key={index} className={tagData.color}>
                  {tagData.title}
                </Tag>
              ))}
            </div>
          </div>
        </ContentCard>
      ))}

      <PrimaryButton
        className="max-md:hidden"
        row="row-start-[16]"
        col="col-start-1 col-end-3"
        type="dark"
        onClick={showCallMeBackModal}
      >
        Начать сотрудничество
      </PrimaryButton>
    </Section>
  );
};

export default CaseInfo;
