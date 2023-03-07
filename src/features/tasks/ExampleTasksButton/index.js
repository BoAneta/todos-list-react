import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import { TasksButtons } from "../TasksPage/Buttons/styled";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <>
            <TasksButtons
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </TasksButtons>
        </>
    )
};

export default ExampleTasksButton;