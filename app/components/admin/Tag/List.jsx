import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import Tag from "../../misc/Tag";

import TagForm from "./Form";
import DeleteTag from "./Delete";

import PropTypes from "prop-types";

export default function ListTags({ items = [] }) {
  const [addTag, setAddTag] = useState(false);
  const [showTag, setShowTag] = useState({ tag: {}, active: false });
  const [deleteTag, setDeleteTag] = useState({
    tag: {},
    active: false,
  });

  return (
    <>
      {items?.length > 0 && (
        <table className="table-auto w-full text-lg ">
          <thead>
            <tr>
              <th className="text-start">Наименование</th>
              <th className="text-start">Цвет</th>
              <th className="text-start">Ссылка</th>
              <th className="text-start">Внешний вид</th>
            </tr>
          </thead>
          <tbody>
            {items.map((tag) => (
              <tr key={tag.id} className="border-y ">
                <td>{tag.title}</td>
                <td>{tag.color}</td>
                <td>{tag.link}</td>
                <td>
                  <Tag className={`bg-${tag.color} w-fit`} hoverable={false}>
                    {tag.title}
                  </Tag>
                </td>

                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowTag({ tag: tag, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteTag({ tag: tag, active: true });
                        }}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {items.length === 0 && (
        <div className="text-2xl font-bold">Не найдено ни одного тэга</div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddTag(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addTag && (
        <TagForm
          intent="add"
          closeHandler={() => {
            setAddTag(false);
          }}
        />
      )}
      {showTag.active && (
        <TagForm
          tag={showTag.tag}
          intent="update"
          closeHandler={() => {
            setShowTag({ tag: {}, active: false });
          }}
        />
      )}
      {deleteTag.active && (
        <DeleteTag
          tag={deleteTag.tag}
          closeHandler={() => {
            setDeleteTag({ tag: {}, active: false });
          }}
        />
      )}
    </>
  );
}

ListTags.propTypes = {
  items: PropTypes.array,
};
