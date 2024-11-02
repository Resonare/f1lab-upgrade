import { useState, useEffect, lazy, Suspense } from "react";

const AnimationLazy = lazy(() => import("./AnimationLazy"));

const Animation = (props) => {
  return (
    <Suspense
      fallback={<div className={`w-full ${props.height || "h-[200px]"}`} />}
    >
      <AnimationLazy {...props} />
    </Suspense>
  );
};

export default Animation;
