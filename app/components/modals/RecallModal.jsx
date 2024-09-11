import { useContext } from "react";

import BlurCurtain from "./BlurCurtain";
import RecallForm from "./RecallForm";
import BackgroundGrid from "../BackgroundGrid";
import RecallInfo from "./RecallInfo";

import { ThemeContext } from "../../store/theme-context";

const RecallModal = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <BlurCurtain>
      <BackgroundGrid />

      <div className={`pr-120 py-90 h-full`}>
        <div
          className={`${bgColor} bg-striped h-full border-[1px] border-dashed border-gray-200`}
        >
          <RecallInfo />
        </div>
      </div>

      <div className={`absolute z-[-11] w-full pr-120 h-90 bottom-[0px]`}>
        <div className={`${bgColor} w-full h-full`}></div>
      </div>
    </BlurCurtain>
  );
};

export default RecallModal;
