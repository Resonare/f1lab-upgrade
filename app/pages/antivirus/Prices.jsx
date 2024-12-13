import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCardNew";
import Carousel from "../../components/misc/Carousel";

const PLANS_DATA = [
  {
    title: "Базовая защита",
    price: 2770,
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
    price: 2770,
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
