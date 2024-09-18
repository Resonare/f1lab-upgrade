import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import ContentCard from "../cards/ContentCard";
import PrimaryButton from "../buttons/PrimaryButton";
import SectionTitle from "../SectionTitle";
import ImageCard from "../cards/ImageCard";

const Offers = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <Section rowsAmount={3} inverseColor={true} id="offers">
      <SectionTitle
        row="row-start-1"
        col="sm:col-start-2 col-start-1 lg:col-end-5 sm:col-end-4 col-end-5"
        inverseColor={true}
      >
        Что мы предлагаем?
      </SectionTitle>

      <ImageCard
        row="row-start-2"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="audit/audit-offer-icon1.svg"
        inverseColor={true}
      />

      <ContentCard
        row="sm:row-start-2 row-start-3"
        col="lg:col-start-2 sm:col-start-1 col-start-2 sm:col-end-3 col-end-5"
        iconPath="audit/audit-offer-icon1.svg"
        inverseColor={true}
        borderLeft={true}
      >
        Исчерпывающую информацию для принятия управленческих решений
      </ContentCard>

      <div className="sm:hidden h-15 row-start-4"></div>

      <ImageCard
        row="row-start-5"
        col="col-start-4"
        className="sm:hidden border-l border-y"
        imagePath="audit/audit-offer-icon2.svg"
        inverseColor={true}
      />

      <ContentCard
        row="sm:row-start-2 row-start-6"
        col="lg:col-start-4 sm:col-start-3 col-start-1 sm:col-end-5 col-end-4"
        iconPath="audit/audit-offer-icon2.svg"
        inverseColor={true}
        borderRight={true}
      >
        Располагаем ресурсами и компетенциями для решения выявленных проблем
      </ContentCard>

      <div className="sm:hidden h-15 row-start-7"></div>

      <ImageCard
        row="row-start-8"
        col="col-start-1"
        className="sm:hidden border-r border-y"
        imagePath="audit/audit-offer-icon3.svg"
        inverseColor={true}
      />

      <ContentCard
        row="sm:row-start-3 row-start-9"
        col="sm:col-start-3 col-start-2 lg:col-end-4 col-end-5"
        iconPath="audit/audit-offer-icon3.svg"
        inverseColor={true}
        borderLeft={true}
      >
        Только понятные, полезные и применимые рекомендации исходя из целей и
        ограничений бизнеса
      </ContentCard>

      <PrimaryButton
        type="light"
        row="row-start-4"
        col="xl:col-start-2 lg:col-start-2 col-start-1 xl:col-end-3 lg:col-end-3 col-end-6"
        className="max-sm:hidden"
        onClick={showCallMeBackModal}
      >
        Консультация
      </PrimaryButton>

      <PrimaryButton
        type="accent"
        row="row-start-10"
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
