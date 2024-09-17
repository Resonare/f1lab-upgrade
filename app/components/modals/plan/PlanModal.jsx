import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../BackgroundGrid";
import PlanInfo from "./PlanInfo";
import Result from "../Result";
import Cancel from "../Cancel";
import ModalForm from "../ModalForm";
import FormInput from "../../misc/FormInput";

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

const PlanModal = ({ opened, planModalData, onPlanModalClose }) => {
  const location = useLocation();
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  //Variants: monthly, annual
  const [annual, setannual] = useState(false);

  return (
    <BlurCurtain
      className={`${
        !opened && `fixed bottom-[-100%]`
      } text-gray-400 left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px]">
        <BackgroundGrid />

        <div className={`pr-120 py-90 h-full`}>
          <div
            className={`${bgColor} relative flex pl-120 bg-striped h-full border-[1px] border-dashed border-gray-200`}
          >
            <PlanInfo
              title={planModalData.title}
              price={planModalData.price}
              annualPrice={planModalData.annualPrice}
              mainCondition={planModalData.mainCondition}
              mainConditionIcon={planModalData.mainConditionIcon}
              conditions={planModalData.conditions}
              annual={annual}
              setannual={setannual}
              submitted={success !== null}
              opened={opened}
            >
              {planModalData.description}
            </PlanInfo>

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
                value={planModalData.title}
              />
              <FormInput
                className="hidden"
                name="payment-period"
                type="text"
                value={annual ? "год" : "месяц"}
              />
              <FormInput
                className="hidden"
                name="path"
                type="text"
                value={location.pathname}
              />
              <FormInput
                className="hidden"
                name="request-type"
                type="text"
                value="service-request"
              />
            </ModalForm>

            <Result
              className={`${success === null && `hidden`}`}
              success={success}
              phone={values.phone}
              onClose={onPlanModalClose}
            />

            <Cancel
              className="w-40 h-40 absolute top-30 right-30 cursor-pointer select-none"
              onClick={onPlanModalClose}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default PlanModal;
