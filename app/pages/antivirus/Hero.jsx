import { useContext } from "react";

import useModalStore from "../../store/modal";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import ContentCard from "../../components/cards/ContentCard";
import SchemaCanvas from "../../components/heroSchema/SchemaCanvas";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";

import { ThemeContext } from "../../store/theme-context";
import { LazyImage } from "../../components/LazyImage";

const Hero = () => {
  const themeContext = useContext(ThemeContext);
  const { showCallMeBackModal } = useModalStore();

  return (
    <Section hero={true}>
      <SectionTitle
        className="inline-block xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px] sm:leading-[60px]"
        col="col-start-1 col-end-3"
      >
        <span className="sm:mr-15 mr-10">Антивирусная защита</span>
        <LazyImage
          className="inline-block xl:h-30 lg:h-[25px] sm:h-30 h-15 sm:mr-15 mr-10"
          src="/images/antivirus/pro32.png"
        />
        для вашего бизнеса
      </SectionTitle>

      <ContentCard
        className="sm:border-y max-sm:px-0 max-sm:bg-[transparent]"
        row="row-start-3"
        col="col-start-2 max-md:col-start-3 max-sm:col-start-1 max-md:col-end-5"
        bg={themeContext.bgColor}
      >
        В современном цифровом мире защита корпоративных данных и
        IT-инфраструктуры является критически важной задачей. Компания F1 Lab
        предлагает надежное решение — антивирус PRO32, разработанный специально
        для малого и среднего бизнеса.
      </ContentCard>

      <div className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end">
        <div className="grid grid-rows-2 grid-cols-2 w-full h-full">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="lg:border-t lg:border-l lg:border-dashed lg:rounded-tl-2xl"></div>
        </div>
      </div>

      <div className="md:row-start-4 col-start-1 col-end-5 lg:col-end-2 flex max-sm:flex-col max-sm:gap-15 justify-between lg:mt-0 sm:mt-60 mt-30">
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
          {/* <ShoppingCart
            className="max-sm:w-90 border-y max-sm:border-l p-15 lg:h-full h-fit lg:hidden"
            addHandler={dummyAddToCartHandler}
          /> */}
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
      <div className="row-start-4 max-lg:mt-60 col-start-2 col-end-5 lg:col-end-2 max-lg:hidden">
        <div className="h-full flex">
          {/* <ShoppingCart
            className="border-x border-b p-15"
            addHandler={dummyAddToCartHandler}
          /> */}
        </div>
      </div>

      <div className="flex justify-center lg:row-start-1 md:row-start-2 row-start-4 lg:row-end-5 md:row-end-4 md-row-end-5 lg:col-start-3 md:col-start-3 col-start-1 lg:col-end-5 col-end-5">
        <LazyImage src="/images/antivirus/hero-banner.svg" />
      </div>
    </Section>
  );
};

export default Hero;
