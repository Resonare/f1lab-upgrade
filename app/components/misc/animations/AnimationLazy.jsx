import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

const AnimationLazy = ({ className, data }) => {
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
    if (typeof window === "undefined") return;

    if (animationContainerRef.current) {
      const svgElement = animationContainerRef.current.querySelector("svg");
      if (svgElement) {
        svgElement.style = {};
        svgElement.removeAttribute("width");
        svgElement.removeAttribute("height");
      }
    }
  }, [animationContainerRef]);

  return (
    <div ref={animationContainerRef} className={`${className} ${loaded ? "opacity-1" : "opacity-0"} transition-all`}>
      {View}
    </div>
  );
};

export default AnimationLazy;
