import { useContext } from "react";

import PrimaryButton from "../PrimaryButton";
import ContentCard from "../ContentCard";

import { GlobalContext } from "../GlobalContext";

const Hero = () => {
  const { screen } = useContext(GlobalContext);

  //Computing screen flags for shorter syntax
  const screenMd = screen == "md";
  const screenSm = screen == "sm";

  //Computes position of title
  const titlePos = {
    row: `1 / ${screenMd ? 1 : 2}`,
    col: `1 / ${screenMd ? 4 : screenSm ? 5 : 3}`,
  };

  //Computes position of scheme
  const schemePos = {
    row: `${screenMd ? 2 : screenSm ? 4 : 1} / ${
      screenMd ? 4 : screenSm ? 6 : 5
    }`,
    col: `${screenSm ? 1 : 3} / 5`,
  };

  return (
    <div
      className="grid grid-cols-4 xl:px-120 lg:px-60 md:px-40 sm:px-40 py-120"
      style={{
        gridTemplateRows: `${
          screenSm
            ? "1fr 0.5fr 0.5fr repeat(2, minmax(0, 1fr)) 0.5fr"
            : "1.2fr repeat(3, minmax(0, 1fr))"
        }`,
      }}
    >
      <div
        className="text-gray-400 xl:text-[56px] lg:text-[44px] md:text-[56px] sm:text-[56px] font-title leading-[60px]"
        style={{
          gridColumn: titlePos.col,
          gridRow: titlePos.row,
        }}
      >
        <p>ИТ‑аудит с применимыми рекомендациями</p>
      </div>
      <ContentCard row={2} col={1} width={screenSm ? 2 : 1}>
        Хотите убедиться, что ваша ИТ-инфраструктура соответствует целям вашего
        бизнеса и не создает ненужных рисков?
      </ContentCard>
      <div
        className="row-start-2 row-end-3 col-start-2 col-end-3 flex items-end"
        style={{
          display: screenMd || screenSm ? "none" : "inherit",
        }}
      >
        <img src="/images/misc/arrow-card-right.svg" alt="" />
      </div>
      <ContentCard row={3} col={screenSm ? 3 : 2} width={screenSm ? 2 : 1}>
        ИТ-аудит F1 LAB, предоставит полный отчёт о состоянии и
        отказоустойчивости вашей ИТ-среды.
      </ContentCard>
      <div
        className="row-start-3 row-end-4 col-start-1 col-end-2 flex items-end justify-end"
        style={{
          display: screenMd || screenSm ? "none" : "inherit",
        }}
      >
        <img src="/images/misc/arrow-card-left.svg" alt="" />
      </div>
      <PrimaryButton
        className={screenMd || screenSm ? `self-center` : undefined}
        type="accent"
        row={screenSm ? 6 : 4}
        col={1}
        width={screenMd || screenSm ? 5 : 1}
      >
        Консультация
      </PrimaryButton>
      <img
        className={`${screenSm ? "w-full" : ""}`}
        style={{
          gridColumn: schemePos.col,
          gridRow: schemePos.row,
        }}
        src={`/images/audit/hero-schemes/hero-scheme-${screen}.svg`}
        alt=""
      />
    </div>
  );
};

export default Hero;
