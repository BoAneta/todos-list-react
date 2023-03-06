import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHidenDone } from "../../tasksSlice";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHidenDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        done
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}
                    >
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>
            ))}
        </List>
    );
}

export default TasksList;
