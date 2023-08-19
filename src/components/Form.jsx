import React from "react";

export const Form = (props) => {
  const { todoText, inputText, setTodoItem } = props;

  return (
    <div>
      <input value={todoText} onChange={inputText} />
      <br />
      <button onClick={setTodoItem}>登録</button>
    </div>
  );
};
