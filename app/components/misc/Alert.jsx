import useAlertStore from "../../store/alert";

const Alert = () => {
  const { alertVisible, alertData } = useAlertStore();

  return (
    <div
      className={`${
        alertVisible ? `opacity-1` : `opacity-0`
      } -translate-y-[90%] pointer-events-none select-none absolute z-50 -translate-x-1/2 left-1/2 text-sm leading-tight`}
      style={{ left: alertData?.position?.x, top: alertData?.position?.y }}
    >
      <p className="bg-gray-300 text-gray-100 p-15">{alertData.message}</p>
      <svg
        className="fill-gray-300 absolute left-1/2 -translate-x-1/2 -translate-y-[2px]"
        width="30"
        height="15"
        viewBox="0 0 30 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 -0.000442743H29.1421L15 14.1417L0.857865 -0.000442743H15Z" />
      </svg>
    </div>
  );
};

export default Alert;
