import { useContext } from "react";

import Condition from "../misc/Condition";
import SecondaryButton from "../buttons/SecondaryButton";

import { ThemeContext } from "../../store/theme-context";

const Contacts = ({ className = "" }) => {
  const { bgColor } = useContext(ThemeContext);

  const dummyClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className={`${className} max-sm:hidden flex flex-wrap lg:gap-30 justify-between`}
      >
        <Condition
          className="text-sm font-text font-bold uppercase leading-[18px]"
          icon="mail.svg"
        >
          info@f1lab.ru
        </Condition>
        <Condition
          className="text-sm font-text font-bold uppercase leading-[18px]"
          icon="phone.svg"
        >
          +7 (423) 202-52-55
        </Condition>
        <Condition
          className="text-sm font-text font-bold uppercase leading-[18px] cursor-pointer select-none"
          icon="telegram.svg"
        >
          Telegram
        </Condition>
        <Condition
          className="text-sm font-text font-bold uppercase leading-[18px] cursor-pointer select-none"
          icon="whatsapp.svg"
        >
          Whatsapp
        </Condition>
      </div>

      <div className={`${className} sm:hidden flex flex-col gap-15`}>
        <SecondaryButton
          className="uppercase border-x"
          customIcon="/images/icons/mail.svg"
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          info@f1lab.ru
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon="/images/icons/phone.svg"
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          +7 (423) 202-52-55
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon="/images/icons/telegram.svg"
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          Telegram
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon="/images/icons/whatsapp.svg"
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          Whatsapp
        </SecondaryButton>
      </div>
    </>
  );
};

export default Contacts;
