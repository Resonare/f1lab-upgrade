import { useContext } from "react";
import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import ImageCard from "../../components/cards/ImageCard";
import SectionTitle from "../../layout/SectionTitle";

const Scenarios = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <Section id="scenarios">
      <SectionTitle className="mb-100" row="row-start-1" col="col-start-1 col-end-5">
        Сценарии применения
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 xl:col-end-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/scenario-icon1.svg"
      >
        Заблокировать программы-вымогатели и атаки нулевого дня для защиты
        корпоративных данных.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-2 col-start-2 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/scenario-icon1.svg"
      >
        Обеспечить безопасные онлайн-платежи и предотвратить фишинговые атаки.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="antivirus/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="sm:row-start-2 row-start-6"
        col="sm:col-start-3 col-start-1 xl:col-end-4 lg:col-end-4 sm:col-end-5 col-end-4"
        iconPath="/images/antivirus/scenario-icon1.svg"
      >
        Избежать несанкционированного доступа к веб-камере, сохраняя
        конфиденциальность сотрудников.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:ml-[-1px]`}
        row="sm:row-start-3 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/scenario-icon1.svg"
      >
        Контролировать использование интернета и приложений, ограничивая доступ
        по заданному графику.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="antivirus/scenario-icon1.svg"
      />

      <ContentCard
        className={`${bgColor} border-y max-sm:border-x max-sm:mr-[-1px]`}
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-4 sm:col-start-3 col-start-1 sm:col-end-5 col-end-4"
        iconPath="/images/antivirus/scenario-icon1.svg"
      >
        Сохранить высокую производительность устройств при активной защите от
        угроз.
      </ContentCard>
    </Section>
  );
};

export default Scenarios;
