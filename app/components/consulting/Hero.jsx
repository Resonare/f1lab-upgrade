import { useContext } from "react";

import Section from "../../layout/Section";
import PrimaryButton from "../buttons/PrimaryButton";
import ContentCard from "../cards/ContentCard";
import SchemaCanvas from "./SchemaCanvas";
import ShoppingCart from "../shoppingCart/ShoppingCart";

import { ThemeContext } from "../../store/theme-context";

const Hero = ({}) => {
  const themeContext = useContext(ThemeContext);

  const content = {
    header: "ИТ‑аудит с применимыми рекомендациями",
    cards: [
      "Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего бизнеса и не создает ненужных рисков?",
      "ИТ-аудит предоставит полный отчёт о состоянии и отказоустойчивости вашей ИТ-среды.",
    ],
  };

  const dummyAddToCartHandler = () => {};

  return (
    <div className="grid grid-cols-4 sm:pt-100 pt-15 lg:mt-90 mt-[70px] xl:px-120 lg:px-60 sm:px-[44.1px] px-15">
      <div className="row-start-1 row-end-2 col-start-1 col-end-3 text-gray-400 sm:text-[56px] text-[28px] xl:text-[56px] lg:text-[44px] font-title sm:leading-[60px] leading-[30px] sm:pb-60 pb-30 max-md:col-end-5 ">
        {content.header}
      </div>
      <ContentCard
        row="row-start-2"
        col="col-start-1 max-md:col-end-3 max-sm:col-end-5"
        bg={themeContext.bgColor}
        transparentOnMobile={true}
        className="max-sm:px-0"
      >
        {content.cards[0]}
      </ContentCard>
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 flex items-end overflow-auto">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className=""></div>
          <div className="lg:border-t lg:border-r lg:border-dashed lg:rounded-tr-2xl"></div>
          <div className=""></div>
        </div>
      </div>
      <ContentCard
        row="row-start-3"
        col="col-start-2 max-md:col-start-3 max-sm:col-start-1 max-md:col-end-5"
        bg={themeContext.bgColor}
        transparentOnMobile={true}
        className="max-sm:px-0"
      >
        {content.cards[1]}
      </ContentCard>
      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className="lg:border-b lg:border-l lg:border-dashed lg:rounded-bl-2xl"></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="md:row-start-4 col-start-1 col-end-5 lg:col-end-2 flex max-sm:flex-col max-sm:gap-15 justify-between max-lg:mt-120 max-md:mt-60 max-sm:mt-30">
        <PrimaryButton
          className="h-full max-lg:grow max-sm:hidden"
          type="accent"
          fullHeight="true"
        >
          Консультация
        </PrimaryButton>

        <div className="flex justify-between items-start">
          <div className="sm:hidden flex flex-col justify-between items-start">
            <div className="text-sm font-text font-normal">
              Средняя стоимость аудита
            </div>
            <div className="font-subtitle text-[26px] leading-[30px]">
              100 000 ₽
            </div>
          </div>
          <ShoppingCart
            className="max-sm:w-90 border-y max-sm:border-l p-15 lg:h-full h-fit lg:hidden"
            addHandler={dummyAddToCartHandler}
          />
        </div>

        <PrimaryButton
          className="h-full max-lg:grow sm:hidden"
          type="dark"
          fullHeight="true"
        >
          Консультация
        </PrimaryButton>
      </div>
      <div className="row-start-4 max-lg:mt-60 col-start-2 col-end-5 lg:col-end-2 max-lg:hidden">
        <div className="h-full flex">
          <ShoppingCart
            className="border-x border-b p-15"
            addHandler={dummyAddToCartHandler}
          />
        </div>
      </div>
      <div className="md:row-start-2 row-start-4 md:row-end-4 md:col-start-3 col-start-1 col-end-5 lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-5 max-md:hidden max-sm:block md:h-[calc(100svh-290px)] max-lg:h-[34svh] max-sm:h-full">
        <SchemaCanvas />
      </div>
    </div>
  );
};

export default Hero;
