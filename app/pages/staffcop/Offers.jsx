import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionTitle from "../../layout/SectionTitle";
import ImageCard from "../../components/cards/ImageCard";

const Offers = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <Section inverseColor={true} id="offers">
      <SectionTitle
        className="text-f1-light max-sm:pb-30"
        row="row-start-1"
        col="md:col-start-2 col-start-1 md:col-end-4 col-end-5"
      >
        Что мы предлагаем?
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/offer-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="sm:row-start-2 row-start-3"
        col="sm:col-start-1 col-start-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/staffcop/offer-icon1.svg"
        inverseColor={true}
      >
        Подберем лицензии под любые задачи и рассчитаем стоимость проекта
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="staffcop/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/staffcop/offer-icon2.svg"
        inverseColor={true}
      >
        Настройку и интеграцию Staffcop в вашу IT-инфраструктуру или
        предоставление облачных мощностей
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/staffcop/offer-icon3.svg"
        inverseColor={true}
      >
        Аутсорсинг информационной безопасности. Администрирование рабочих мест,
        расследование инцидентов и формирование целевых отчетов
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="staffcop/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/staffcop/offer-icon3.svg"
        inverseColor={true}
      >
        Техническую поддержку и обучение сотрудников для эффективного
        использования системы безопасности
      </ContentCard>

      <div className="sm:hidden h-15 row-start-13"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="staffcop/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/staffcop/offer-icon3.svg"
        inverseColor={true}
      >
        Юридическую справку для внедрения и использования программного
        обеспечения с целью мониторинга рабочих процессов
      </ContentCard>

      <div className="sm:hidden h-15 row-start-[16]"></div>

      <ImageCard
        row="row-start-[18]"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="staffcop/offer-icon4.svg"
        inverseColor={true}
      />
      
      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[19]"
        col="lg:col-start-4 sm:col-start-3 col-start-1 sm:col-end-5 col-end-4"
        iconPath="/images/staffcop/offer-icon4.svg"
        inverseColor={true}
      >
        Контроль за действиями сотрудников с целью предотвращения утечек данных
        через мессенджеры, почту и внешние устройства
      </ContentCard>

      <PrimaryButton
        type="light"
        row="lg:row-start-4 sm:row-start-5"
        col="col-start-1 lg:col-end-3 col-end-5"
        className="max-sm:hidden"
        onClick={showCallMeBackModal}
      >
        Подобрать лицензию
      </PrimaryButton>

      <PrimaryButton
        type="accent"
        row="row-start-[20]"
        col="col-start-1 col-end-5"
        className="sm:hidden pt-30"
        onClick={showCallMeBackModal}
      >
        Подобрать лицензию
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
