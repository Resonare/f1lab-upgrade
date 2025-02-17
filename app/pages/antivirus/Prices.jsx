import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCardNew";
import Carousel from "../../components/misc/Carousel";

const PLANS_DATA = [
  {
    title: "Базовая защита",
    price: 498,
    min: 5,
    max: 20,
    step: 5,
    maxOnRequest: false,
    canInput: false,
    breakpoints: [
      { number: 10, discount: -0.0021 },
      { number: 15, discount: 0.0106 },
      { number: 20, discount: 0.007 },
    ],
    mainCondition: "Лицензия на 12 месяцев",
    mainConditionIcon: "list-locked.svg",
    conditions: [
      {
        title: "Защита от вирусов, шпионского ПО и фишинговых атак",
        enabled: true,
      },
      {
        title: "Защита от руткитов и программ-вымогателей",
        enabled: true,
      },
      {
        title: "Защита доступа в интернет",
        enabled: true,
      },
      {
        title: "Защита электронной почты",
        enabled: true,
      },
      {
        title: "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
        enabled: true,
      },
      {
        title: "Защита USB-устройств",
        enabled: true,
      },
      {
        title: "Веб-консоль централизованного управления",
        enabled: false,
      },
      {
        title: "Интеграция с SIEM",
        enabled: false,
      },
      {
        title: "Контроль приложений",
        enabled: false,
      },
      {
        title: "Контроль USB-устройств",
        enabled: false,
      },
      {
        title: "Веб-фильтры (блокировка сайтов/фильтрация по категориям)",
        enabled: false,
      },
    ],
  },
  {
    title: "Стандартная защита",
    price: 2374,
    min: 5,
    max: 200,
    step: 1,
    maxOnRequest: true,
    canInput: true,
    breakpoints: [
      { number: 11, discount: 0.15542 },
      { number: 26, discount: 0.28475 },
      { number: 50, discount: 0.328559 },
      { number: 100, discount: 0.333612 },
    ],
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      {
        title: "Защита от вирусов, шпионского ПО и фишинговых атак",
        enabled: true,
      },
      {
        title: "Защита от руткитов и программ-вымогателей",
        enabled: true,
      },
      {
        title: "Защита доступа в интернет",
        enabled: true,
      },
      {
        title: "Защита электронной почты",
        enabled: true,
      },
      {
        title: "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
        enabled: true,
      },
      {
        title: "Защита USB-устройств",
        enabled: true,
      },
      {
        title: "Веб-консоль централизованного управления",
        enabled: true,
      },
      {
        title: "Интеграция с SIEM",
        enabled: true,
      },
      {
        title: "Контроль приложений",
        enabled: false,
      },
      {
        title: "Контроль USB-устройств",
        enabled: false,
      },
      {
        title: "Веб-фильтры (блокировка сайтов/фильтрация по категориям)",
        enabled: false,
      },
    ],
  },
  {
    title: "Расширенная защита",
    price: 2770,
    min: 5,
    max: 200,
    step: 1,
    maxOnRequest: true,
    canInput: true,
    breakpoints: [
      { number: 11, discount: 0.12887 },
      { number: 26, discount: 0.2498122 },
      { number: 50, discount: 0.25884112 },
      { number: 100, discount: 0.273285 },
    ],
    termCondition: "Лицензия на 12 месяцев",
    conditions: [
      {
        title: "Защита от вирусов, шпионского ПО и фишинговых атак",
        enabled: true,
      },
      {
        title: "Защита от руткитов и программ-вымогателей",
        enabled: true,
      },
      {
        title: "Защита доступа в интернет",
        enabled: true,
      },
      {
        title: "Защита электронной почты",
        enabled: true,
      },
      {
        title: "Интеллектуальный брандмауэр со встроенными функциями HIDS/HIPS",
        enabled: true,
      },
      {
        title: "Защита USB-устройств",
        enabled: true,
      },
      {
        title: "Веб-консоль централизованного управления",
        enabled: true,
      },
      {
        title: "Интеграция с SIEM",
        enabled: true,
      },
      {
        title: "Контроль приложений",
        enabled: true,
      },
      {
        title: "Контроль USB-устройств",
        enabled: true,
      },
      {
        title: "Веб-фильтры (блокировка сайтов/фильтрация по категориям)",
        enabled: true,
      },
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
