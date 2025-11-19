import { create } from "zustand";

const useCookiesStore = create((set) => ({
  cookiesAccepted: false,
  showCookiesNotification: true,
  acceptCookies: () => {
    set(() => ({
      cookiesAccepted: true,
      showCookiesNotification: false,
    }));
    // Store in localStorage manually
    if (typeof window !== "undefined") {
      localStorage.setItem("f1lab-cookies-accepted", "true");
      localStorage.setItem("f1lab-cookies-notification-dismissed", "true");
    }
  },
  dismissNotification: () => {
    set(() => ({
      showCookiesNotification: false,
    }));
    // Store dismissal in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("f1lab-cookies-notification-dismissed", "true");
    }
  },
  resetCookiesState: () =>
    set(() => ({
      cookiesAccepted: false,
      showCookiesNotification: true,
    })),
  initializeFromStorage: () => {
    if (typeof window !== "undefined") {
      const cookiesAccepted =
        localStorage.getItem("f1lab-cookies-accepted") === "true";
      const notificationDismissed =
        localStorage.getItem("f1lab-cookies-notification-dismissed") === "true";

      set(() => ({
        cookiesAccepted,
        showCookiesNotification: !notificationDismissed && !cookiesAccepted,
      }));
    }
  },
}));

export default useCookiesStore;
