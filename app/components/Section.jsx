import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";

const Section = ({ rowsAmount = 1, inverseColor = false, children }) => {
  //Ref for BackgroundGrid
  const bgOwnerRef = useRef();

  return (
    <div>
      {inverseColor ? (
        <BackgroundGrid bgOwnerRef={bgOwnerRef} inverseColor={inverseColor} />
      ) : null}
      <div
        className={`grid grid-cols-4 grid-rows-${rowsAmount} p-[120px]`}
        ref={bgOwnerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
