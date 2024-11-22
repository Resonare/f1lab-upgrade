import { create } from "zustand";

const useModalStore = create((set) => ({
  callMeBackModalIsActive: false,
  showCallMeBackModal: () =>
    set(() => {
      document.body.style.overflow = "hidden";
      return { callMeBackModalIsActive: true };
    }),
  closeCallMeBackModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      return { callMeBackModalIsActive: false };
    }),
  planModalIsActive: false,
  showPlanModal: (data) =>
    set(() => {
      document.body.style.overflow = "hidden";
      return { selectedPlan: data, planModalIsActive: true };
    }),
  closePlanModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      return { planModalIsActive: false };
    }),
  selectedPlan: {},
}));

export default useModalStore;
