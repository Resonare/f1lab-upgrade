import { useContext } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import ContentCard from "../cards/ContentCard";
import SchemaCanvas from "./SchemaCanvas";
import ShoppingCart from "../shoppingCart/ShoppingCart";

import { ThemeContext } from '../../store/theme-context';

const Hero = () => {
  const themeContext = useContext(ThemeContext);

  const content = {
    header: 'ИТ‑аудит с применимыми рекомендациями',
    cards: [
      'Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего бизнеса и не создает ненужных рисков?',
      'ИТ-аудит предоставит полный отчёт о состоянии и отказоустойчивости вашей ИТ-среды.',
    ],
  };
  const dummyAddToCartHandler = () => {};

  return (
    <div className='grid grid-cols-4 py-180 xl:px-120 lg:px-60 px-[44.1px]'>
      <div className='row-start-1 row-end-2 col-start-1 col-end-3 text-gray-400 text-[56px] xl:text-[56px] lg:text-[44px] font-title leading-[60px] pb-60 max-md:col-end-5 '>
        {content.header}
      </div>
      <ContentCard
        row='row-start-2'
        col='col-start-1 max-md:col-end-3'
        bg={themeContext.bgColor}
      >
        {content.cards[0]}
      </ContentCard>
      <div className='row-start-2 row-end-3 col-start-2 col-end-3 flex items-end overflow-auto'>
        <div className='grid grid-rows-2 grid-cols-2 w-full h-full'>
          <div className=''></div>
          <div className=''></div>
          <div className='lg:border-t lg:border-r lg:border-dashed lg:rounded-tr-2xl'></div>
          <div className=''></div>
        </div>
      </div>
      <ContentCard
        row='row-start-3'
        col='col-start-2 max-md:col-start-3 max-md:col-end-5'
        bg={themeContext.bgColor}
      >
        {content.cards[1]}
      </ContentCard>
      <div className='row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end'>
        <div className='grid grid-rows-2 grid-cols-2 w-full h-full'>
          <div className=''></div>
          <div className='lg:border-b lg:border-l lg:border-dashed lg:rounded-bl-2xl'></div>
          <div className=''></div>
          <div className=''></div>
        </div>
      </div>
      <div className="h-full row-start-4 max-lg:mt-60 col-start-1 col-end-5 lg:col-end-2">
        <PrimaryButton className="h-full" type="accent" row="row-start-4" col="col-start-1">
          Консультация
        </PrimaryButton>
      </div>
      <div className="row-start-4 max-lg:mt-60 col-start-2 col-end-5 lg:col-end-2">
        <div className="h-full flex">
          <ShoppingCart
            className="border-x border-b p-15"
            addHandler={dummyAddToCartHandler}
          />
        </div>
      </div>
      <div className="row-start-2 row-end-4 col-start-3 col-end-5 lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-5 max-md:hidden h-[calc(100svh-290px)] max-lg:h-[34svh]">
        <SchemaCanvas />
      </div>
    </div>
  );
};

export default Hero;
