import { useContext } from "react";

import BlurCurtain from "./BlurCurtain";
import TariffForm from "./TariffForm";
import BackgroundGrid from "../BackgroundGrid";
import TariffInfo from "./TariffInfo";

import { ThemeContext } from "../../store/theme-context";

const TariffModal = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <BlurCurtain>
      <BackgroundGrid />

      <div className={`pr-120 py-90 h-full`}>
        <div
          className={`${bgColor} flex pl-120 bg-striped h-full border-[1px] border-dashed border-gray-200`}
        >
          <TariffInfo
            title="Аудит S"
            price="7 200 ₽"
            mainCondition="1-5 рабочих мест"
            mainConditionIcon="desktop-icon.svg"
            conditions={[
              "12 часов удаленной поддержки",
              "2 экстренных выезда",
              "2 профилактических выезда",
            ]}
          >
            Идеально подходит для стартапов и компаний с небольшим числом
            сотрудников, которым необходима надежная и доступная поддержка для
            IT инфраструктуры.
          </TariffInfo>

          <TariffForm />
        </div>
      </div>
    </BlurCurtain>
  );
};

export default TariffModal;
