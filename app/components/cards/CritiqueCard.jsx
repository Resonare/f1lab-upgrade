import { useState, useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

import ArrowURSecondary from "../misc/svg/ArrowURSecondary";
import { LazyImage } from "../LazyImage";
import Quote from "../misc/svg/Quote";

const CritiqueCard = ({
  className = "",
  critiqueData,
  minimized = false,
  inverseColor = false,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${inverseColor ? `bg-gray-400` : bgColor} ${
        inverseColor ? `border-gray-300` : `border-gray-200`
      } ${
        !minimized && `cursor-pointer group`
      } ${className} sm:p-30 py-20 px-10 flex flex-col border-dashed gap-30`}
    >
      <div className={`${!minimized && `order-last`} flex gap-30`}>
        <div className={`${!minimized && `w-full`} flex justify-between`}>
          <LazyImage
            className={`${!minimized && `h-[65px] max-w-[50%]`} rounded-[15px]`}
            src={
              !minimized
                ? critiqueData?.logoPath
                : critiqueData.avatarPath
                ? critiqueData.avatarPath
                : critiqueData?.logoPath
            }
            alt=""
          />
          
          <div className={`${minimized && `hidden`} flex content-center flex-wrap`}>
            <p className="select-none font-expanded font-semibold text-sm group-hover:opacity-100 opacity-0 transition-all">
              Перейти к кейсу
            </p>
            <ArrowURSecondary
              className={`${
                inverseColor ? `stroke-gray-200` : `stroke-gray-400`
              } py-5 pl-30`}
            />
          </div>
        </div>

        <div
          className={`${
            !minimized && `hidden`
          } flex flex-col justify-center gap-5`}
        >
          <p
            className={`${
              inverseColor ? `text-gray-100` : `text-gray-400`
            } text-[22px] font-extended font-bold`}
          >
            {critiqueData.title}
          </p>
          <p
            className={`${
              inverseColor ? `text-gray-200` : `text-gray-300`
            } text-sm font-text font-bold uppercase tracking-wide`}
          >
            {critiqueData.subtitle}
          </p>
        </div>
      </div>
      <div className="flex gap-15 justify-between">
        <Quote inverseColor={inverseColor} />

        <div className="flex flex-col gap-15">
          <p
            className={`${
              inverseColor ? `text-gray-100` : `text-gray-400`
            } sm:text-xl text-base font-text font-light`}
          >
            {critiqueData.body}
          </p>

          <div
            className={`${
              minimized && `hidden`
            } flex flex-col justify-center gap-5`}
          >
            <p
              className={`${
                inverseColor ? `text-gray-100` : `text-gray-400`
              } text-[22px] font-extended font-bold`}
            >
              {critiqueData.title}
            </p>
            <p
              className={`${
                inverseColor ? `text-gray-200` : `text-gray-300`
              } text-sm font-text font-bold uppercase tracking-wide`}
            >
              {critiqueData.subtitle}
            </p>
          </div>
        </div>

        <Quote
          className="flex flex-col justify-end"
          inverseColor={inverseColor}
        />
      </div>
    </div>
  );
};

export default CritiqueCard;
