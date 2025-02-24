import { lazy, Suspense } from "react";

import useHydrated from "../../../hooks/useHydrated";

const AnimationLazy = lazy(() => import("./AnimationLazy"));

const Animation = (props) => {
  const isHydrated = useHydrated();

  if (!isHydrated) {
    return <div className={`w-full ${props.height || "h-[200px]"}`} />;
  }

  return (
    <Suspense
      fallback={<div className={`w-full ${props.height || "h-[200px]"}`} />}
    >
      <AnimationLazy {...props} />
    </Suspense>
  );
};

export default Animation;
