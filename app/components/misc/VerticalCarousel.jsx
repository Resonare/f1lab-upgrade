import { useEffect, useState } from "react";

const VerticalCarousel = ({
  className,
  textSize = 56,
  words,
  duration = 4000,
}) => {
  const [translate, setTranslate] = useState(0);

  const handleTimeout = () => {
    setTranslate((prevTranslate) => {
      return prevTranslate < words.length * textSize
        ? prevTranslate + textSize
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
      className={`${className} text-[${textSize}px] h-[${textSize}px] w-fit overflow-hidden`}
    >
      <div
        className={`${translate != 0 && `transition-all`} flex flex-col`}
        style={{
          transform: `translateY(-${translate}px)`,
        }}
      >
        {words.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
        <span>{words[0]}</span>
      </div>
    </div>
  );
};

export default VerticalCarousel;
