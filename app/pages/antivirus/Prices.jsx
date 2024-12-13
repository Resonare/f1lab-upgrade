import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCardNew";
import Carousel from "../../components/misc/Carousel";

const ALL_CONDITIONS_DATA = [
  "Защита от вирусов, шпионского ПО и фишинговых атак",
  "Защита от руткитов и программ-вымогателей",
  "Защита доступа в интернет",
  "Защита электронной почты",
  "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
  "Защита USB-устройств",
  "Веб-консоль централизованного управления",
  "Интеграция с SIEM",
  "Контроль приложений",
  "Контроль USB-устройств",
  "Веб-фильтры (блокировка сайтов/фильтрация по категориям)",
];

const PLANS_DATA = [
  {
    title: "Базовая защита",
    price: 2770,
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      "Защита от вирусов, шпионского ПО и фишинговых атак",
      "Защита от руткитов и программ-вымогателей",
      "Защита доступа в интернет",
      "Защита электронной почты",
      "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
      "Защита USB-устройств",
    ],
  },
  {
    title: "Стандартная защита",
    price: 2770,
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      "Защита от вирусов, шпионского ПО и фишинговых атак",
      "Защита от руткитов и программ-вымогателей",
      "Защита доступа в интернет",
      "Защита электронной почты",
      "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
      "Защита USB-устройств",
      "Веб-консоль централизованного управления",
      "Интеграция с SIEM",
    ],
  },
  {
    title: "Расширенная защита",
    price: 2770,
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      "Защита от вирусов, шпионского ПО и фишинговых атак",
      "Защита от руткитов и программ-вымогателей",
      "Защита доступа в интернет",
      "Защита электронной почты",
      "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
      "Защита USB-устройств",
      "Веб-консоль централизованного управления",
      "Интеграция с SIEM",
      "Контроль приложений",
      "Контроль USB-устройств",
      "Веб-фильтры (блокировка сайтов/фильтрация по категориям)",
    ],
  },
];

const Prices = () => {
  return (
    <>
      <Section className="max-sm:hidden" id="prices">
        <SectionTitle
          className="text-center"
          row="row-start-1"
          col="col-start-1 col-end-5"
        >
          Лицензии PRO32 Office Security под любые задачи
        </SectionTitle>

        <div className="col-start-1 col-end-5 flex lg:flex-row flex-col">
          {PLANS_DATA.map((planData, index) => (
            <PriceCard
              key={index}
              className={`${
                index != PLANS_DATA.length - 1 && `border-r`
              } border-y lg:w-1/3`}
              plan={planData}
              allConditions={ALL_CONDITIONS_DATA}
            >
              {planData.description}
            </PriceCard>
          ))}
        </div>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>
          Лицензии PRO32 Office Security под любые задачи
        </SectionTitle>

        <Carousel>
          {PLANS_DATA.map((planData, index) => (
            <PriceCard
              key={index}
              className={`${
                index != PLANS_DATA.length - 1 && `border-r`
              } border-b`}
              plan={planData}
              allConditions={ALL_CONDITIONS_DATA}
            >
              {planData.description}
            </PriceCard>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Prices;
