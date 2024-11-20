import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionTitle from "../../components/SectionTitle";
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
        imagePath="it-support/offer-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="sm:row-start-2 row-start-3"
        col="lg:col-start-2 sm:col-start-1 col-start-2 lg:col-end-3 sm:col-end-3 col-end-5"
        iconPath="it-support/offer-icon1.svg"
        inverseColor={true}
      >
        Организацию быстрой и эффективной совместной работы в 1С за счет
        высокопроизодительных серверов и грамотной организации инфраструктуры
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="it-support/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-3 sm:col-start-3 col-start-1 lg:col-end-4 sm:col-end-5 col-end-4"
        iconPath="it-support/offer-icon2.svg"
        inverseColor={true}
      >
        role-based model организации ит-инфраструктуры
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="it-support/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-4 sm:col-start-1 col-start-2 lg:col-end-5 sm:col-end-3 col-end-5"
        iconPath="it-support/offer-icon3.svg"
        inverseColor={true}
      >
        Настройка VPN-доступа Создаём защищённый канал связи, исключающий
        несанкционированный доступ.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="it-support/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-1 sm:col-start-3 col-start-1 lg:col-end-2 sm:col-end-5 col-end-4"
        iconPath="it-support/offer-icon3.svg"
        inverseColor={true}
      >
        Мониторинг инфраструктуры 24/7 Постоянный контроль и оперативное
        реагирование на инциденты.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-13"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="it-support/offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-2 sm:col-start-1 col-start-2 lg:col-end-3 sm:col-end-3 col-end-5"
        iconPath="it-support/offer-icon3.svg"
        inverseColor={true}
      >
        Ежедневное резервное копирование данных.Безопасное хранение критически
        важных данных с доступом только для авторизованных пользователей
      </ContentCard>

      <PrimaryButton
        type="light"
        row="lg:row-start-4 sm:row-start-5"
        col="lg:col-start-4 col-start-1 col-end-5"
        className="max-sm:hidden"
        onClick={showCallMeBackModal}
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
