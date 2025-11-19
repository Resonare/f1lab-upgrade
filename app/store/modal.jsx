import { create } from "zustand";

const CALL_ME_BACK_MODAL_DATA = {
  title: "Давайте уточним детали",
  subtitle: "Заполните форму и мы свяжемся с вами в течение 15 минут",
  submitText: "Заказать звонок",
  minimized: false,
  inverseColor: false,
};

const FOOTER_MODAL_DATA = {
  title: "Обратная связь",
  subtitle: "",
  submitText: "Отправить",
  minimized: true,
  inverseColor: true,
};

const useModalStore = create((set) => ({
  callMeBackModalIsActive: false,
  modalData: CALL_ME_BACK_MODAL_DATA,
  showCallMeBackModal: () =>
    set(() => {
      document.body.style.overflow = "hidden";
      return {
        callMeBackModalIsActive: true,
        modalData: CALL_ME_BACK_MODAL_DATA,
      };
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
        modalData: CALL_ME_BACK_MODAL_DATA,
      };
    });
  },
  closePlanModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      return { planModalIsActive: false };
    }),
  selectedPlan: {},
  showFooterModal: () =>
    set(() => {
      document.body.style.overflow = "hidden";
      return {
        callMeBackModalIsActive: true,
        modalData: FOOTER_MODAL_DATA,
      };
    }),
  closeFooterModal: () =>
    set(() => {
      document.body.style.overflow = "auto";
      return { callMeBackModalIsActive: false };
    }),
}));

export default useModalStore;
