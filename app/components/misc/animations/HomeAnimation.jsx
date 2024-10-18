import { useState } from "react";
import { useLottie } from "lottie-react";

import homeAnimationJson from "./home-animation.json";

const HomeAnimation = () => {
  const [loaded, setLoaded] = useState(false);

  const options = {
    animationData: homeAnimationJson,
    loop: true,
    onDOMLoaded: () => {
      setLoaded(true);
    },
  };

  const { View } = useLottie(options);

  return (
    <div className={`${!loaded && `opacity-0`} transition-all duration-500`}>
      {View}
    </div>
  );
};

export default HomeAnimation;
