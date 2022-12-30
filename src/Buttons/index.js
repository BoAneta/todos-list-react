import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
tasks.length > 0 && (
    <div className="tasks">
            <button className="tasks__buttons">
    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button className="tasks__buttons"
    disabled={tasks.every(({ done }) => done)}
   >
    Ukończ wszystkie
    </button>
        </div>
))
   


export default Buttons;