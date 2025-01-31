import { useFetcher } from "@remix-run/react";
import { useRef, useState } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../misc/inputs/Checkbox";
import Contacts from "./Contacts";
import FileAttachmentInput from "../misc/inputs/FileAttachmentInput";
import FileAttachmentArea from "../misc/inputs/FileAttachmentArea";

const INITIAL_ERRORS = {
  name: "",
  phone: "",
  email: "",
  details: "",
  policy: false,
};

const isPhone = (phone) => {
  const regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g;
  return regexp.test(phone);
};

const isEmail = (email) => {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return regexp.test(email);
};

const validateForm = (values, setErrors) => {
  const currentErrors = { ...INITIAL_ERRORS };

  if (values.name.length <= 0) currentErrors.name = "Введите имя";
  else if (values.name.length > 100)
    currentErrors.name = "Введено слишком длинное имя";

  if (values.email.length <= 0) currentErrors.email = "Введите Email";
  else if (!isEmail(values.email))
    currentErrors.email = "Введён некорректный Email";

  if (values.phone.length <= 0) currentErrors.phone = "Введите номер телефона";
  else if (!isPhone(values.phone))
    currentErrors.phone = "Введён некорректный номер телефона";

  if (!values.policy) currentErrors.policy = true;

  if (
    currentErrors.name ||
    currentErrors.phone ||
    currentErrors.email ||
    currentErrors.details ||
    currentErrors.policy
  ) {
    setErrors({ ...currentErrors });
    return false;
  } else {
    setErrors(INITIAL_ERRORS);
    return true;
  }
};

const ModalForm = ({
  title,
  subtitle,
  submitText,
  method = "POST",
  action = "",
  values,
  setValues,
  errors,
  setErrors,
  setSuccess,
  className,
  attachable = false,
  showContacts = false,
  inverseColor = false,
  children,
}) => {
  const fileAttachmentInputRef = useRef();
  const formRef = useRef();

  const [isDragOver, setIsDragOver] = useState(false);

  const fetcher = useFetcher();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm(values, setErrors)) return;

    const formData = new FormData(event.target);

    fetcher.submit(formData, { method: "POST", action: "/services" });
    fetcher.data?.success ? setSuccess(true) : setSuccess(false);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const rect = formRef.current.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      setIsDragOver(false);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={`${
          !isDragOver && `hidden`
        } fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[10]`}
        onDragOver={handleDragLeave}
      ></div>
      <fetcher.Form
        className={`${className} border-dashed border-gray-200 grow lg:p-30 lg:gap-10 sm:gap-15 gap-30 p-20 flex flex-col justify-between`}
        ref={formRef}
        onSubmit={handleSubmit}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        method={method}
        action={action}
        noValidate
      >
        <div className="flex flex-col sm:gap-5 gap-10">
          <p className="lg:text-[28px] sm:text-[22px] text-xl lg:font-expanded lg:font-extrabold font-extended font-bold lg:leading-loose sm:leading-relaxed leading-[24px]">
            {title}
          </p>
          <p className="sm:text-xl text-sm text-gray-300 font-text sm:font-light font-normal sm:leading-relaxed leading-tight">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-30">
          <div className="relative flex flex-col gap-0">
            {children}
            <FileAttachmentArea
              isDragOver={isDragOver}
              setIsDragOver={setIsDragOver}
              fileAttachmentInputRef={fileAttachmentInputRef}
            />
          </div>

          {attachable && (
            <FileAttachmentInput
              ref={fileAttachmentInputRef}
              className="sm:hidden"
            />
          )}

          <div className="flex justify-between items-start">
            <div
              className={`${
                errors.policy && `text-alert`
              } max-sm:text-sm flex gap-15`}
            >
              <Checkbox
                name="policy"
                setValues={setValues}
                value={values.policy}
                error={errors.policy}
                inverseColor={inverseColor}
              />
              <div className="select-none font-text text-base leading-tight">
                <p>Я согласен на обработку персональных данных</p>
                <p className="underline cursor-pointer">
                  Политика конфиденциальности
                </p>
              </div>
            </div>

            {attachable && (
              <FileAttachmentInput
                ref={fileAttachmentInputRef}
                className="max-sm:hidden"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col lg:gap-30 gap-15">
          {showContacts && <Contacts />}

          <div className="h-[68px] flex items-center">
            <PrimaryButton type={inverseColor ? `accent-to-light` : `accent`}>
              {submitText}
            </PrimaryButton>
          </div>
        </div>
      </fetcher.Form>
    </>
  );
};

export default ModalForm;
