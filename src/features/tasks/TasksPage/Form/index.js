import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../Input";
import { addTask } from "../../tasksSlice";
import { Button, FormElement } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  }

  return (
    <FormElement onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        ref={inputRef}
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormElement>
  );
}

export default Form;