import Form from "../TasksPage/Form";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import TasksList from "../TasksPage/TasksList";
import ExampleTasksButton from "../ExampleTasksButton";
import Input from "../Input";

function TasksPage() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukaj zadanie"
        body={<Input />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
