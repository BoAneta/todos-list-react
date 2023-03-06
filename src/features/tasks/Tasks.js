import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import ExampleTasksButton from "./ExampleTasksButton";

function Tasks() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <ExampleTasksButton />
        }
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
