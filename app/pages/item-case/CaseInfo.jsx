import { useState, useContext } from "react";
import { useLoaderData } from "@remix-run/react";

import useModalStore from "../../store/modal";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ContentCard from "../../components/cards/ContentCard";
import CritiqueCard from "../../components/cards/CritiqueCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TagContainer from "../../components/misc/TagContainer";

const CaseInfo = () => {
  const themeContext = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(themeContext.bgColor);

  const { showCallMeBackModal } = useModalStore();

  const { selectedCase } = useLoaderData();

  return (
    <Section className="lg:pt-60 max-sm:[&>div]:pt-15">
      <div className="col-start-1 md:col-end-3 col-end-5">
        <ContentCard
          className={`${bgColor} md:justify-between border-t max-sm:border-l`}
          iconPath={selectedCase.client.logoPath}
          hideIconOnMobile={false}
        >
          <div className="flex flex-col gap-30">
            <TagContainer title="Услуги в кейсе">
              {selectedCase.services.map((service) => service.tag)}
            </TagContainer>
            <TagContainer title="Технологии">
              {selectedCase.technologyTags}
            </TagContainer>
          </div>
        </ContentCard>

        <ContentCard className={`${bgColor} border-y max-sm:border-l`}>
          {selectedCase.client.description}
        </ContentCard>
      </div>

      <CritiqueCard
        className="mt-[-1px] lg:border-t max-sm:hidden"
        col="md:col-start-3 col-start-1 col-end-5"
        minimized={true}
        critiquesData={selectedCase.client.critiques}
      />

      <SectionTitle
        className="md:mt-60 sm:mt-30 md:mb-90 sm:mb-60 mb-30 max-sm:font-extended max-sm:font-bold max-sm:text-[28px] max-sm:leading-[30px]"
        row="md:row-start-3 row-start-1"
        col="col-start-1 col-end-5"
      >
        {selectedCase.description}
      </SectionTitle>

      <div
        className={`lg:${bgColor} md:pt-0 sm:pt-60 pt-0 max-sm:mx-[1px] lg:border-x border-dashed border-gray-200 lg:flex lg:flex-wrap grid grid-cols-4 row-start-4 col-start-1 col-end-5`}
      >
        {selectedCase.numbers.map((numberData, index) => (
          <ContentCard
            key={index}
            className={`${
              (index + 1) % 3 != 0 && `lg:border-r`
            } max-lg:${bgColor} 2xl:w-[33.18%] lg:w-[33.13%] border-y`}
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

      {selectedCase.dones.map((doneData, index) => (
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
            <TagContainer>{doneData.tags}</TagContainer>
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
