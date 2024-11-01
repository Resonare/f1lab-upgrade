import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../cards/ContentCard";
import ImageCard from "../cards/ImageCard";
import SectionTitle from "../SectionTitle";
import Animation from "../misc/animations/Animation";

import scenariosAnimationJson from "../misc/animations/scenarios-animation.json";

const Scenarios = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section id="scenarios">
      <SectionTitle row="row-start-1" col="col-start-1 col-end-5">
        Сценарии применения
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="it-support/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 xl:col-end-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="it-support/scenario-icon1.svg"
      >
        Несоответствие прежних ИТ‑процессов новым масштабным задачам
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="audit/audit-scenario-icon2.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="sm:row-start-2 row-start-6"
        col="sm:col-start-3 col-start-1 xl:col-end-4 lg:col-end-4 sm:col-end-5 col-end-4"
        iconPath="it-support/scenario-icon2.svg"
      >
        Оптимизировать производительность и снизить затраты на обслуживание
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="it-support/scenario-icon3.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-3 row-start-9"
        col="lg:col-start-2 sm:col-start-1 col-start-2 sm:col-end-3 col-end-5"
        iconPath="it-support/scenario-icon3.svg"
      >
        Нехватка ИТ‑компетенций при наличии сложных инфраструктур
      </ContentCard>

      <div className="max-sm:hidden bg-gray-400 xl:px-[110px] lg:px-90 md:px-200 sm:px-100 border-y border-dashed sm:row-start-3 row-start-10 lg:col-start-4 sm:col-start-3 col-end-5">
        <Animation data={scenariosAnimationJson} />
      </div>
    </Section>
  );
};

export default Scenarios;
