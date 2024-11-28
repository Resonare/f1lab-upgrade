import { useState } from "react";
import ImagePicker from "../ImagePicker";
import TagPicker from "../TagPicker";

import PropTypes from "prop-types";

const TaskDone = ({
  index,
  doneInCase,
  handleSelectTag,
  selectedTags,
  tags,
}) => {
  const [iconPath, setIconPath] = useState(doneInCase[index]?.iconPath || "");
  const [mobileIconPath, setMobileIconPath] = useState(
    doneInCase[index]?.mobileIconPath || ""
  );

  return (
    <div className="border border-dashed p-15 my-10">
      <input
        defaultValue={doneInCase[index]?.id}
        type="hidden"
        name={`doneInCaseId${index}`}
        id={`doneInCaseId${index}`}
      />
      <div className="mb-10">
        <label htmlFor={`doneInCaseId${index}`}>Заголовок</label>
        <input
          defaultValue={doneInCase[index]?.title}
          type="text"
          name={`doneInCaseTitle${index}`}
          className="border border-gray-200 px-10 text-md font-text w-full"
        />
      </div>
      <div className="mb-10">
        <label htmlFor={`doneInCaseId${index}`}>Описание</label>
        <textarea
          defaultValue={doneInCase[index]?.description}
          type="text"
          rows={5}
          name={`doneInCaseDescription${index}`}
          className="border border-gray-200 px-10 text-md font-text w-full"
        />
      </div>
      <div className="mb-10">
        <p>Тэги</p>
        <TagPicker
          tags={tags}
          selectedTags={selectedTags}
          handleSelectTag={handleSelectTag}
        />
      </div>
      <div className="mb-10">
        <label htmlFor={`doneInCaseIconPath${index}`}>
          Иконка для десктопов
        </label>
        <input
          hidden
          value={iconPath}
          onChange={() => {}}
          type="text"
          name={`doneInCaseIconPath${index}`}
          id={`doneInCaseIconPath${index}`}
          placeholder="Выберите иконку..."
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
        />
        <ImagePicker
          value={iconPath}
          onSelect={setIconPath}
          path="/images/icon-pack"
        />
      </div>
      <div className="mb-10">
        <label htmlFor={`doneInCaseMobileIconPath${index}`}>
          Иконка для мобильных
        </label>
        <input
          hidden
          value={mobileIconPath}
          onChange={() => {}}
          type="text"
          name={`doneInCaseMobileIconPath${index}`}
          id={`doneInCaseMobileIconPath${index}`}
          placeholder="Выберите иконку..."
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full "
        />
        <ImagePicker
          mobile
          path="/images/icon-pack"
          value={mobileIconPath}
          onSelect={setMobileIconPath}
        />
      </div>
    </div>
  );
};

TaskDone.propTypes = {
  index: PropTypes.number,
  doneInCase: PropTypes.array,
};

export default TaskDone;
