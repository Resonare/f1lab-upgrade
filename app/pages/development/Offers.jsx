import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import ContentCard from "../../components/cards/ContentCard";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SectionTitle from "../../layout/SectionTitle";
import ImageCard from "../../components/cards/ImageCard";

const Offers = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <Section className="sm:py-60" id="offers">
      <SectionTitle
        className="max-sm:pb-30"
        row="row-start-1"
        col="md:col-start-2 col-start-1 md:col-end-4 col-end-5"
      >
        Что мы предлагаем?
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="development/offer-icon1.svg"
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="sm:row-start-2 row-start-3"
        col="lg:col-start-2 col-start-1 lg:col-end-2 sm:col-end-3 col-end-5"
        iconPath="/images/development/offer-icon1.svg"
      >
        <div className="font-bold">Быстрый старт без лишней бюрократии</div>
        <div>
          Уточняем цели и ограничения, фиксируем метрики успеха и план первых
          релизов.
        </div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="development/offer-icon2.svg"
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-2 row-start-6"
        col="sm:col-start-3 col-start-1 lg:col-end-3 sm:col-end-5 col-end-4"
        iconPath="/images/development/offer-icon2.svg"
      >
        <div className="font-bold">Рациональный путь: коробка или кастом</div>
        <div>
          Где хватает готовых продуктов — внедрим и настроим; где упираются —
          спроектируем индивидуальное решение.
        </div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="development/offer-icon3.svg"
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-2 sm:row-start-3 row-start-9"
        col="lg:col-start-4 sm:col-start-1 col-start-2 lg:col-end-4 sm:col-end-3 col-end-5"
        iconPath="/images/development/offer-icon3.svg"
      >
        <div className="font-bold">Интеграции и обмены без ручного труда</div>
        <div>
          Автоматический обмен данными между системами, API и внешними сервисами
          для бесшовной работы всех компонентов.
        </div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-10"></div>

      <ImageCard
        row="row-start-11"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="development/offer-icon4.svg"
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:mr-[-1px]"
        row="sm:row-start-3 row-start-12"
        col="lg:col-start-1 sm:col-start-3 col-start-1 lg:col-end-2 sm:col-end-5 col-end-4"
        iconPath="/images/development/offer-icon4.svg"
      >
        <div className="font-bold">Запуск и сопровождение</div>
        <div>
          Мониторинг, бэкапы, отказоустойчивость; реакция до 15 минут в рабочее
          время.
        </div>
      </ContentCard>

      <div className="sm:hidden h-15 row-start-13"></div>

      <ImageCard
        row="row-start-[14]"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="development/offer-icon5.svg"
      />

      <ContentCard
        className="border-y max-sm:border-x max-sm:ml-[-1px]"
        row="lg:row-start-3 sm:row-start-4 row-start-[15]"
        col="lg:col-start-2 sm:col-start-1 col-start-2 lg:col-end-3 sm:col-end-3 col-end-5"
        iconPath="/images/development/offer-icon5.svg"
      >
        <div className="font-bold">Дашборды</div>
        <div>
          Сквозная аналитика: воронка, доходность, SLA/затраты — в одном окне.
        </div>
      </ContentCard>

      <PrimaryButton
        type="accent"
        row="lg:row-start-4 sm:row-start-5"
        col="lg:col-start-4 col-start-1 lg:col-end-3 col-end-5"
        className="max-sm:hidden"
        onClick={showCallMeBackModal}
      >
        Консультация
      </PrimaryButton>

      <PrimaryButton
        type="accent"
        row="row-start-[20]"
        col="col-start-1 col-end-5"
        className="sm:hidden pt-30"
        onClick={showCallMeBackModal}
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
