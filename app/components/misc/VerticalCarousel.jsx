import { useEffect, useState } from "react";

const LG_TRANSLATE_MODIFIER = 91;
const SM_TRANSLATE_MODIFIER = 79;
const MOBILE_TRANSLATE_MODIFIER = 53;

const VerticalCarousel = ({ className, words, duration = 3000 }) => {
  const [translate, setTranslate] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleTimeout = () => {
    let translateModifier = LG_TRANSLATE_MODIFIER;

    if (window.matchMedia("(max-width: 1300px)").matches) {
      translateModifier = SM_TRANSLATE_MODIFIER;
    }

    if (window.matchMedia("(max-width: 770px)").matches) {
      translateModifier = MOBILE_TRANSLATE_MODIFIER;
    }

    setTranslate((prevTranslate) => {
      if (prevTranslate >= (words.length - 1) * translateModifier) {
        setTimeout(() => {
          setFlag(true);
          setTranslate(0);
        }, 700);
      } else {
        setFlag(false);
      }

      return prevTranslate < words.length * translateModifier
        ? prevTranslate + translateModifier
        : 0;
    });
  };

  useEffect(() => {
    if (window !== null) {
      const interval = setInterval(handleTimeout, duration);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      className={`${className} lg:text-[56px] sm:text-[44px] text-[28px] lg:h-[86px] sm:h-[74px] h-[58px] py-15 overflow-hidden`}
    >
      <div
        className={`${
          !flag && `transition-all duration-700`
        } flex gap-20 flex-col`}
        style={{
          transform: `translateY(-${translate}px)`,
        }}
      >
        {words.map((word, index) => (
          <span
            className="bg-gray-400 sm:pb-15 pb-5 sm:px-30 px-10 sm:rounded-[15px] rounded-[50px] w-fit"
            key={index}
          >
            {word}
          </span>
        ))}
        <span className="bg-gray-400 sm:pb-15 pb-5 sm:px-30 px-10 sm:rounded-[15px] rounded-[50px] w-fit">
          {words[0]}
        </span>
      </div>
    </div>
  );
};

export default VerticalCarousel;
