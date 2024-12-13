import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCard";
import Carousel from "../../components/misc/Carousel";

const PLANS_DATA = [
  {
    title: "Аудит S",
    price: 7200,
    mainCondition: "1-5 рабочих мест",
    mainConditionIcon: "desktop-icon.svg",
    description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
    conditions: [
      {
        title: "12 часов удаленной поддержки",
        enabled: true,
      },
      {
        title: "2 экстренных выезда",
        enabled: true,
      },
      {
        title: "2 профилактических выезда",
        enabled: true,
      },
    ],
  },
  {
    title: "Аудит M",
    price: 7200,
    mainCondition: "1-5 рабочих мест",
    mainConditionIcon: "desktop-icon.svg",
    description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
    conditions: [
      {
        title: "12 часов удаленной поддержки",
        enabled: true,
      },
      {
        title: "2 экстренных выезда",
        enabled: true,
      },
      {
        title: "2 профилактических выезда",
        enabled: true,
      },
    ],
  },
  {
    title: "Аудит L",
    price: 7200,
    mainCondition: "1-5 рабочих мест",
    mainConditionIcon: "desktop-icon.svg",
    description: `Идеально подходит для стартапов и компаний с
        небольшим числом сотрудников, которым необходима
        надежная и доступная поддержка для IT инфраструктуры.`,
    conditions: [
      {
        title: "12 часов удаленной поддержки",
        enabled: true,
      },
      {
        title: "2 экстренных выезда",
        enabled: true,
      },
      {
        title: "2 профилактических выезда",
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
          row="row-start-1"
          col="col-start-1 lg:col-end-2 col-end-3"
        >
          Понятные цены
        </SectionTitle>

        {PLANS_DATA.map((planData, index) => (
          <PriceCard
            key={index}
            className={`border-y`}
            col={`col-start-${index + 2}`}
            plan={planData}
          >
            {planData.description}
          </PriceCard>
        ))}
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

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
