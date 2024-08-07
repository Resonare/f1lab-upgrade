import { useState } from "react";
import ServicesNavigationItem from "./ServicesNavigationItem";
import SecondaryButton from "../buttons/SecondaryButton";

const ServicesNavigation = ({ showMenu, items }) => {
  const [currentBgState, setCurrentBgState] = useState("bg-consulting");
  const [currentTextState, setCurrentTextState] = useState("text-gray-400");

  return (
    <div
      className={`fixed start-0 -z-10 ${
        showMenu ? "top-90" : "-top-full"
      } w-full bg-gray-400 flex font-subtitle text-sm transition-all duration-500`}
    >
      <div className="w-[740px] pt-30 pl-120 border-b border-dashed border-gray-200">
        <ul>
          {items.map((item) => (
            <ServicesNavigationItem
              key={item.link}
              item={item}
              currentBgState={currentBgState}
              setCurrentBgState={setCurrentBgState}
              currentTextState={currentTextState}
              setCurrentTextState={setCurrentTextState}
            />
          ))}
        </ul>
      </div>
      <div
        className={`w-full ${currentBgState} py-60 px-30 grid grid-rows-5 justify-start gap-15 border-b border-dashed border-gray-200`}
      >
        <SecondaryButton variant="shaded">ИТ-аудит</SecondaryButton>
        <SecondaryButton variant="dark">Обслуживание серверов</SecondaryButton>
        <SecondaryButton variant="info">Удалённая техподдержка</SecondaryButton>
        <SecondaryButton variant="light">Обслуживание VOIP</SecondaryButton>
      </div>
    </div>
  );
};

export default ServicesNavigation;
