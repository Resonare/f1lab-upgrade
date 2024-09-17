import { useState } from "react";

import ArrowConnect from "../misc/ArrowConnect";
import SecondaryButton from "../buttons/SecondaryButton";
import NumberInput from "../misc/NumberInput";

const Connection = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  return (
    <div
      className={`${
        !opened
          ? `hover:top-[calc(100%-45px-10px)] top-[calc(100%-45px)]`
          : `top-full -translate-y-full`
      } bg-gray-400 fixed border-dashed border-l border-t border-gray-200 right-0 overflow-hidden transition-all duration-500`}
    >
      <div
        className={`${
          !opened && `hover:pb-15`
        } group flex justify-between items-center gap-60 cursor-pointer py-5 px-15`}
        onClick={handleOpen}
      >
        <p
          className={`${
            opened ? `text-gray-200` : `text-gray-100`
          } text-base font-expanded font-semibold leading-4 select-none`}
        >
          Подключение специалиста
        </p>
        <ArrowConnect className={`h-[35px] w-[35px]`} opened={opened} />
      </div>

      <div className={`${!opened && ``} flex p-30 flex-col gap-15`}>
        <p className="text-gray-100 w-[370px] text-[22px] font-bold font-extended leading-tight">
          Введите 9 цифр, которые назовет оператор:
        </p>
        <div className="flex gap-10">
          <NumberInput placeholder="000" min="0" max="999" maxLength="3" />
          <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-loose">
            -
          </p>
          <NumberInput placeholder="000" min="0" max="999" maxLength="3" />
          <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-loose">
            -
          </p>
          <NumberInput placeholder="000" min="0" max="999" maxLength="3" />
        </div>
        <p className="w-[370px] text-gray-200 font-text font-light text-base leading-tight">
          После ввода, на ваш компьютер скачается файл, который предоставит
          специалисту доступ к вашей системе для решения задачи
        </p>
        <SecondaryButton variant="light">Предоставить доступ</SecondaryButton>
        <div className="flex justify-end">
          <div className="flex items-center gap-10">
            <p className="uppercase pt-5 text-gray-300 text-sm font-bold font-text leading-[18px] tracking-wide">
              Powered by
            </p>
            <div className="flex items-center pt-[2px]">
              <img src="/images/logo/pro32-logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
