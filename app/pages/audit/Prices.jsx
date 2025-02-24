import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCard";
import Carousel from "../../components/misc/Carousel";
import IndividualOfferCard from "../../components/cards/IndividualOfferCard";

const Prices = () => {
  const plansData = [
    {
      title: "Аудит S",
      name: "от 30 000 ₽",
      price: null,
      annualPrice: null,
      mainCondition: ["До 10 единиц"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Анализ оборудования",
        "Рекомендации по оптимизации",
        "Подробный отчет",
      ],
      description:
        "Проверка требований. Для компаний, которые планируют внедрение нового программного обеспечения или оборудования. Проверка серверов, сетевого оборудования, виртуальных машин и выборочных рабочих мест.",
    },
    {
      title: "Аудит M",
      name: "от 50 000 ₽",
      price: null,
      annualPrice: null,
      mainCondition: ["До 20 единиц"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Анализ оборудования",
        "Диагностика отказоустойчивости",
        "Безопасность инфраструктуры",
        "Рекомендации по оптимизации",
        "Подробный отчет",
      ],
      description:
        "Комплексный аудит. Для компаний, которым нужен детальный обзор текущей инфраструктуры и рекомендации по улучшению. Проверка серверов, сетевого оборудования, виртуальных машин.",
    },
    {
      title: "Аудит L",
      name: "от 90 000 ₽",
      price: null,
      annualPrice: null,
      mainCondition: ["До 50 единиц"],
      mainConditionIcon: ["desktop-icon.svg"],
      conditions: [
        "Анализ оборудования",
        "Диагностика отказоустойчивости",
        "Безопасность инфраструктуры",
        "Инвентаризация рабочих мест",
        "Рекомендации по оптимизации",
        "Подробный отчет",
      ],
      description:
        "Комплексный аудит + инвентаризация. Для компаний, которым нужен глубокий анализ и подробная инвентаризация. Проверка серверов, сетевого оборудования, виртуальных машин и рабочих мест.",
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

        {plansData.map((planData, index) => (
          <PriceCard
            key={index}
            className={`border-y`}
            col={`col-start-${index + 2}`}
            plan={planData}
          >
            {planData.description}
          </PriceCard>
        ))}

        <IndividualOfferCard />
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

        <Carousel>
          {plansData.map((planData, index) => (
            <PriceCard
              key={index}
              className={`${
                index != plansData.length - 1 && `border-r`
              } border-b`}
              plan={planData}
            >
              {planData.description}
            </PriceCard>
          ))}
        </Carousel>

        <IndividualOfferCard />
      </div>
    </>
  );
};

export default Prices;
