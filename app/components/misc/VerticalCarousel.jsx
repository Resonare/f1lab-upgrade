import { useEffect, useState } from "react";

const VerticalCarousel = ({
  className,
  words,
  duration = 4000,
}) => {
  const [translate, setTranslate] = useState(0);

  const handleTimeout = () => {
    setTranslate((prevTranslate) => {
      return prevTranslate < words.length * 91.2
        ? prevTranslate + 91.2
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
      className={`${className} text-[56px] h-[86px] py-15 overflow-hidden`}
    >
      <div
        className={`${translate != 0 && `transition-all`} flex gap-20 flex-col`}
        style={{
          transform: `translateY(-${translate}px)`,
        }}
      >
        {words.map((word, index) => (
          <span className="bg-gray-400 pb-15 px-30 rounded-[15px] w-fit" key={index}>{word}</span>
        ))}
        <span className="bg-gray-400 pb-15 px-30 rounded-[15px] w-fit">{words[0]}</span>
      </div>
    </div>
  );
};

export default VerticalCarousel;
