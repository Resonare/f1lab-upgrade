import { useRef, useState, forwardRef } from "react";

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

const FileAttachment = forwardRef(function MyInput(props, ref) {
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
    <div ref={ref}>
      <div
        className="flex gap-10 items-center group cursor-pointer"
        onClick={handleAttachClick}
      >
        <div className="w-[24px] h-[24px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-gray-300"
              d="M18.0101 8.13274L10.9102 15.2326C10.066 16.0769 8.69717 16.0769 7.85292 15.2326C7.0069 14.3866 7.00893 13.0143 7.85745 12.1708L13.3632 6.69754L14.7459 5.31487C16.4282 3.63253 19.1558 3.63253 20.8381 5.31487C22.5205 6.99721 22.5205 9.72482 20.8381 11.4072L19.4763 12.769L14.3148 17.9305C11.6448 20.7117 7.59921 21.1349 4.77061 18.4194C1.97664 15.7372 2.45021 11.716 5.2752 8.89098L10.4164 3.74902"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="group-hover:underline font-text text-[14px] text-gray-300 font-bold leading-tight uppercase">
          Прикрепить файл
        </p>
      </div>

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
        } font-text font-semibold text-[14px] min-h-[14px]`}
      >
        {fileName ? `Выбран файл: ${fileName}` : error}
        <span className="opacity-0">@</span>
      </p>
    </div>
  );
});

export default FileAttachment;
