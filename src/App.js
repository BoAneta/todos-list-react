import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./features/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { toAuthor, toTask, toTasks } from "./routes";

export const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);