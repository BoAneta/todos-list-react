import "./style.css";

const List = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                className={`taskList__item
            ${task.done && hideDoneTasks ? " tasks__buttons--hide" : ""}`}>
                <button className={`taskList__button taskList__button--done`}
                key={task.id}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`task__content
            ${task.done ? " task__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className={`taskList__button taskList__button--remove`}>🗑</button>
            </li>
        ))}
    </ul >
);

export default List;
