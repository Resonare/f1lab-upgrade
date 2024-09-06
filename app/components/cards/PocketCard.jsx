import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

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
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${bgColor} ${row} ${col} sm:pb-15 pb-30 flex flex-col sm:gap-[50px] gap-15 border-dashed border-t mx-[0.8px] `}
    >
      <div className="xl:pt-30 xl:pl-30 xl:pr-60 lg:pt-15 lg:px-15 sm:pt-30 sm:pl-30 sm:pr-60 pt-15 pl-15 pr-30 flex flex-col gap-5 bg-gradient-to-b from-[transparent] via-f1-light to-[transparent]">
        <p className="font-text text-sm uppercase leading-[18px] tracking-wide">
          {subTitle}
        </p>
        <p className="max-sm:hidden text-[26px] font-bold font-extended leading-30">
          {whenTitle}
        </p>

        <div className="sm:hidden text-2xl flex font-normal items-center font-text leading-[1.75rem]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-[1px] w-full text-f1-light">
            <p className="text-gray-400">Пакет:</p>
            {namesArray != undefined ? (
              namesArray.map((name, index) => {
                return (
                  <div
                    className="px-15 py-5 bg-gray-400 rounded-xl"
                    key={index}
                  >
                    {name}
                  </div>
                );
              })
            ) : (
              <p className="px-15 py-5 bg-gray-400 rounded-xl">{name}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:gap-60 gap-15 xl:pl-30 xl:pr-60 lg:px-15 sm:pl-30 sm:pr-60 pl-15 pr-30">
        <div className="flex flex-col gap-15">
          <p className="max-sm:hidden text-2xl font-normal font-text leading-7">
            Пакет:
            <span className="ml-5 text-f1-light px-15 py-5 bg-gray-400 rounded-xl">
              {name}
            </span>
          </p>

          <p className="sm:hidden text-xl font-extended font-bold leading-normal">
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
  );
};

export default PocketCard;
