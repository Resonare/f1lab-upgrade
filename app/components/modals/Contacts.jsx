import Condition from "../misc/Condition";

const Contacts = () => {
  return (
    <div className="flex justify-between">
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
  );
};

export default Contacts;
