import useModalStore from "../store/modal";

import Section from "../layout/Section";
import PrimaryButton from "./buttons/PrimaryButton";
import { LazyImage } from "./LazyImage";

const Footer = () => {
  const { showCallMeBackModal } = useModalStore();

  return (
    <Section
      className="max-w-[1921.4px] sm:py-40 text-gray-100 border-t border-dashed border-gray-300 mt-[-1px]"
      inverseColor={true}
    >
      <div className="col-start-1 lg:col-end-2 sm:col-end-3 col-end-5 flex flex-col gap-60 p-30">
        <p className="uppercase font-text text-sm font-semibold">Заголовок</p>
        <div className="text-gray-200 flex flex-col gap-15 font-text text-sm">
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
        </div>
      </div>

      <div className="lg:col-start-2 sm:col-start-3 col-start-1 lg:col-end-3 col-end-5 flex flex-col gap-60 p-30">
        <p className="uppercase font-text text-sm font-semibold">Заголовок</p>
        <div className="text-gray-200 flex flex-col gap-15 font-text text-sm">
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
        </div>
      </div>

      <div className="lg:col-start-3 col-start-1 lg:col-end-4 sm:col-end-3 col-end-5 flex flex-col gap-60 p-30">
        <p className="uppercase font-text text-sm font-semibold">Заголовок</p>
        <div className="text-gray-200 flex flex-col gap-15 font-text text-sm">
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
          <p className="hover:underline cursor-pointer">Ссылка</p>
        </div>
      </div>

      <div className="lg:col-start-4 sm:col-start-3 col-start-1 col-end-5 flex flex-col gap-60 p-30">
        <PrimaryButton type="light" onClick={showCallMeBackModal}>
          Консультация
        </PrimaryButton>
        <div className="flex gap-20">
          <LazyImage
            className="cursor-pointer"
            src="/images/icons/instagram-lg.svg"
            alt=""
          />
          <LazyImage
            className="cursor-pointer"
            src="/images/icons/linkedin-lg.svg"
            alt=""
          />
          <LazyImage
            className="cursor-pointer"
            src="/images/icons/play-store-lg.svg"
            alt=""
          />
          <LazyImage
            className="cursor-pointer"
            src="/images/icons/telegram-lg.svg"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
};

export default Footer;
