import { create } from "zustand";

const DEFAULT_ALERT_DATA = {
  message: "Ошибка",
  duration: 1000,
  position: {
    x: -100,
    y: -100,
  },
};

const useAlertStore = create((set) => ({
  alertVisible: false,
  alertData: DEFAULT_ALERT_DATA,
  showAlert: (position, message) =>
    set(() => {
      const alertData = {
        message: message,
        position: position,
      };

      return {
        alertVisible: true,
        alertData: alertData,
      };
    }),
  closeAlert: () =>
    set(() => {
      return {
        alertVisible: false,
      };
    }),
}));

export default useAlertStore;
