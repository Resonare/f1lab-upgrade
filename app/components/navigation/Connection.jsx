import { useState } from "react";

import ArrowConnect from "../misc/svg/ArrowConnect";
import SecondaryButton from "../buttons/SecondaryButton";
import NumberInput from "../misc/NumberInput";

const INITIAL_VALUES = {
  first: "",
  second: "",
  third: "",
};

const INITIAL_ERRORS = {
  first: "",
  second: "",
  third: "",
};

const ERROR_EMPTY_FIELD_MESSAGE = "Заполните поле";

const Connection = () => {
  const [opened, setOpened] = useState(false);

  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  const handleOpen = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const handleConnect = () => {
    setErrors(INITIAL_ERRORS);

    const { first, second, third } = values;

    if (!first)
      setErrors((prevErrors) => ({
        ...prevErrors,
        first: ERROR_EMPTY_FIELD_MESSAGE,
      }));

    if (!second)
      setErrors((prevErrors) => ({
        ...prevErrors,
        second: ERROR_EMPTY_FIELD_MESSAGE,
      }));

    if (!third)
      setErrors((prevErrors) => ({
        ...prevErrors,
        third: ERROR_EMPTY_FIELD_MESSAGE,
      }));

    window.open(`https://go.pro32connect.ru/invite/${first + second + third}`);
  };

  return (
    <div
      className={`${
        !opened
          ? `hover:top-[calc(100%-45px-10px)] top-[calc(100%-45px)]`
          : `top-full -translate-y-full`
      } max-sm:hidden bg-gray-400 fixed border-dashed border-l border-t border-gray-300 right-0 overflow-hidden transition-all duration-500`}
    >
      <button
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
      </button>

      <div className={`${!opened && ``} flex p-30 flex-col gap-15`}>
        <p className="text-gray-100 w-[370px] text-[22px] font-bold font-extended leading-tight">
          Введите 9 цифр, которые назовет оператор:
        </p>
        <div className="flex gap-10">
          <NumberInput
            value={values.first}
            error={errors.first}
            setValues={setValues}
            name="first"
            placeholder="000"
            min="0"
            max="999"
            maxLength="3"
          />
          <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-loose">
            -
          </p>
          <NumberInput
            value={values.second}
            error={errors.second}
            setValues={setValues}
            name="second"
            placeholder="000"
            min="0"
            max="999"
            maxLength="3"
          />
          <p className="text-gray-100 text-[28px] font-extrabold font-expanded leading-loose">
            -
          </p>
          <NumberInput
            value={values.third}
            error={errors.third}
            setValues={setValues}
            name="third"
            placeholder="000"
            min="0"
            max="999"
            maxLength="3"
          />
        </div>
        <p className="w-[370px] text-gray-200 font-text font-light text-base leading-tight">
          После ввода, на ваш компьютер скачается файл, который предоставит
          специалисту доступ к вашей системе для решения задачи
        </p>
        <SecondaryButton variant="light" onClick={handleConnect}>
          Предоставить доступ
        </SecondaryButton>
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
