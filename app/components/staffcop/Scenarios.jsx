import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../cards/ContentCard";
import ImageCard from "../cards/ImageCard";
import SectionTitle from "../SectionTitle";

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
        imagePath="staffcop/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="staffcop/scenario-icon1.svg"
      >
        Отследить передачу конфиденциальной информации через мессенджеры или
        почту
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/scenario-icon2.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="lg:col-start-2 sm:col-start-3 lg:col-end-2 col-end-5"
        iconPath="staffcop/scenario-icon2.svg"
      >
        Обеспечить контроль за выполнением задач сотрудниками при удаленной
        работе
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="staffcop/scenario-icon3.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="lg:row-start-2 sm:row-start-3 row-start-6"
        col="lg:col-start-3 col-start-1 lg:col-end-4 sm:col-end-3 col-end-4"
        iconPath="staffcop/scenario-icon3.svg"
      >
        Оценить эффективность работы персонала, учитывая рабочее время и
        продуктивности сотрудников
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/scenario-icon4.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-3 row-start-9"
        col="lg:col-start-2 sm:col-start-3 col-start-2 lg:col-end-3 col-end-5"
        iconPath="staffcop/scenario-icon4.svg"
      >
        Собрать доказательную базу по недобросовестному сотруднику
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/scenario-icon5.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="lg:row-start-3 sm:row-start-4 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 sm:col-end-3 col-end-5"
        iconPath="staffcop/scenario-icon5.svg"
      >
        Проверить соблюдение стандартов безопасности и предотвратить передачу
        данных на небезопасные ресурсы
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        iconPath="staffcop/scenario-icon6.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="lg:row-start-3 sm:row-start-4 row-start-12"
        col="lg:col-start-4 sm:col-start-3 col-start-1 sm:col-end-5 col-end-4"
        iconPath="staffcop/scenario-icon6.svg"
      >
        Оптимизировать затраты на ит-инфраструктуру
      </ContentCard>
    </Section>
  );
};

export default Scenarios;
