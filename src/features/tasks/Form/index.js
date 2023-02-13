import { useRef, useState } from "react";
import { Button, FormElement, Input} from "./styled";

const Form = ({addNewTask}) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!newTaskContent.trim()) {
      return;
    }
    addNewTask(newTaskContent.trim());
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
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormElement>
  );
}

export default Form;