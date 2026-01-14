import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import ImageCard from "../../components/cards/ImageCard";
import SectionTitle from "../../layout/SectionTitle";

const Scenarios = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section id="scenarios" inverseColor={true}>
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
        imagePath="development/scenario-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 xl:col-end-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/development/scenario-icon1.svg"
      >
        <div className="font-bold sm:mt-[32px] mt-0">
          Excel и чаты вместо системы
        </div>
        <div>Лиды теряются, сроки плывут, ответственность размыта.</div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="development/scenario-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        inverseColor={true}
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/development/scenario-icon2.svg"
      >
        <div className="font-bold">1С, сайт и CRM не синхронизированы</div>
        <div>Двойной ввод, ошибки в заказах/остатках, ручные сверки.</div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="development/scenario-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/development/scenario-icon3.svg"
      >
        <div className="font-bold">Техподдержка «в почте»</div>
        <div>
          Нет статусов и SLA, время не учитывается, стоимость услуг не
          считается.
        </div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="development/scenario-icon4.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        inverseColor={true}
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-3 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/development/scenario-icon4.svg"
      >
        <div className="font-bold">Согласования буксуют</div>
        <div>Длинные цепочки, «висящие» задачи, нет прозрачного пайплайна.</div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-[13]"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="development/scenario-icon5.svg"
        inverseColor={true}
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        inverseColor={true}
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-4 sm:col-start-3 col-start-2 sm:col-end-5 col-end-5"
        iconPath="/images/development/scenario-icon5.svg"
      >
        <div className="font-bold">Нет сквозной аналитики</div>
        <div>
          Разрозненные отчёты, не видно воронку, выручку и маржу по каналам.
        </div>
      </ContentCard>
    </Section>
  );
};

export default Scenarios;
