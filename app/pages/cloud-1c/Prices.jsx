import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCard";
import Carousel from "../../components/misc/Carousel";

const Prices = () => {
  const plansData = [
    {
      title: "Облако S",
      name: null,
      price: 19000,
      annualPrice: 15200,
      mainConditions: "До 10 пользователей",
      mainConditionIcons: ["desktop-icon.svg"],
      conditions: [
        "Файловые базы данных",
        "Централизованное управление пользователями",
        "Безопасное подключение",
        "Фиксированный ip-адрес",
        "Ежедневные резервные копии",
      ],
      description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
    },
    {
      title: "Облако M",
      name: null,
      price: 39000,
      annualPrice: 31200,
      mainConditions: "До 50 пользователей",
      mainConditionIcons: ["desktop-icon.svg"],
      conditions: [
        "Базы данных Postgres",
        "Централизованное управление пользователями",
        "Безопасное подключение",
        "Фиксированный ip-адрес",
        "Ежедневные резервные копии",
        "Почасовые резервные копии",
      ],
      description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
    },
    {
      title: "Облако L",
      name: null,
      price: 69000,
      annualPrice: 55200,
      mainConditions: "До 100 пользователей",
      mainConditionIcons: ["desktop-icon.svg"],
      conditions: [
        "Базы данных Postgres",
        "Централизованное управление пользователями",
        "Безопасное подключение",
        "Фиксированный ip-адрес",
        "Ежедневные резервные копии",
        "Почасовые резервные копии",
      ],
      description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
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
            className="border-r"
            row="row-start-1"
            col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
            plan={plansData[0]}
          >
            {plansData[0].description}
          </PriceCard>

          <PriceCard
            className="border-r"
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
            plan={plansData[1]}
          >
            {plansData[1].description}
          </PriceCard>

          <PriceCard
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
