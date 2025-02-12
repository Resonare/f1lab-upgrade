import { create } from "zustand";

const TEST_ALERT_DATA = {
  message: "This is a test alert!",
  danger: false,
};

const COPIED_ALERT_DATA = {
  message: "Данные скопированы ✓",
  danger: false,
};

const useAlertStore = create((set) => ({
  alertVisible: false,
  alertData: TEST_ALERT_DATA,
  showTestAlert: () =>
    set(() => {
      return {
        alertVisible: true,
        alertData: TEST_ALERT_DATA,
      };
    }),
  showCopiedAlert: () =>
    set(() => {
      return {
        alertVisible: true,
        alertData: COPIED_ALERT_DATA,
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
