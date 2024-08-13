import Section from "../Section";
import ContentCard from "../cards/ContentCard";
import PrimaryButton from "../buttons/PrimaryButton";
import SectionTitle from "../SectionTitle";

const Offers = () => {
  return (
    <Section rowsAmount={3} inverseColor={true}>
      <SectionTitle
        row="row-start-1"
        col="col-start-2 col-end-4 xl:col-end-5 lg:col-end-5"
        inverseColor={true}
      >
        Что мы предлагаем?
      </SectionTitle>
      <ContentCard
        row="row-start-2"
        col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
        iconPath="audit/audit-offer-icon1.svg"
        inverseColor={true}
      >
        Исчерпывающую информацию для принятия управленческих решений
      </ContentCard>
      <ContentCard
        row="row-start-2"
        col="xl:col-start-4 lg:col-start-4 col-start-3 col-end-5"
        iconPath="audit/audit-offer-icon2.svg"
        inverseColor={true}
      >
        Располагаем ресурсами и компетенциями для решения выявленных проблем
      </ContentCard>
      <ContentCard
        row="row-start-3"
        col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
        iconPath="audit/audit-offer-icon3.svg"
        inverseColor={true}
      >
        Только понятные, полезные и применимые рекомендации исходя из целей и
        ограничений бизнеса
      </ContentCard>
      <PrimaryButton
        type="light"
        row="row-start-4"
        col="xl:col-start-2 lg:col-start-2 col-start-1 xl:col-end-3 lg:col-end-3 col-end-6"
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
