import { useContext, useState, useEffect } from "react";
import { useLocation } from "@remix-run/react";

import useModalStore from "../../../store/modal";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../../layout/BackgroundGrid";
import PlanInfo from "./PlanInfo";
import Result from "../Result";
import Cancel from "../Cancel";
import ModalForm from "../ModalForm";
import FormInput from "../../misc/inputs/FormInput";
import PrimaryButton from "../../buttons/PrimaryButton";
import Contacts from "../Contacts";

import { ThemeContext } from "../../../store/theme-context";

const INITIAL_ERRORS = {
  name: "",
  phone: "",
  email: "",
  policy: false,
};

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  policy: false,
};

const PlanModal = () => {
  const location = useLocation();
  const {
    planModalIsActive,
    closePlanModal,
    selectedPlan,
    selectedDevicesCount,
  } = useModalStore();

  const { bgColor } = useContext(ThemeContext);

  const [devicesCount, setDevicesCount] = useState(selectedDevicesCount);

  useEffect(() => {
    if (selectedDevicesCount !== undefined) {
      setDevicesCount(selectedDevicesCount);
    }
  }, [selectedDevicesCount]);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  return (
    <BlurCurtain
      className={`${
        !planModalIsActive && `fixed bottom-[-100%]`
      } text-gray-400 left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px] overflow-auto">
        <BackgroundGrid />

        <div
          className={`xl:pr-120 lg:py-90 lg:pr-60 sm:py-[70px] lg:pl-0 sm:px-[44.1px] py-30 px-15`}
        >
          <div
            className={`${bgColor} lg:min-h-[calc(100svh-90px*2)] sm:min-h-[calc(100svh-70px*2)] min-h-[calc(100svh-30px*2)] relative flex max-lg:flex-col xl:pl-120 lg:pl-60 max-md:pl-0 striped h-full border mr-[-1px] border-dashed border-gray-200`}
          >
            <Result
              className={`${
                success === null && `hidden`
              } max-sm:h-fit sm:hidden`}
              success={success}
              phone={values.phone}
              onClose={closePlanModal}
              showContacts={false}
            />

            <PlanInfo
              title={selectedPlan.title}
              price={selectedPlan.price}
              termCondition={selectedPlan.termCondition}
              conditions={selectedPlan.conditions}
              success={success}
              devicesCount={devicesCount}
              setDevicesCount={setDevicesCount}
              closePlanModal={closePlanModal}
            />

            <ModalForm
              className={`${success !== null && `hidden`}`}
              method="post"
              action="/services"
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              setSuccess={setSuccess}
            >
              <FormInput
                className="border-b-0"
                name="name"
                placeholder="Ваше имя"
                required
                setValues={setValues}
                value={values.name}
                error={errors.name}
              />
              <FormInput
                className="border-b-0"
                name="phone"
                placeholder="Телефон"
                type="tel"
                required
                setValues={setValues}
                value={values.phone}
                error={errors.phone}
              />
              <FormInput
                className="border-b"
                name="email"
                placeholder="E-mail"
                type="email"
                required
                setValues={setValues}
                value={values.email}
                error={errors.email}
              />
              <FormInput
                className="hidden"
                name="plan-title"
                type="text"
                value={selectedPlan.title || ""}
              />
              <FormInput
                className="hidden"
                name="path"
                type="text"
                value={location.pathname}
              />
              <FormInput
                className="hidden"
                name="devices-count"
                type="text"
                value={devicesCount}
              />
              <FormInput
                className="hidden"
                name="request-type"
                type="text"
                value="service-request"
              />
            </ModalForm>

            <Result
              className={`${success === null && `hidden`} max-sm:hidden`}
              success={success}
              phone={values.phone}
              onClose={closePlanModal}
            />

            <div
              className={`${bgColor} sm:hidden flex flex-col sm:gap-15 gap-30 p-15 h-full justify-between`}
            >
              <PrimaryButton
                className={success === null && `hidden`}
                onClick={closePlanModal}
              >
                Жду звонка
              </PrimaryButton>

              <div className="flex flex-col gap-20">
                <p className="font-extended font-bold text-[22px] leading-6">
                  Контакты:
                </p>
                <Contacts />
              </div>
            </div>

            <Cancel
              className="w-40 h-40 absolute top-30 right-30 cursor-pointer select-none"
              onClick={closePlanModal}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default PlanModal;
