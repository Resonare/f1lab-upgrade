import Section from "../Section";
import SectionTitle from "../SectionTitle";
import PriceCard from "../cards/PriceCard";
import Condition from "../misc/Condition";

const Cases = () => {
  return (
    <div id="">
      <Section rowsAmount={4}>
        <SectionTitle row="row-start-1" col="col-start-1">
          Понятные цены
        </SectionTitle>

        <PriceCard
          row="row-start-1"
          col="col-start-2"
          title="Аудит S"
          price="7 200 ₽"
        >
          <p className="text-gray-300 text-lg font-text leading-snug">
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </p>
          <Condition
            className="text-gray-400 text-2xl font-subtitle leading-[29px]"
            icon="desktop-icon.svg"
          >
            1-5 рабочих мест
          </Condition>
          <div className="flex flex-col gap-15">
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              12 часов удаленной поддержки
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 экстренных выезда
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 профилактических выезда
            </Condition>
          </div>
        </PriceCard>

        <PriceCard
          row="row-start-1"
          col="col-start-3"
          title="Аудит S"
          price="7 200 ₽"
        >
          <p className="text-gray-300 text-lg font-text leading-snug">
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </p>
          <Condition
            className="text-gray-400 text-2xl font-subtitle leading-[29px]"
            icon="desktop-icon.svg"
          >
            1-5 рабочих мест
          </Condition>
          <div className="flex flex-col gap-15">
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              12 часов удаленной поддержки
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 экстренных выезда
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 профилактических выезда
            </Condition>
          </div>
        </PriceCard>

        <PriceCard
          row="row-start-1"
          col="col-start-4"
          title="Аудит S"
          price="7 200 ₽"
        >
          <p className="text-gray-300 text-lg font-text leading-snug">
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </p>
          <Condition
            className="text-gray-400 text-2xl font-subtitle leading-[29px]"
            icon="desktop-icon.svg"
          >
            1-5 рабочих мест
          </Condition>
          <div className="flex flex-col gap-15">
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              12 часов удаленной поддержки
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 экстренных выезда
            </Condition>
            <Condition
              className="text-gray-400 text-xl font-light font-text leading-relaxed"
              icon="add-circle-icon.svg"
            >
              2 профилактических выезда
            </Condition>
          </div>
        </PriceCard>
      </Section>
    </div>
  );
};

export default Cases;
