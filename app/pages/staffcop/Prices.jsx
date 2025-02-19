import { useContext } from "react";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PriceCard from "../../components/cards/PriceCard";
import Carousel from "../../components/misc/Carousel";

import { ThemeContext } from "../../store/theme-context";

const Prices = () => {
  const { bgColor } = useContext(ThemeContext);

  const plansData = [
    {
      title: "тариф",
      name: "«Бессрочный»",
      price: null,
      annualPrice: null,
      mainConditions: ["5+ пользователей", "Бессрочная лицензия"],
      mainConditionIcons: ["profile-check.svg", "file-lock.svg"],
      conditions: [
        "Сервер - On-Premise",
        "Техподдержка - 12 месяцев",
        "Доступ к отчетам - бессрочно",
      ],
      buttonTitle: "Рассчитать стоимость",
      description: `Бессрочная лицензия на Staffcop Enterprise последней версии не ограничена сроком. Обновление версий возможно по запросу.`,
    },
    {
      title: "тариф",
      name: "«Стандарт»",
      price: null,
      annualPrice: null,
      mainConditions: ["5+ пользователей", "Лицензия на 3/12/24 месяцев"],
      mainConditionIcons: ["profile-check.svg", "file-lock.svg"],
      conditions: [
        "Сервер - On-Premise",
        "Техподдержка - на весь срок действия лицензии",
        "Доступ к отчетам до окончания лицензии",
      ],
      buttonTitle: "Рассчитать стоимость",
      description: `Стандартная лицензия на Staffcop Enterprise последней версии ограничена сроком использования 3, 12 или 24 месяца.`,
    },
    {
      title: "тариф",
      name: "«Pro»",
      price: null,
      annualPrice: null,
      mainConditions: ["50+ пользователей", "Бессрочная лицензия"],
      mainConditionIcons: ["profile-check.svg", "file-lock.svg"],
      conditions: [
        "Сервер - On-Premise",
        "Техподдержка - 12 месяцев",
        "Доступ к отчетам - бессрочно",
      ],
      buttonTitle: "Рассчитать стоимость",
      description: `Рекомендуется для средних и крупных компаний. Закрывает задачи конкретной компании, возможна кастомизация и интеграция со сторонними системами.`,
    },
    {
      title: "тариф",
      name: "«ФСТЭК»",
      price: null,
      annualPrice: null,
      mainConditions: ["5+ пользователей", "Бессрочная лицензия"],
      mainConditionIcons: ["profile-check.svg", "file-lock.svg"],
      conditions: [
        "Сервер - On-Premise",
        "Техподдержка - 12 месяцев",
        "Доступ к отчетам - бессрочно",
      ],
      buttonTitle: "Рассчитать стоимость",
      description: `Версия Staffcop Enterprise с сертификатом ФСТЭК № 4234 от 15 апреля 2020 года, переоформлен 04 июля 2022г.`,
    },
  ];

  return (
    <>
      <Section id="prices" className="max-sm:hidden">
        <div className="max-lg:hidden col-start-1 col-end-5">
          <div
            className={`${bgColor} [&>div]:basis-4/12 border-y border-x border-dashed flex`}
          >
            <SectionTitle className="basis-4/12">
              Лицензии под любые задачи
            </SectionTitle>

            <PriceCard
              className="border-l"
              plan={plansData[0]}
              buttonTitle={plansData[0].buttonTitle}
            >
              {plansData[0].description}
            </PriceCard>

            <PriceCard
              className="border-l"
              plan={plansData[1]}
              buttonTitle={plansData[1].buttonTitle}
            >
              {plansData[1].description}
            </PriceCard>
          </div>

          <div
            className={`${bgColor} [&>div]:basis-4/12 border-b border-x border-dashed flex justify-start`}
          >
            <PriceCard
              className="border-r"
              plan={plansData[2]}
              buttonTitle={plansData[2].buttonTitle}
            >
              {plansData[2].description}
            </PriceCard>

            <PriceCard
              className="border-r"
              plan={plansData[3]}
              buttonTitle={plansData[3].buttonTitle}
            >
              {plansData[3].description}
            </PriceCard>
          </div>
        </div>

        <div className="grid grid-cols-4 lg:hidden col-start-1 col-end-5">
          <SectionTitle row="row-start-1" col="col-start-1 col-end-3">
            Лицензии под любые задачи
          </SectionTitle>

          <PriceCard
            className="border-y"
            row="row-start-1"
            col="col-start-3 col-end-5"
            plan={plansData[0]}
            buttonTitle={plansData[0].buttonTitle}
          >
            {plansData[0].description}
          </PriceCard>

          <PriceCard
            className="border-y"
            row="row-start-2"
            col="col-start-1 col-end-3"
            plan={plansData[1]}
            buttonTitle={plansData[1].buttonTitle}
          >
            {plansData[1].description}
          </PriceCard>

          <PriceCard
            className="border-y"
            row="row-start-2"
            col="col-start-3 col-end-5"
            plan={plansData[2]}
            buttonTitle={plansData[2].buttonTitle}
          >
            {plansData[2].description}
          </PriceCard>

          <PriceCard
            className="border-r"
            row="row-start-3"
            col="col-start-1 col-end-5"
            plan={plansData[3]}
            buttonTitle={plansData[3].buttonTitle}
          >
            {plansData[3].description}
          </PriceCard>
        </div>
      </Section>

      <div id="prices" className="sm:hidden flex flex-col gap-30 pt-60 px-15">
        <SectionTitle>Понятные цены</SectionTitle>

        <Carousel className="w-full">
          <PriceCard
            className="border-b border-r"
            priceClassName="text-[25px]"
            plan={plansData[0]}
            buttonTitle="Заказать"
          >
            {plansData[0].description}
          </PriceCard>

          <PriceCard
            className="border-b border-r"
            priceClassName="text-[25px]"
            plan={plansData[1]}
            buttonTitle="Заказать"
          >
            {plansData[1].description}
          </PriceCard>

          <PriceCard
            className="border-b border-r"
            priceClassName="text-[25px]"
            plan={plansData[2]}
            buttonTitle="Заказать"
          >
            {plansData[2].description}
          </PriceCard>

          <PriceCard
            className="border-b"
            priceClassName="text-[25px]"
            plan={plansData[3]}
            buttonTitle="Заказать"
          >
            {plansData[3].description}
          </PriceCard>
        </Carousel>
      </div>
    </>
  );
};

export default Prices;
