import { useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import Contacts from "../Contacts";

const RecallInfo = ({ success }) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${bgColor} w-[40%] h-full p-30 border-dashed flex flex-col justify-between transition-all`}
    >
      <div className="flex flex-col gap-60">
        {success ? (
          <h1 className="font-title text-[44px] leading-tight">
            Мы уже в предвкушении обсуждения!
          </h1>
        ) : (
          <h1 className="font-title text-[44px] leading-tight">
            Поговорим о сотрудничестве?
          </h1>
        )}

        <div className="flex flex-col gap-30">
          <p className="font-extended font-bold text-[22px] leading-6">
            Что обсудим:
          </p>
          <div className="flex flex-col gap-15 font-text font-light text-20 leading-6">
            <p>· Текущие задачи и проблемы в IT-инфраструктуре</p>
            <p>· Подбор решений для поддержки и оптимизации работы</p>
            <p>· Облачные решения и защиту данных</p>
            <p>· Детали сотрудничества и условия работы</p>
            <p>· Поддержка 24/7 и помощь на каждом этапе</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-30">
        <p className="font-extended font-bold text-[22px] leading-6">
          Контакты:
        </p>
        <Contacts />
      </div>
    </div>
  );
};

export default RecallInfo;
