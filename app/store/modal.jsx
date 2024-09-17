import { create } from "zustand";

const useModalStore = create((set) => ({
  callMeBackModalIsActive: false,
  showCallMeBackModal: () =>
    set(() => {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "calc(100vw - 100%)";
      return { callMeBackModalIsActive: true };
    }),
  closeCallMeBackModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      return { callMeBackModalIsActive: false };
    }),
  planModalIsActive: false,
  showPlanModal: () =>
    set(() => {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "calc(100vw - 100%)";
      return { planModalIsActive: true };
    }),
  closePlanModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
      return { planModalIsActive: false };
    }),
}));

export default useModalStore;
