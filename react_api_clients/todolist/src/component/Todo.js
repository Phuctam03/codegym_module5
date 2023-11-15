import { useState, useEffect } from "react";
import * as TodoService from "../service/TodoService";
import { formik, Field, Form, Formik } from "formik";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const todoInit = {
    id: 0,
    name: "",
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    let temp = await TodoService.getAll();
    console.log(temp);
    setTodos(temp);
  };

  const handleSubmit = async (value) => {
    await TodoService.save(value);
  };

  return (
    <div>
      <Formik
        initialValues={todoInit}
        onSubmit={(value) => {
          handleSubmit(value);
        }}
      >
        <Form>
          <h1 style={{ color: "red" }}>Todo List</h1>
          <Field type="text" name="name"></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </div>
  );
}
