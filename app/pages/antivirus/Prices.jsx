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
    price: "13 850 ₽",
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
    price: "13 850 ₽",
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      "12 часов удаленной поддержки",
      "2 экстренных выезда",
      "2 профилактических выезда",
    ],
  },
  {
    title: "Расширенная защита",
    price: "13 850 ₽",
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      "12 часов удаленной поддержки",
      "2 экстренных выезда",
      "2 профилактических выезда",
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

        <div className="col-start-1 col-end-5 flex">
          <PriceCard
            className="border-y border-r w-1/3"
            plan={PLANS_DATA[0]}
            allConditions={ALL_CONDITIONS_DATA}
          >
            {PLANS_DATA[0].description}
          </PriceCard>

          <PriceCard
            className="border-y border-r w-1/3"
            plan={PLANS_DATA[1]}
            allConditions={ALL_CONDITIONS_DATA}
          >
            {PLANS_DATA[1].description}
          </PriceCard>

          <PriceCard
            className="border-y w-1/3"
            plan={PLANS_DATA[2]}
            allConditions={ALL_CONDITIONS_DATA}
          >
            {PLANS_DATA[2].description}
          </PriceCard>
        </div>
      </Section>

      {/* <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

        <Carousel>
          <PriceCard
            className="border-r"
            row="row-start-1"
            col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
            plan={PLANS_DATA[0]}
          >
            {PLANS_DATA[0].description}
          </PriceCard>

          <PriceCard
            className="border-r"
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
            plan={PLANS_DATA[1]}
          >
            {PLANS_DATA[1].description}
          </PriceCard>

          <PriceCard
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-4 col-start-3 lg:col-end-5 col-end-5"
            plan={PLANS_DATA[2]}
          >
            {PLANS_DATA[2].description}
          </PriceCard>
        </Carousel>
      </div> */}
    </>
  );
};

export default Prices;
