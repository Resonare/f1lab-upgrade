import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import ImageCard from "../../components/cards/ImageCard";
import SectionTitle from "../../layout/SectionTitle";
import Animation from "../../components/misc/animations/Animation";

import scenariosAnimationJson from "../../animations/scenarios-animation.json";

const Scenarios = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section id="scenarios">
      <SectionTitle
        className="max-sm:pb-30"
        row="row-start-1"
        col="col-start-1 col-end-5"
      >
        Сценарии применения
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="scenarios/balance.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 xl:col-end-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/scenarios/balance.svg"
      >
        Снижение затрат на обслуживание и улучшение качества ит-сервиса
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="scenarios/system-structure.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="sm:row-start-2 row-start-6"
        col="sm:col-start-3 col-start-1 xl:col-end-4 lg:col-end-4 sm:col-end-5 col-end-4"
        iconPath="/images/scenarios/system-structure.svg"
      >
        Нехватка ИТ‑компетенций при наличии сложных инфраструктур
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="scenarios/exit-circle.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-3 row-start-9"
        col="lg:col-start-2 sm:col-start-1 col-start-2 sm:col-end-3 col-end-5"
        iconPath="/images/scenarios/exit-circle.svg"
      >
        Высвобождение времени ит-директора и избавление от выполнения рутинных
        задач
      </ContentCard>

      <div className="max-sm:hidden bg-gray-400 xl:px-[110px] xl:py-[50px] lg:px-90 lg:py-[50px] md:px-200 md:py-[50px] sm:px-100 sm:py-40 border-y border-dashed sm:row-start-3 row-start-10 lg:col-start-4 sm:col-start-3 col-end-5">
        <Animation data={scenariosAnimationJson} />
      </div>
    </Section>
  );
};

export default Scenarios;
