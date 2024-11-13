import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

const AnimationLazy = ({ data, hero = false }) => {
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
        svgElement.style = {};
      }
    }
  }, [animationContainerRef]);

  const widthClasses =
    "xl:[&>div>svg]:w-[1950px] lg:[&>div>svg]:w-[1550px] md:[&>div>svg]:w-[1300px]";

  const translateClasses =
    "xl:[&>div>svg>g]:translate-y-[5%] lg:[&>div>svg>g]:translate-y-[16%] sm:[&>div>svg>g]:translate-y-[76%]";

  return (
    <div
      className={`${!loaded && `opacity-0`} ${hero && widthClasses} ${
        hero && translateClasses
      } ${
        hero
          ? `[&>div>svg]:right-0 [&>div>svg]:h-full`
          : `[&>div>svg]:left-1/2 [&>div>svg]:-translate-x-1/2`
      } [&>div>svg>g]:no-clip [&>div>svg]:w-full [&>div>svg]:h-full [&>div>svg]:absolute transition-all duration-500 overflow-hidden w-full h-full [&>div]:h-full [&>div]:relative`}
    >
      {View}
    </div>
  );
};

export default AnimationLazy;
