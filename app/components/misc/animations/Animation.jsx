import { lazy, Suspense, useEffect, useState } from "react";

const AnimationLazy = lazy(() => import("./AnimationLazy"));

function useHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

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
