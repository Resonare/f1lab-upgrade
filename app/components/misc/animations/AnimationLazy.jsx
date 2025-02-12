import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

const AnimationLazy = ({ className, data, hero = false }) => {
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
        svgElement.setAttribute("width", "100%")
      }
    }
  }, [animationContainerRef]);

  return (
    <div
      className={`${className} ${!loaded && `opacity-0`} ${
        !hero && `[&>div>svg]:left-1/2 [&>div>svg]:-translate-x-1/2`
      } [&>div>svg>g]:no-clip [&>div>svg]:absolute transition-all duration-500 overflow-hidden w-full h-full [&>div]:h-full [&>div]:relative`}
    >
      {View}
    </div>
  );
};

export default AnimationLazy;
