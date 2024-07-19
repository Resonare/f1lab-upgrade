import { useContext } from "react";

import Section from "../Section";
import ContentCard from "../ContentCard";
import PrimaryButton from "../PrimaryButton";
import SectionTitle from "../SectionTitle";

import { GlobalContext } from "../GlobalContext";

const Offers = () => {
  const { screen } = useContext(GlobalContext);

  //Computing screen flags for shorter syntax
  const screenMd = screen == "md";
  const screenSm = screen == "sm";

  return (
    <Section rowsAmount={3} inverseColor={true}>
      <SectionTitle
        row={1}
        col={2}
        width={screenMd || screenSm ? 2 : 3}
        inverseColor={true}
      >
        Что мы предлагаем?
      </SectionTitle>
      <ContentCard
        row={2}
        col={screenMd || screenSm ? 1 : 2}
        width={screenMd || screenSm ? 2 : 1}
        iconPath="audit/audit-offer-icon1.svg"
        inverseColor={true}
      >
        Исчерпывающую информацию для принятия управленческих решений
      </ContentCard>
      <ContentCard
        row={2}
        col={screenMd || screenSm ? 3 : 4}
        width={screenMd || screenSm ? 2 : 1}
        iconPath="audit/audit-offer-icon2.svg"
        inverseColor={true}
      >
        Располагаем ресурсами и компетенциями для решения выявленных проблем
      </ContentCard>
      <ContentCard
        row={3}
        col={3}
        width={screenMd || screenSm ? 2 : 1}
        iconPath="audit/audit-offer-icon3.svg"
        inverseColor={true}
      >
        Только понятные, полезные и применимые рекомендации исходя из целей и
        ограничений бизнеса
      </ContentCard>
      <PrimaryButton
        type="light"
        col={screenMd || screenSm ? 1 : 2}
        row={4}
        width={screenMd || screenSm ? 5 : 1}
      >
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
