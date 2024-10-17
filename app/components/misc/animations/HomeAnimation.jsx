import { useLottie } from "lottie-react";

import homeAnimationJson from "./home-animation.json";

const HomeAnimation = () => {
  const options = {
    animationData: homeAnimationJson,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default HomeAnimation;
