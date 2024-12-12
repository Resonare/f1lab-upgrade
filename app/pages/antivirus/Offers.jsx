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
        className="text-f1-light sm:mb-[50px] mb-30"
        row="row-start-1"
        col="lg:col-start-2 col-start-1 lg:col-end-4 col-end-5"
      >
        Почему антивирус PRO32 с технической поддержкой от F1Lab — верное
        решение?
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/offer-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="sm:row-start-2 row-start-3"
        col="lg:col-start-1 sm:col-start-1 col-start-2 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/offer-icon1.svg"
        inverseColor={true}
      >
        PRO32 эффективно обнаруживает и блокирует вирусы, программы-вымогатели и
        фишинговые атаки, обеспечивая безопасность ваших данных.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="antivirus/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/antivirus/offer-icon2.svg"
        inverseColor={true}
      >
        Антивирус PRO32 разработан с учетом оптимизации производительности, что
        позволяет ему работать на 15% быстрее предыдущей версии, не замедляя
        работу ваших устройств.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/offer-icon2.svg"
        inverseColor={true}
      >
        Специалисты F1Lab обеспечивают оперативную помощь в установке, настройке
        и сопровождении антивируса, гарантируя бесперебойную защиту.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="antivirus/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/antivirus/offer-icon2.svg"
        inverseColor={true}
      >
        Решения PRO32 интегрируются с системами SIEM и поддерживают контроль
        приложений и USB-устройств, что помогает соответствовать корпоративным
        стандартам безопасности.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-13"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="antivirus/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-3 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/antivirus/offer-icon2.svg"
        inverseColor={true}
      >
        PRO32 предоставляет удобную веб-консоль для централизованного управления
        безопасностью всех устройств в вашей сети, упрощая контроль и
        администрирование.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-[16]"></div>

      <ImageCard
        row="row-start-[18]"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="antivirus/offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[19]"
        col="lg:col-start-4 sm:col-start-3 col-start-1 lg:col-end-5 sm:col-end-5 col-end-4"
        iconPath="/images/antivirus/offer-icon2.svg"
        inverseColor={true}
      >
        Мониторинг состояния безопасности ит-инфраструктуры и своевременное
        реагирование специалистов F1Lab на инциденты.
      </ContentCard>

      <div className="sm:hidden h-15 row-start-[20]"></div>

      <PrimaryButton
        type="light"
        row="lg:row-start-4 row-start-[21]"
        col="col-start-1 xl:col-end-3 lg:col-end-3 col-end-6"
        onClick={showCallMeBackModal}
      >
        Подобрать лицензию
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
