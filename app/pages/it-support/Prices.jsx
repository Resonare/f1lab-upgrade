import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCard";
import Carousel from "../../components/misc/Carousel";

const Prices = () => {
  const plansData = [
    {
      title: "Техподдержка S",
      price: 25000,
      annualPrice: 20000,
      mainCondition: ["24 часа"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Поддержка рабочих мест пользователей",
        "Поддержка серверного оборудования",
        "Управление локальной сетью",
        "Управление электронной почтой",
        "Взаимодействие с провайдерами услуг",
      ],
      description:
        "Подходит для компаний с небольшой ИТ-инфраструктурой и минимальным количеством обращений в месяц. Основной акцент — поддержка рабочих мест, устранение мелких проблем, базовое администрирование серверов и сетей.",
    },
    {
      title: "Техподдержка M",
      price: 45000,
      annualPrice: 36000,
      mainCondition: ["48 часов"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Поддержка рабочих мест пользователей",
        "Поддержка серверного оборудования",
        "Управление локальной сетью",
        "Управление электронной почтой",
        "Взаимодействие с провайдерами услуг",
      ],
      description:
        "Идеален для компаний, где ИТ-инфраструктура активно используется, требуется регулярная поддержка пользователей, работа с серверами и сетями. Подходит для организаций со средним количеством обращений в месяц.",
    },
    {
      title: "Техподдержка L",
      price: 58000,
      annualPrice: 46400,
      mainCondition: ["72 часа"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Поддержка рабочих мест пользователей",
        "Поддержка серверного оборудования",
        "Управление локальной сетью",
        "Управление электронной почтой",
        "Взаимодействие с провайдерами услуг",
      ],
      description:
        "Подходит для компаний, где ИТ-инфраструктура играет критическую роль для функционирования организации, с большим объемом запросов, постоянным взаимодействием с ИТ-специалистами, высокой нагрузкой на серверы, сеть и пользователей.",
    },
  ];
  return (
    <>
      <Section className="max-sm:hidden" id="prices">
        <SectionTitle
          row="row-start-1"
          col="col-start-1 lg:col-end-2 col-end-3"
        >
          Понятные цены
        </SectionTitle>

        <PriceCard
          className="border-y"
          row="row-start-1"
          col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
          plan={plansData[0]}
        >
          {plansData[0].description}
        </PriceCard>

        <PriceCard
          className="border-y"
          row="lg:row-start-1 row-start-2"
          col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
          plan={plansData[1]}
        >
          {plansData[1].description}
        </PriceCard>

        <PriceCard
          className="border-y"
          row="lg:row-start-1 row-start-2"
          col="lg:col-start-4 col-start-3 lg:col-end-5 col-end-5"
          plan={plansData[2]}
        >
          {plansData[2].description}
        </PriceCard>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

        <Carousel>
          <PriceCard
            className="border-r border-b"
            row="row-start-1"
            col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
            plan={plansData[0]}
          >
            {plansData[0].description}
          </PriceCard>

          <PriceCard
            className="border-r border-b"
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
            plan={plansData[1]}
          >
            {plansData[1].description}
          </PriceCard>

          <PriceCard
            className="border-b"
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-4 col-start-3 lg:col-end-5 col-end-5"
            plan={plansData[2]}
          >
            {plansData[2].description}
          </PriceCard>
        </Carousel>
      </div>
    </>
  );
};

export default Prices;
