import { useRef, useEffect } from "react";

const BackgroundGrid = ({ bgOwnerRef, inverseColor = false }) => {
  let linesColor = inverseColor ? "border-gray-300" : "border-grey";

  const bgRef = useRef();

  const handleResize = () => {
    console.log();
    bgRef.current.style.height = bgOwnerRef.current.offsetHeight + "px";
  };

  useEffect(() => {
    if (bgRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          handleResize();
        }
      });

      observer.observe(bgRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div
      className={`${
        inverseColor ? "bg-gray-400" : ""
      } absolute w-full z-[-1] grid grid-cols-[1fr_1fr_1fr_1fr] px-[120px] py-0`}
      ref={bgRef}
    >
      <div
        className={`h-full ${linesColor} border-l-[1px] border-dashed`}
      ></div>
      <div
        className={`h-full ${linesColor} border-l-[1px] border-dashed`}
      ></div>
      <div
        className={`h-full ${linesColor} border-l-[1px] border-dashed`}
      ></div>
      <div
        className={`h-full ${linesColor} border-l-[1px] border-dashed border-r-[1px]`}
      ></div>
    </div>
  );
};

export default BackgroundGrid;
