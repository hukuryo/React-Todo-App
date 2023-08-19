import React from "react";

export const TodoLists = (props) => {
  const { completeTodoList, deleteTodoItem, completeTodoItem } = props;
  return (
    <div>
      <ul>
        {completeTodoList.map((todo, index) => (
          <li className="todoItem" key={index}>
            {todo}
            <button className="Btn" onClick={() => deleteTodoItem(index)}>
              削除
            </button>
            <button className="Btn" onClick={() => completeTodoItem(index)}>
              完了
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
