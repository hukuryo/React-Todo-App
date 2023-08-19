import React, { useState } from "react";
import "./styles.css";

import { Form } from "./components/Form";
import { TodoLists } from "./components/TodoLists";
import { CompletedTodos } from "./components/CompletedTodos";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [completeTodoList, setCompleteTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const inputText = (e) => {
    setTodoText(e.target.value);
  };

  const setTodoItem = () => {
    const newTodos = [...completeTodoList, todoText];
    setCompleteTodoList(newTodos);
    setTodoText("");
  };

  const deleteTodoItem = (index) => {
    const newTodos = [...completeTodoList];
    newTodos.splice(index, 1);
    setCompleteTodoList(newTodos);
  };

  const completeTodoItem = (index) => {
    const newTodos = [...completeTodoList];
    newTodos.splice(index, 1);

    const InCompletedTodos = [...completedTodoList, completeTodoList[index]];
    setCompleteTodoList(newTodos);
    setCompletedTodoList(InCompletedTodos);
  };

  return (
    <div className="App">
      <Form
        todoText={todoText}
        inputText={inputText}
        setTodoItem={setTodoItem}
      />
      <div className="flex">
        <TodoLists
          completeTodoList={completeTodoList}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem}
        />
        <CompletedTodos completedTodoList={completedTodoList} />
      </div>
    </div>
  );
}
