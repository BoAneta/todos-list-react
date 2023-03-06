import { HashRouter, Link, Switch, Route } from "react-router-dom";
import AuthorPage from "./features/tasks/AuthorPage";
import Tasks from "./features/tasks/Tasks";

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
                <Tasks />
                </Route>
                <Route path="/autor">
                <AuthorPage />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);