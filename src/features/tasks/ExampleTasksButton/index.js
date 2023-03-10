import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import { Button } from "../TasksPage/Button";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <>
            <Button
                disabled={loading}
                onClick={() => dispatch(fetchExampleTasks())}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </>
    )
};

export default ExampleTasksButton;