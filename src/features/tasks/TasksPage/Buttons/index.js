import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTaskEmpty, selectIsEveryTaskDone, selectHidenDone } from "../../tasksSlice";
import { Tasks } from "./styled";
import { Button } from "../Button";

const Buttons = () => {
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHidenDone);

    const dispatch = useDispatch();

    return (
        !areTaskEmpty && (
            <Tasks>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTaskDone}
                >
                    Ukończ wszystkie
                </Button>
            </Tasks>
        )
    );
};



export default Buttons;