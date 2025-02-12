import { useContext } from "react";

import Condition from "../misc/Condition";
import SecondaryButton from "../buttons/SecondaryButton";

import useAlertStore from "../../store/alert";
import { ThemeContext } from "../../store/theme-context";

const CONTACTS_DATA = {
  mail: "info@f1lab.ru",
  phone: "+7 (423) 202-52-55",
  telegram: "",
  whatsapp: "",
};

const Contacts = ({
  className = "",
  inverseColor = false,
  minimized = false,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const { showCopiedAlert } = useAlertStore();

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
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText(CONTACTS_DATA.mail);
            showCopiedAlert();
          }}
        >
          {CONTACTS_DATA.mail}
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `phone.svg` : `phone-dark.svg`}
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText(CONTACTS_DATA.phone);
            showCopiedAlert();
          }}
        >
          {CONTACTS_DATA.phone}
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `telegram.svg` : `telegram-dark.svg`}
          onClick={(event) => {
            event.preventDefault();
            // REDIRECT TO TELEGRAM
          }}
        >
          Telegram
        </Condition>
        <Condition
          outerClassName="cursor-pointer select-none hover:underline"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-none`}
          icon={inverseColor ? `whatsapp.svg` : `whatsapp-dark.svg`}
          onClick={(event) => {
            event.preventDefault();
            // REDIRECT TO WHATSAPP
          }}
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
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText("info@f1lab.ru");
            showCopiedAlert();
          }}
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
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText("+7 (423) 202-52-55");
            showCopiedAlert();
          }}
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
          onClick={(event) => {
            event.preventDefault();
            // REDIRECT TO TELEGRAM
          }}
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
          onClick={(event) => {
            event.preventDefault();
            // REDIRECT TO WHATSAPP
          }}
        >
          Whatsapp
        </SecondaryButton>
      </div>
    </>
  );
};

export default Contacts;
