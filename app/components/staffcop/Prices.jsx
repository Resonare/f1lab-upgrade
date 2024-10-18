import { useContext } from "react";

import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import PriceCard from "../cards/PriceCard";
import Carousel from "../misc/Carousel";

import { ThemeContext } from "../../store/theme-context";

const Prices = () => {
  const { bgColor } = useContext(ThemeContext);

  const plansData = [
    {
      title: "тариф",
      price: "«Бессрочный»",
      annualPrice: "",
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
      price: "«Стандарт»",
      annualPrice: "",
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
      price: "«Pro»",
      annualPrice: "",
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
      price: "«ФСТЭК»",
      annualPrice: "",
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
    <Section id="prices">
      <div
        className={`${bgColor} [&>div]:basis-4/12 border-y border-x border-dashed flex col-start-1 col-end-5 row-start-1`}
      >
        <SectionTitle className="basis-4/12">
          Лицензии под любые задачи
        </SectionTitle>

        <PriceCard
          className="border-l ml-[-1px]"
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
        className={`${bgColor} [&>div]:basis-4/12 border-b border-x border-dashed flex justify-start col-start-1 col-end-5 row-start-2`}
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
    </Section>
  );
};

export default Prices;
