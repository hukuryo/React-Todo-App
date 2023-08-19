import React from "react";

export const CompletedTodos = (props) => {
  const { completedTodoList } = props;
  return (
    <div>
      <ul>
        {completedTodoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
