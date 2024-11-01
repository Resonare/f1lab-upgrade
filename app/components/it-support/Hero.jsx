import { useContext } from "react";

import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import SectionTitle from "../SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import ContentCard from "../cards/ContentCard";
import SchemaCanvas from "../heroSchema/SchemaCanvas";
import ShoppingCart from "../shoppingCart/ShoppingCart";

import { ThemeContext } from "../../store/theme-context";

const Hero = () => {
  const themeContext = useContext(ThemeContext);
  const { showCallMeBackModal } = useModalStore();

  const content = {
    header: "Быстрая IT-техподдержка для вашего бизнеса",
    cards: [
      "Круглосуточный мониторинг и поддержка для обеспечения стабильной работы и минимизации времени простоя",
    ],
  };

  const dummyAddToCartHandler = () => {};

  return (
    <Section hero={true}>
      <SectionTitle
        className="xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px]"
        col="col-start-1 lg:col-end-3 col-end-5"
      >
        {content.header}
      </SectionTitle>

      <ContentCard
        className="sm:border-y max-sm:px-0 max-sm:bg-[transparent]"
        row="row-start-3"
        col="col-start-2 max-md:col-start-3 max-sm:col-start-1 max-md:col-end-5"
        bg={themeContext.bgColor}
      >
        {content.cards[0]}
      </ContentCard>

      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="lg:border-t lg:border-l lg:border-dashed lg:rounded-tl-2xl"></div>
        </div>
      </div>

      <div className="md:row-start-4 row-start-5 col-start-1 col-end-5 lg:col-end-2 flex max-sm:flex-col max-sm:gap-15 justify-between lg:mt-0 sm:mt-60 mt-30">
        <PrimaryButton
          className="h-full max-lg:grow max-sm:hidden"
          type="accent"
          fullHeight="true"
          onClick={showCallMeBackModal}
        >
          Консультация
        </PrimaryButton>

        <div className="flex justify-between items-start">
          <div className="sm:hidden flex flex-col justify-between items-start">
            <div className="text-sm font-text font-normal">
              Средняя стоимость аудита
            </div>
            <div className="font-extended font-bold text-[26px] leading-[30px]">
              100 000 ₽
            </div>
          </div>
        </div>

        <PrimaryButton
          className="h-full max-lg:grow sm:hidden"
          type="dark"
          fullHeight="true"
          onClick={showCallMeBackModal}
        >
          Консультация
        </PrimaryButton>
      </div>

      <div className="lg:row-start-1 md:row-start-2 row-start-4 lg:row-end-5 md:row-end-4 md-row-end-5 lg:col-start-3 md:col-start-3 col-start-1 lg:col-end-5 col-end-5">
        <SchemaCanvas />
      </div>
    </Section>
  );
};

export default Hero;
