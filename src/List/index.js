import "./style.css";

const List = ({ tasks, hideDone, removeTask }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList__item
            ${task.done && hideDone ? " tasks__buttons--hide" : ""}`}
            >
                <button className={`taskList__button taskList__button--done`}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`task__content
            ${task.done ? " task__content--done" : ""}`}
                >
                    {task.content}
                </span>
                <button
                    className={`taskList__button taskList__button--remove`}
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default List;
