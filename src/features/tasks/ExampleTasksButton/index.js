import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { TasksButtons } from "../TasksPage/Buttons/styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
        <>
            <TasksButtons
                onClick={() => dispatch(fetchExampleTasks())}
            >
                Pobierz przykładowe zadania
            </TasksButtons>
        </>
    )
};

export default ExampleTasksButton;