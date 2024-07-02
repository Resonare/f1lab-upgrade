import Section from "../Section";

const OFFERS_DATA = [
  {
    descriptionText:
      "Исчерпывающую информацию для принятия управленческих решений",
    iconName: "consulting-offer-icon1.svg",
    position: 1,
  },
  {
    descriptionText:
      "Располагаем ресурсами и компетенциями для решения выявленных проблем",
    iconName: "consulting-offer-icon2.svg",
    position: 3,
  },
  {
    descriptionText:
      "Только понятные, полезные и применимые рекомендации исходя из целей и ограничений бизнеса",
    iconName: "consulting-offer-icon3.svg",
    position: 6,
  },
  {
    button: true,
    text: "Консультация",
    position: 9,
  }
];

const Offers = () => {
  return (
    <Section
      cardsData={OFFERS_DATA}
      sectionTitle={"Что мы предлагаем?"}
      inverseColor={true}
      titleShifted={true}
    />
  );
};

export default Offers;
