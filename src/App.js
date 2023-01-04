import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "Przejść na Reacta", done: false },
      { id: 2, content: "Zjeść obiad", done: true },
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
