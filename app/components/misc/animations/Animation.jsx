import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";

const Animation = ({ data, width }) => {
  const [loaded, setLoaded] = useState(false);

  const options = {
    animationData: data,
    loop: true,
    onDOMLoaded: () => {
      setLoaded(true);
    },
  };

  const { View, animationContainerRef } = useLottie(options);

  if (width) {
    useEffect(() => {
      if (animationContainerRef.current) {
        const svgElement = animationContainerRef.current.querySelector("svg");
        if (svgElement) {
          svgElement.style.width = width;
        }
      }
    }, [animationContainerRef]);
  }

  return (
    <div
      className={`${
        !loaded && `opacity-0`
      } transition-all duration-500 h-full [&>div]:h-full [&_svg]:w-[2000px] [&_svg]:h-full`}
    >
      {View}
    </div>
  );
};

export default Animation;
