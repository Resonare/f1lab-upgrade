import { useRef, useState, forwardRef } from "react";
import SecondaryButton from "../../buttons/SecondaryButton";
import { LazyImage } from "../../LazyImage";

const FILE_SIZE_RESTRICTION = 5; // In MB
const ALLOWED_MIMES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "audio/mpeg",
  "audio/wav",
  "audio/webm",
  "video/x-msvideo",
];

const ERROR_MESSAGES = {
  tooBigFile: `Максимальный размер файла - ${FILE_SIZE_RESTRICTION}MB`,
  wrongMIME: `Неверный тип файла.`,
};

const FileAttachment = forwardRef(function MyInput({ className = "" }, ref) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > FILE_SIZE_RESTRICTION * 1024 * 1024) {
        fileInputRef.current.files = new DataTransfer().files;
        setFileName("");
        setError(ERROR_MESSAGES.tooBigFile);
        return;
      }

      const fileType = file.type;

      if (!ALLOWED_MIMES.includes(fileType)) {
        fileInputRef.current.files = new DataTransfer().files;
        setFileName("");
        setError(ERROR_MESSAGES.wrongMIME);
        return;
      }

      setError("");
      setFileName(file.name);
    }
  };

  return (
    <div ref={ref} className={className}>
      <div
        className="max-sm:hidden flex gap-10 items-center group cursor-pointer"
        onClick={handleAttachClick}
      >
        <div className="w-[24px] h-[24px]">
          <LazyImage src="/images/icons/paperclip.svg" />
        </div>

        <p className="group-hover:underline font-text text-[14px] text-gray-300 font-bold leading-tight uppercase">
          Прикрепить файл
        </p>
      </div>

      <SecondaryButton
        variant="shaded"
        className="sm:hidden border-x"
        customIcon="/images/icons/paperclip-dark.svg"
        onClick={handleAttachClick}
      >
        Прикрепить файл
      </SecondaryButton>

      <input
        className="hidden"
        type="file"
        name="file"
        accept="audio/*, image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <p
        className={`${
          error ? `text-alert` : `text-gray-300`
        } font-text sm:font-semibold font-light text-[14px] min-h-[14px]`}
      >
        {fileName ? `Выбран файл: ${fileName}` : error}
        <span className="opacity-0">@</span>
      </p>
    </div>
  );
});

export default FileAttachment;
