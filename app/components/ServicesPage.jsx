import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";
import Scenarios from "./Audit/Scenarios";
import Offers from "./Audit/Offers";
import Hero from "./Audit/Hero";
import Process from "./Audit/Process";

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
        <Process />
      </div>
    </>
  );
};

export default ServicesPage;
