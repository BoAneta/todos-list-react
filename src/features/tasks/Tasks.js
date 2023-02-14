import { useSelector } from "react-redux";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import { selectTasks } from "./tasksSlice";


function Tasks() {

  const { tasks } = useSelector(selectTasks);

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
          />}
        extraHeaderContent={
          <Buttons
          />}
      />
    </Container>
  );
}

export default Tasks;
