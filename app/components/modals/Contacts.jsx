import { useContext } from "react";

import Condition from "../misc/Condition";
import SecondaryButton from "../buttons/SecondaryButton";

import { ThemeContext } from "../../store/theme-context";

const Contacts = ({
  className = "",
  inverseColor = false,
  minimized = false,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const dummyClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className={`${className} ${
          minimized ? `` : `max-sm:hidden`
        } flex flex-wrap lg:gap-30 justify-between`}
      >
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px]`}
          icon={inverseColor ? `mail.svg` : `mail-dark.svg`}
        >
          info@f1lab.ru
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `phone.svg` : `phone-dark.svg`}
        >
          +7 (423) 202-52-55
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `telegram.svg` : `telegram-dark.svg`}
        >
          Telegram
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `whatsapp.svg` : `whatsapp-dark.svg`}
        >
          Whatsapp
        </Condition>
      </div>

      <div
        className={`${className} ${
          minimized ? `hidden` : `sm:hidden`
        } flex flex-col gap-15`}
      >
        <SecondaryButton
          className="uppercase border-x"
          customIcon={
            inverseColor
              ? `/images/icons/mail.svg`
              : `/images/icons/mail-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          info@f1lab.ru
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon={
            inverseColor
              ? `/images/icons/phone.svg`
              : `/images/icons/phone-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          +7 (423) 202-52-55
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon={
            inverseColor
              ? `/images/icons/telegram.svg`
              : `/images/icons/telegram-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={dummyClickHandler}
        >
          Telegram
        </SecondaryButton>

        <SecondaryButton
          className="uppercase border-x"
          customIcon={
            inverseColor
              ? `/images/icons/whatsapp.svg`
              : `/images/icons/whatsapp-dark.svg`
          }
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
