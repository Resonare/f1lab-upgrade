import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";
import Scenarios from "./audit/Scenarios";
import Offers from "./audit/Offers";
import Hero from "./audit/Hero";

const ServicesPage = () => {
  const bgOwnerRef = useRef();

  return (
    <>
      <BackgroundGrid bgOwnerRef={bgOwnerRef} />
      <div ref={bgOwnerRef}>
        {/* <div className="text-5xl font-title p-5">Услуги</div> */}
        <Hero />
        <Scenarios />
        <Offers />
      </div>
    </>
  );
};

export default ServicesPage;
