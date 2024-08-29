import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const PocketCard = ({
  row = "",
  col = "",
  subTitle,
  whenTitle,
  name,
  description,
  price,
  tags,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${bgColor} ${row} ${col} flex flex-col gap-[50px] border-dashed border-t mx-[0.8px] `}
    >
      <div className="pt-30 pl-30 pr-60 flex flex-col gap-5 bg-gradient-to-b from-[transparent] via-f1-light to-[transparent]">
        <p className="font-text text-sm uppercase leading-[18px] tracking-wide">
          {subTitle}
        </p>
        <p className="text-[26px] font-subtitle leading-30">{whenTitle}</p>
      </div>

      <div className="pl-30 pr-60 flex flex-col gap-15">
        <p className="text-2xl font-normal font-text leading-[1.75rem]">
          Пакет:
          <span className="ml-5 text-f1-light px-15 py-5 bg-gray-400 rounded-xl">
            {name}
          </span>
        </p>
        <p className="text-xl font-light font-text leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pl-30 pr-60 flex gap-15">
        {children}
      </div>

      <div className="flex pl-30 pr-60">
        <div className="flex flex-col gap-15 grow shrink">
          <p className="text-2xl font-normal font-text leading-[1.75rem]">
            Состав пакета:
          </p>
          <div className="flex gap-5">{tags}</div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-[40px] font-subtitle leading-[44px]">{price}</p>
          <p className="text-sm font-bold font-text uppercase leading-[18px] tracking-wide">
            Средняя стоимость пакета
          </p>
        </div>
      </div>
    </div>
  );
};

export default PocketCard;
