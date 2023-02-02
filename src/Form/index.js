import { useState } from "react";
import { Button, FormElement, NewTask } from "./styled";

const Form = ({addNewTask}) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!newTaskContent.trim()) {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }

  return (
    <FormElement onSubmit={onFormSubmit}>
      <NewTask
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormElement>
  );
}

export default Form;