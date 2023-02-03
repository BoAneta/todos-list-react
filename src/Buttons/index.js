import { Tasks, TasksButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Tasks>
            <TasksButtons
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </TasksButtons>
            <TasksButtons
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </TasksButtons>
        </Tasks>
    ))



export default Buttons;