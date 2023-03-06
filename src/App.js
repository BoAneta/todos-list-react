import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
                <li>
                    <Link to="/autor">O autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);