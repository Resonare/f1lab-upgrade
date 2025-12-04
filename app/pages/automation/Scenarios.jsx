import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import ImageCard from "../../components/cards/ImageCard";
import SectionTitle from "../../layout/SectionTitle";

const Scenarios = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section
      id="scenarios"
      inverseColor={true}
    >
      <SectionTitle
        className="text-gray-100 max-sm:pb-30"
        row="row-start-1"
        col="col-start-1 col-end-5"
      >
        Сценарии применения
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y aspect-square"
        imagePath="automation/scenario-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 xl:col-end-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/automation/scenario-icon1.svg"
      >
        Excel и чаты вместо системы
        <br />
        Лиды теряются, сроки плывут, ответственность размыта.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="automation/scenario-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        inverseColor={true}
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/automation/scenario-icon2.svg"
      >
        1С, сайт и CRM не синхронизированы
        <br />
        Двойной ввод, ошибки в заказах/остатках, ручные сверки.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="automation/scenario-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/automation/scenario-icon3.svg"
      >
        Техподдержка «в почте»
        <br />
        Нет статусов и SLA, время не учитывается, стоимость услуг не считается.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="automation/scenario-icon4.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        inverseColor={true}
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-3 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/automation/scenario-icon4.svg"
      >
        Согласования буксуют
        <br />
        Длинные цепочки, «висящие» задачи, нет прозрачного пайплайна.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-[13]"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="automation/scenario-icon5.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-4 sm:col-start-3 col-start-2 sm:col-end-5 col-end-5"
        iconPath="/images/automation/scenario-icon5.svg"
      >
        Нет сквозной аналитики
        <br />
        Разрозненные отчёты, не видно воронку, выручку и маржу по каналам.
      </ContentCard>
    </Section>
  );
};

export default Scenarios;
