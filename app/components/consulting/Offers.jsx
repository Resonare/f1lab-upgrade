import Section from "../Section";
import ContentCard from "../ContentCard";
import PrimaryButton from "../buttons/PrimaryButton";
import SectionTitle from "../SectionTitle";

const OFFERS_DATA = [
  {
    descriptionText:
      "Исчерпывающую информацию для принятия управленческих решений",
    iconPath: "consulting/consulting-offer-icon1.svg",
    row: 2,
    col: 2,
  },
  {
    descriptionText:
      "Располагаем ресурсами и компетенциями для решения выявленных проблем",
    iconPath: "consulting/consulting-offer-icon2.svg",
    row: 2,
    col: 4,
  },
  {
    descriptionText:
      "Только понятные, полезные и применимые рекомендации исходя из целей и ограничений бизнеса",
    iconPath: "consulting/consulting-offer-icon3.svg",
    row: 3,
    col: 3,
  },
];

const Offers = () => {
  return (
    <Section rowsAmount={3} inverseColor={true}>
      <SectionTitle row={1} col={2} width={3} inverseColor={true}>
        Что мы предлагаем?
      </SectionTitle>
      {OFFERS_DATA.map((card, index) => (
        <ContentCard
          key={index}
          row={card.row}
          col={card.col}
          iconPath={card.iconPath}
          inverseColor={true}
        >
          {card.descriptionText}
        </ContentCard>
      ))}
      <PrimaryButton col={2} row={4} type="light">
        Консультация
      </PrimaryButton>
    </Section>
  );
};

export default Offers;
