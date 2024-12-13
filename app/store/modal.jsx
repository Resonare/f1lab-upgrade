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
  showPlanModal: (planData, devicesCount) => {
    return set(() => {
      document.body.style.overflow = "hidden";
      return {
        selectedPlan: planData,
        selectedDevicesCount: devicesCount,
        planModalIsActive: true,
      };
    });
  },
  closePlanModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      return { planModalIsActive: false };
    }),
  selectedPlan: {},
}));

export default useModalStore;
