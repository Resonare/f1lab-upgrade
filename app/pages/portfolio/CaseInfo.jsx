import { useState, useContext } from "react";
import { useLoaderData } from "@remix-run/react";

import useModalStore from "../../store/modal";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import ServiceTags from "../../components/misc/ServiceTags";
import CritiqueCard from "../../components/cards/CritiqueCard";
import TechTags from "../../components/misc/TechTags";
import Tag from "../../components/misc/Tag";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const CaseInfo = () => {
  const themeContext = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(themeContext.bgColor);

  const { showCallMeBackModal } = useModalStore();

  const serviceCase = useLoaderData();
  console.log(serviceCase);

  return (
    <Section>
      <div className="col-start-1 col-end-3">
        <ContentCard
          className={`${bgColor} md:justify-between`}
          iconPath="logo/dvr-group-logo.svg"
        >
          <ServiceTags>{serviceCase.services}</ServiceTags>
          <TechTags>{serviceCase.technologies}</TechTags>
        </ContentCard>

        <ContentCard className={`${bgColor} border-y`}>
          ДВР Групп — компания с более чем 20-летним опытом работы на российском
          и азиатском рекламных рынках. Специализируется на профессиональном
          управлении маркетинговыми коммуникациями.
        </ContentCard>
      </div>

      <CritiqueCard
        className={`${bgColor} border-b`}
        col="col-start-3 col-end-5"
        avatarPath="/images/avatars/samarga.png"
        title="Мария Ивановна"
        subtitle="CEO компании “Samarga”"
      >
        Сотрудничество с командой F1 Lab стало настоящим прорывом для нашей
        компании. Мы искали партнёра, который мог бы не просто взять на себя
        обслуживание нашей IT-инфраструктуры, но и предложить комплексные
        решения для повышения эффективности бизнеса. F1 Lab превзошли наши
        ожидания. Благодаря их профессионализму, мы смогли сократить время
        простоя серверов на 80%, оптимизировать IT-расходы и значительно
        повысить безопасность данных.
      </CritiqueCard>

      <SectionTitle
        className="mt-60 mb-90"
        row="row-start-3"
        col="col-start-1 col-end-5"
      >
        Как мы помогли компании “Samarga” оптимизировать IT-инфраструктуру и
        защитить бизнес
      </SectionTitle>

      <div
        className={`${bgColor} border-x border-dashed border-gray-200 flex row-start-4 col-start-1 col-end-5`}
      >
        <ContentCard className="border-y border-r">
          <div className="flex flex-col gap-15">
            <p className="text-[56px] font-expanded font-extrabold text-f1-dark">
              3 минуты
            </p>
            <p>
              Среднее время реакции на обращение пользователя после внедрения
              системы.
            </p>
          </div>
        </ContentCard>

        <ContentCard className="border-y border-r">
          <div className="flex flex-col gap-15">
            <p className="text-[56px] font-expanded font-extrabold text-f1-dark">
              -30%
            </p>
            <p>
              Сокращение количества обращений за счёт введения плановых
              регламентных работ.
            </p>
          </div>
        </ContentCard>

        <ContentCard className="border-y">
          <div className="flex flex-col gap-15">
            <p className="text-[56px] font-expanded font-extrabold text-f1-dark">
              100 000 ₽
            </p>
            <p>
              Ежемесячная экономия по сравнению с затратами на самостоятельное
              содержание IT-отдела техподдержки.
            </p>
          </div>
        </ContentCard>
      </div>

      <ContentCard
        row="row-start-5"
        col="col-start-1 col-end-3"
        className={`${bgColor} border-y`}
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Задача:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            С ростом компании возникла необходимость в организации современной
            службы техподдержки для обеспечения пользователей быстрым и
            качественным обслуживанием. Заказчик поручил задачу ИТ-директору,
            который в свою очередь обратился к нам.
          </p>
        </div>
      </ContentCard>

      <ContentCard
        row="row-start-6"
        col="col-start-3 col-end-5"
        className={`${bgColor} border-y`}
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Результаты:
          </p>
          <div className="flex flex-col text-gray-400 text-xl font-text font-light">
            <div className="flex gap-10">
              <p>•</p>
              <p>
                Создана единая и эффективная служба техподдержки, доступная
                через удобные каналы связи.
              </p>
            </div>
            <div className="flex gap-10">
              <p>•</p>
              <p>
                Обеспечена прозрачная и понятная система отчетности, позволяющая
                отслеживать и анализировать обращения пользователей.
              </p>
            </div>
            <div className="flex gap-10">
              <p>•</p>
              <p>
                Повышено качество и скорость обработки запросов, что улучшило
                пользовательский опыт и лояльность сотрудников к системе.
              </p>
            </div>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        row="row-start-7"
        col="col-start-1 col-end-3"
      >
        <p className="text-gray-400 text-[40px] font-expanded font-extrabold">
          Что было сделано:
        </p>
      </ContentCard>

      <ContentCard
        className="border-y"
        iconPath="icons/services/audit.svg"
        row="row-start-8"
        col="col-start-3 col-end-5"
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Аудит:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            Провели комплексную проверку текущих процессов и систем, выявили
            проблемные зоны и возможности для оптимизации.
          </p>
          <div className="flex">
            <Tag className="bg-cloud">IT - аудит</Tag>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        iconPath="icons/services/helpdesk.svg"
        row="row-start-9"
        col="col-start-1 col-end-3"
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Единая система обработки запросов:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            Внедрили программное решение Helpdesk для консолидации всех
            обращений пользователей.
          </p>
          <div className="flex">
            <Tag className="bg-cloud">IT - аудит</Tag>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        iconPath="icons/services/telephony.svg"
        row="row-start-10"
        col="col-start-3 col-end-5"
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Каналы связи:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            Организовали многоканальную систему поддержки, включающую телефон,
            email, Telegram и веб-портал.
          </p>
          <div className="flex">
            <Tag className="bg-cloud">IT - аудит</Tag>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        iconPath="icons/services/layers.svg"
        row="row-start-[11]"
        col="col-start-1 col-end-3"
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Многоуровневая поддержка:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            Построили систему многоуровневой поддержки, позволяющую эскалировать
            запросы в зависимости от их сложности.
          </p>
          <div className="flex">
            <Tag className="bg-cloud">IT - аудит</Tag>
          </div>
        </div>
      </ContentCard>

      <ContentCard
        className="border-y"
        iconPath="icons/services/education.svg"
        row="row-start-[12]"
        col="col-start-3 col-end-5"
      >
        <div className="flex flex-col gap-15">
          <p className="text-gray-400 text-[22px] font-extended font-bold">
            Обучение пользователей:
          </p>
          <p className="text-gray-400 text-xl font-text font-light">
            Провели обучающие мероприятия для повышения осведомлённости и
            навыков сотрудников в работе с новой системой.
          </p>
          <div className="flex">
            <Tag className="bg-cloud">IT - аудит</Tag>
          </div>
        </div>
      </ContentCard>

      <PrimaryButton
        row="row-start-[13]"
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
