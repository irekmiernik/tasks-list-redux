import { HashRouter, Redirect, NavLink, Switch, Route } from "react-router-dom";
import { Tasks } from "./features/tasksList/Tasks";
import { TaskPage } from "./features/tasksList/TaskPage";
import { AuthorPage } from "./features/author/AuthorPage";

export default function App() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="act" to="/zadania">Lista zadań</NavLink>
          </li>
          <li>
            <NavLink activeClassName="act" to="/autor">O autorze</NavLink>
          </li>

        </ul>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <Tasks />
          </Route>
          <Route path="/autor">
            <AuthorPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  )
}