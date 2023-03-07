import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./features/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

export const App = () => (
    <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
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
    </HashRouter>
);