import { useSelector } from "react-redux";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import TasksList from "./TasksList";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";


function Tasks() {

  const { tasks } = useSelector(selectTasks);
  const {
    // tasks,
    // hideDone,
    // toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
}

export default Tasks;
