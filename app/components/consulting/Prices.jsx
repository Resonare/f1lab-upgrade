import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import PriceCard from "../cards/PriceCard";
import Condition from "../misc/Condition";
import Carousel from "../misc/Carousel";

const Cases = () => {
  return (
    <>
      <Section className="max-sm:hidden" id="" rowsAmount={4}>
        <SectionTitle
          row="row-start-1"
          col="col-start-1 lg:col-end-2 col-end-3"
        >
          Понятные цены
        </SectionTitle>

        <PriceCard
          row="row-start-1"
          col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
          title="Аудит S"
          price="7 200 ₽"
          mainCondition="1-5 рабочих мест"
          mainConditionIcon="desktop-icon.svg"
          conditions={[
            "12 часов удаленной поддержки",
            "2 экстренных выезда",
            "2 профилактических выезда",
          ]}
        >
          Идеально подходит для стартапов и компаний с небольшим числом
          сотрудников, которым необходима надежная и доступная поддержка для IT
          инфраструктуры.
        </PriceCard>

        <PriceCard
          row="lg:row-start-1 row-start-2"
          col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
          title="Аудит S"
          price="7 200 ₽"
          mainCondition="1-5 рабочих мест"
          mainConditionIcon="desktop-icon.svg"
          conditions={[
            "12 часов удаленной поддержки",
            "2 экстренных выезда",
            "2 профилактических выезда",
          ]}
        >
          Идеально подходит для стартапов и компаний с небольшим числом
          сотрудников, которым необходима надежная и доступная поддержка для IT
          инфраструктуры.
        </PriceCard>

        <PriceCard
          row="lg:row-start-1 row-start-2"
          col="lg:col-start-4 col-start-3 lg:col-end-5 col-end-5"
          title="Аудит S"
          price="7 200 ₽"
          mainCondition="1-5 рабочих мест"
          mainConditionIcon="desktop-icon.svg"
          conditions={[
            "12 часов удаленной поддержки",
            "2 экстренных выезда",
            "2 профилактических выезда",
          ]}
        >
          Идеально подходит для стартапов и компаний с небольшим числом
          сотрудников, которым необходима надежная и доступная поддержка для IT
          инфраструктуры.
        </PriceCard>
      </Section>

      <div className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

        <Carousel className="border-x">
          <PriceCard
            row="row-start-1"
            col="lg:col-start-2 col-start-3 lg:col-end-3 col-end-5"
            title="Аудит S"
            price="7 200 ₽"
            mainCondition="1-5 рабочих мест"
            mainConditionIcon="desktop-icon.svg"
            conditions={[
              "12 часов удаленной поддержки",
              "2 экстренных выезда",
              "2 профилактических выезда",
            ]}
            className="border-r"
          >
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </PriceCard>

          <PriceCard
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-3 col-start-1 lg:col-end-4 col-end-3"
            title="Аудит S"
            price="7 200 ₽"
            mainCondition="1-5 рабочих мест"
            mainConditionIcon="desktop-icon.svg"
            conditions={[
              "12 часов удаленной поддержки",
              "2 экстренных выезда",
              "2 профилактических выезда",
            ]}
            className="border-r"
          >
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </PriceCard>

          <PriceCard
            row="lg:row-start-1 row-start-2"
            col="lg:col-start-4 col-start-3 lg:col-end-5 col-end-5"
            title="Аудит S"
            price="7 200 ₽"
            mainCondition="1-5 рабочих мест"
            mainConditionIcon="desktop-icon.svg"
            conditions={[
              "12 часов удаленной поддержки",
              "2 экстренных выезда",
              "2 профилактических выезда",
            ]}
          >
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </PriceCard>
        </Carousel>
      </div>
    </>
  );
};

export default Cases;
