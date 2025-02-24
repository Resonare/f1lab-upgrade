import { useContext } from "react";

import PrimaryButton from "../../components/buttons/PrimaryButton";

import useModalStore from "../../store/modal";
import { ThemeContext } from "../../store/theme-context";

const IndividualOfferCard = ({ fullBorder = true }) => {
  const { bgColor } = useContext(ThemeContext);
  const { showCallMeBackModal } = useModalStore();

  return (
    <div className={`grid grid-cols-4 col-start-1 col-end-5`}>
      <div
        className={`${
          !fullBorder && `hidden`
        } max-lg:hidden col-start-1 border-t border-dashed mt-[-1px]`}
      ></div>
      <div
        className={`max-sm:${bgColor} max-sm:border-l max-sm:border-t border-b lg:col-start-2 col-start-1 col-end-5 xl:p-30 p-15 text-gray-400 flex flex-col gap-60 border-dashed`}
      >
        <div className="flex flex-col gap-30">
          <div className="flex flex-col gap-15">
            <p className="font-extended font-bold sm:text-[26px] text-xl leading-[40px]">
              Нужно что-то особенное?
            </p>
            <p className="font-expanded font-extrabold sm:text-[40px] text-[28px] sm:leading-[44px] leading-[30px]">
              Индивидуальное предложение
            </p>
          </div>
          <p className="font-text text-base text-gray-300 leading-tight">
            Для особых требований и условий аудита инфраструктуры компании
          </p>
        </div>
        <PrimaryButton
          className="max-sm:hidden"
          type="dark"
          onClick={showCallMeBackModal}
        >
          Рассчитать
        </PrimaryButton>
        <PrimaryButton
          className="sm:hidden"
          type="accent"
          onClick={showCallMeBackModal}
        >
          Рассчитать
        </PrimaryButton>
      </div>
    </div>
  );
};

export default IndividualOfferCard;
