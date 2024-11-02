import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

const AnimationLazy = ({ data, hero = false, height = "h-[200px]" }) => {
  const [loaded, setLoaded] = useState(false);

  const options = {
    animationData: data,
    loop: true,
    onDOMLoaded: () => {
      setLoaded(true);
    },
  };

  const { View, animationContainerRef } = useLottie(options);

  useEffect(() => {
    if (animationContainerRef.current) {
      const svgElement = animationContainerRef.current.querySelector("svg");
      if (svgElement) {
        const classes = hero
          ? [
              "w-full",
              "h-full",
              "xl:translate-x-[-120px]",
              "lg:translate-x-[-60px]",
              "sm:translate-x-[-44.1px]",
              "translate-x-[-15px]",
            ]
          : ["w-full", height, "sm:h-full"];

        svgElement.classList.add(...classes);

        svgElement.style = {};
      }
    }
  }, [animationContainerRef]);

  return (
    <div
      className={`${
        !loaded && `opacity-0`
      } transition-all duration-500 overflow-hidden w-full h-full [&>div]:h-full `}
    >
      {View}
    </div>
  );
};

export default AnimationLazy;
