import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const RecallInfo = () => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div className={`${bgColor} flex h-full w-fit`}>
      <div className="p-30 flex flex-col justify-between">
        <div className="flex flex-col gap-60">
          <div className="text-[44px] font-title leading-[50px]">Поговорим о сотрудничестве?</div>
          <div className="flex flex-col gap-30">
            <div className="text-[22px] font-bold font-extended leading-relaxed">Что обсудим:</div>
            <div>
              <div className="">
                · Текущие задачи и проблемы в IT-инфраструктуре
              </div>
              <div className="">
                · Подбор решений для поддержки и оптимизации работы
              </div>
              <div className="">· Облачные решения и защита данных</div>
              <div className="">· Детали сотрудничества и условия работы</div>
              <div className="">· Поддержка 24/7 и помощь на каждом этапе</div>
            </div>
          </div>
        </div>
        <div>1</div>
      </div>
    </div>
  );
};

export default RecallInfo;
