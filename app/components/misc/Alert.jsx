import useAlertStore from "../../store/alert";

const DURATION = 1700;

const Alert = () => {
  const { alertVisible, alertData, closeAlert } = useAlertStore();

  if (alertVisible) setTimeout(closeAlert, DURATION);

  return (
    <div
      className={`${alertData.danger ? `bg-alert` : `bg-f1-dark`} ${
        alertVisible ? `bottom-0` : `-bottom-[70px]`
      } text-gray-100 select-none fixed z-50 -translate-x-1/2 left-1/2 text-[30px] border-dashed border-gray-100 border-x border-t py-5 px-30 transition-all duration-500`}
    >
      {alertData.message}
    </div>
  );
};

export default Alert;
