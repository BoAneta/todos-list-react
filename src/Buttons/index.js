import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
        tasks.length > 0 && (
                <div className="tasks">
                        <button onClick={toggleHideDone} className="tasks__buttons">
                                {hideDone ? "Pokaż" : "Ukryj"} ukończone
                        </button>
                        <button className="tasks__buttons"
                                disabled={tasks.every(({ done }) => done)}
                        >
                                Ukończ wszystkie
                        </button>
                </div>
        ))



export default Buttons;