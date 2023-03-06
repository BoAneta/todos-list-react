import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectIsEveryTaskDone, selectHidenDone, fetchExampleTasks } from "../tasksSlice";
import { Tasks, TasksButtons } from "./styled";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHidenDone);

    const dispatch = useDispatch();

    return (
        <>
            <TasksButtons
                onClick={() => dispatch(fetchExampleTasks())}
            >
                Pobierz przykładowe zadania
            </TasksButtons>
            {!areTaskEmpty && (
            <Tasks>
                <TasksButtons
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </TasksButtons>
                <TasksButtons
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </TasksButtons>
            </Tasks>
            )}
        </>);
};



export default Buttons;