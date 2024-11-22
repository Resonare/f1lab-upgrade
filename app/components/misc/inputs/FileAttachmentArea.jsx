import { useContext } from "react";

import { LazyImage } from "../../LazyImage";
import Cancel from "../../modals/Cancel";
import SecondaryButton from "../../buttons/SecondaryButton";

import { ThemeContext } from "../../../store/theme-context";

const FileAttachmentArea = ({
  fileAttachmentInputRef,
  isDragOver,
  setIsDragOver,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);

    const hiddenInput = fileAttachmentInputRef.current.querySelector("& input");

    // Required for type conversion
    const file = event.dataTransfer.files[0];
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    hiddenInput.files = dataTransfer.files;

    // Invoke change event manually
    hiddenInput.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    fileAttachmentInputRef.current.querySelector("div").click();
  };

  const handleClose = () => {
    setIsDragOver(false);
  };

  return (
    <div className={isDragOver ? `opacity-1` : `opacity-0 pointer-events-none`}>
      <div
        className={`${bgColor} z-[11] absolute top-0 left-0 h-full w-full flex flex-col gap-30 items-center justify-center border border-dashed border-gray-200 text-gray-300 text-xl font-light font-text leading-relaxed`}
        onDrop={handleDrop}
      >
        <div className="flex flex-col gap-30 items-center justify-center z-[1]">
          <div className="flex flex-col gap-10 items-center">
            <LazyImage src="/images/icons/attach-file.svg" />
            <div className="flex flex-col items-center">
              <p>Перетащите сюда файл</p>
              <p>*PDF; *JPEG; *PNG; *PPTX; *EXEL и т.д.</p>
            </div>
            <p>или</p>
            <SecondaryButton
              customIcon="/images/icons/desktop-upload.svg"
              className="text-gray-400 border-x"
              onClick={handleClick}
            >
              Загрузите с компьютера
            </SecondaryButton>
          </div>

          <Cancel className="w-40 h-40" onClick={handleClose} />
        </div>

        <div className="absolute w-full h-full left-0 top-0 bg-striped z-[0]"></div>
      </div>
    </div>
  );
};

export default FileAttachmentArea;
