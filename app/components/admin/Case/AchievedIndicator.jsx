const AchievedIndicator = ({ index, numbersInCase }) => {
  return (
    <div className="border border-dashed p-15 my-10">
      <p className="font-expanded font-extrabold text-lg">
        Столбец {index + 1}
      </p>
      <input
        defaultValue={numbersInCase[index]?.id}
        type="hidden"
        name={`numberInCaseId${index}`}
      />
      <div className="mb-10">
        <label htmlFor={`numberInCaseTitle${index}`}>Заголовок</label>
        <input
          defaultValue={numbersInCase[index]?.title}
          type="text"
          name={`numberInCaseTitle${index}`}
          id={`numberInCaseTitle${index}`}
          className="border border-gray-200 px-10 text-md font-text w-full"
        />
      </div>
      <div className="mb-10">
        <label htmlFor={`numberInCaseBody${index}`}>Описание</label>
        <textarea
          defaultValue={numbersInCase[index]?.body}
          type="text"
          rows={5}
          name={`numberInCaseBody${index}`}
          id={`numberInCaseBody${index}`}
          placeholder="Текст"
          className="border border-gray-200 px-10 text-md font-text w-full"
        />
      </div>
    </div>
  );
};

export default AchievedIndicator;
