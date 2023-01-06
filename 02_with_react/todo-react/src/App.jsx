import React from 'react';
import './App.css';
import { CompleteTodos } from './components/CompleteTodos';
import { IncompleteTodos } from './components/IncompleteTodos';
import { InputTodo } from './components/InputTodo';
const { useState } = React

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいいい']);
  const [completeTodos, setCompleteTodos] = useState(['ううううう']);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const todo = newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, todo];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const todo = newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, todo];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
      <IncompleteTodos todos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
