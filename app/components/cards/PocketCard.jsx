import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";
import PrimaryButton from "../buttons/PrimaryButton";

const PocketCard = ({
  row = "",
  col = "",
  subTitle,
  whenTitle,
  name,
  namesArray,
  description,
  price,
  tags,
  onCallMeBackModalOpen,
  inverseColor = false,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${
        inverseColor ? `bg-gray-400 text-gray-100` : `${bgColor} text-gray-400`
      } ${
        inverseColor && `border-gray-300`
      } ${row} ${col} ml-[1px] mr-[1px] max-sm:border-b relative border-dashed border-t`}
    >
      <div className="absolute top-0 pt-30 h-full lg:w-[calc(100%-3px)] w-full left-1/2 -translate-x-1/2">
        <PrimaryButton
          className="h-60 sticky top-[86vh]"
          type={`${inverseColor ? `accent-to-light` : `accent`}`}
          onClick={onCallMeBackModalOpen}
        >
          Консультация
        </PrimaryButton>
      </div>

      <div className="backdrop-blur-xl sm:pb-15 pb-30 flex flex-col sm:gap-[50px] gap-15">
        <div className="xl:pt-30 xl:pl-30 xl:pr-60 lg:pt-15 lg:px-15 sm:pt-30 sm:pl-30 sm:pr-60 pt-15 pl-15 pr-30 flex flex-col gap-5">
          <p className="font-text text-sm uppercase leading-[18px] tracking-wide">
            {subTitle}
          </p>
          <p className="max-sm:hidden text-[26px] font-bold font-extended leading-[30px]">
            {whenTitle}
          </p>

          <div className="sm:hidden text-2xl flex font-normal items-center font-text leading-[1.75rem]">
            <div
              className={`flex flex-wrap items-center gap-x-5 gap-y-[1px] w-full`}
            >
              <p>Пакет:</p>
              {namesArray != undefined ? (
                namesArray.map((name, index) => {
                  return (
                    <div
                      className={`${
                        inverseColor
                          ? `bg-f1-light text-gray-400`
                          : `bg-gray-400 text-f1-light`
                      } px-15 py-5 rounded-xl`}
                      key={index}
                    >
                      {name}
                    </div>
                  );
                })
              ) : (
                <p
                  className={`${
                    inverseColor
                      ? `bg-f1-light text-gray-400`
                      : `bg-gray-400 text-f1-light`
                  } px-15 py-5 rounded-xl`}
                >
                  {name}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:gap-60 gap-15 xl:pl-30 xl:pr-60 lg:px-15 sm:pl-30 sm:pr-60 pl-15 pr-30">
          <div className="flex flex-col gap-15">
            <p className="max-sm:hidden text-2xl font-normal font-text leading-7">
              Пакет:
              <span
                className={`${
                  inverseColor
                    ? `bg-f1-light text-gray-400`
                    : `text-f1-light bg-gray-400`
                } ml-5 px-15 py-5 rounded-xl`}
              >
                {name}
              </span>
            </p>

            <p className="sm:hidden text-xl font-expanded font-bold leading-[24px]">
              {whenTitle}
            </p>

            <p className="sm:text-xl text-sm sm:font-light font-normal font-text sm:leading-relaxed leading-tight">
              {description}
            </p>
          </div>

          <div className="flex gap-15 flex-wrap">{children}</div>

          <div className="flex max-sm:flex-col max-sm:gap-15">
            <div className="flex flex-col gap-15 grow shrink">
              <p className="text-2xl font-normal font-text leading-[1.75rem]">
                Состав пакета:
              </p>
              <div className="flex gap-5">{tags}</div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-[40px] font-title leading-[44px]">{price}</p>
              <p className="text-sm font-bold font-text uppercase leading-[18px] tracking-wide">
                Средняя стоимость пакета
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-60"></div>
    </div>
  );
};

export default PocketCard;
