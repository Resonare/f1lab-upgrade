import Condition from "../misc/Condition";
import SecondaryButton from "../buttons/SecondaryButton";

import useAlertStore from "../../store/alert";

const CONTACTS_DATA = {
  mail: "info@f1lab.ru",
  phone: "+7 (423) 202-52-55",
  telegram: "https://t.me/f1lab_it",
  whatsapp: "https://wa.me/79240424058",
};

const Contacts = ({
  className = "",
  inverseColor = false,
  minimized = false,
}) => {
  const { showAlert, closeAlert } = useAlertStore();

  const getPosition = (event) => {
    return {
      x:
        event.target.parentElement.getBoundingClientRect().left +
        window.scrollX +
        event.target.parentElement.offsetWidth / 2,
      y:
        event.target.parentElement.getBoundingClientRect().top +
        window.scrollY -
        event.target.parentElement.offsetHeight,
    };
  };

  const copyPhone = (event) => {
    event.preventDefault();

    navigator.clipboard.writeText(CONTACTS_DATA.phone);

    const alertPosition = getPosition(event);
    showAlert(alertPosition, "Скопировано");
  };

  const showCanCopyPhoneAlert = (event) => {
    const alertPosition = getPosition(event);

    showAlert(alertPosition, "Скопировать в буфер обмена");
  };

  const closeCanCopyAlert = () => {
    closeAlert();
  };

  return (
    <>
      <div
        className={`${className} ${
          minimized ? `` : `max-sm:hidden`
        } flex flex-wrap lg:gap-30 justify-between`}
      >
        <Condition
          outerClassName="cursor-pointer hover:underline select-none"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] select-text`}
          icon={inverseColor ? `mail.svg` : `mail-dark.svg`}
          onClick={(event) => {
            event.preventDefault();
            window.open(`mailto:${CONTACTS_DATA.mail}`);
            // navigator.clipboard.writeText(CONTACTS_DATA.mail);
            // showCopiedAlert();
          }}
        >
          {CONTACTS_DATA.mail}
        </Condition>
        <Condition
          outerClassName="cursor-pointer hover:underline select-none"
          className={`${
            inverseColor ? `font-medium` : `font-bold`
          } text-sm font-text uppercase leading-[18px] cursor-pointer select-text`}
          icon={inverseColor ? `phone.svg` : `phone-dark.svg`}
          onClick={copyPhone}
          onMouseEnter={showCanCopyPhoneAlert}
          onMouseLeave={closeCanCopyAlert}
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
            window.open(CONTACTS_DATA.telegram);
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
            window.open(CONTACTS_DATA.whatsapp);
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
          className={`${inverseColor && `border-gray-300`} uppercase border-x`}
          customIcon={
            inverseColor
              ? `/images/icons/mail.svg`
              : `/images/icons/mail-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={(event) => {
            event.preventDefault();
            window.open(`mailto:${CONTACTS_DATA.mail}`);
            // navigator.clipboard.writeText(CONTACTS_DATA.mail);
            // showCopiedAlert();
          }}
        >
          {CONTACTS_DATA.mail}
        </SecondaryButton>

        <SecondaryButton
          className={`${inverseColor && `border-gray-300`} uppercase border-x`}
          customIcon={
            inverseColor
              ? `/images/icons/phone.svg`
              : `/images/icons/phone-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={(event) => {
            event.preventDefault();
            window.open(`tel:${CONTACTS_DATA.phone}`);
            // navigator.clipboard.writeText(CONTACTS_DATA.phone);
            // showCopiedAlert();
          }}
        >
          {CONTACTS_DATA.phone}
        </SecondaryButton>

        <SecondaryButton
          className={`${inverseColor && `border-gray-300`} uppercase border-x`}
          customIcon={
            inverseColor
              ? `/images/icons/telegram.svg`
              : `/images/icons/telegram-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={(event) => {
            event.preventDefault();
            window.open(CONTACTS_DATA.telegram);
          }}
        >
          Telegram
        </SecondaryButton>

        <SecondaryButton
          className={`${inverseColor && `border-gray-300`} uppercase border-x`}
          customIcon={
            inverseColor
              ? `/images/icons/whatsapp.svg`
              : `/images/icons/whatsapp-dark.svg`
          }
          titleClassName="font-text"
          variant="shaded"
          onClick={(event) => {
            event.preventDefault();
            window.open(CONTACTS_DATA.whatsapp);
          }}
        >
          Whatsapp
        </SecondaryButton>
      </div>
    </>
  );
};

export default Contacts;
