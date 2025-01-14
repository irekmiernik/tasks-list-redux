import { HashRouter, Redirect, Switch, Route } from "react-router-dom";
import { StyledUl } from "./styled";
import { StyledNavLink } from "./styled";
import { Tasks } from "./features/tasksList/Tasks";
import { TaskPage } from "./features/tasksList/TaskPage";
import { AuthorPage } from "./features/author/AuthorPage";
import { toTask, toTasks, toAuthor } from "./routs";


export default function App() {
  return (
    <HashRouter>
      <nav>
        <StyledUl $pages>
          <li>
            <StyledNavLink to={toTasks()}>Lista zadań</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={toAuthor()}>Informacja o autorze</StyledNavLink>
          </li>
        </StyledUl>

        <Switch>
          <Route path={toTask()}>
            <TaskPage />
          </Route>
          <Route path={toTasks()}>
            <Tasks />
          </Route>
          <Route path={toAuthor()}>
            <AuthorPage />
          </Route>
          <Route exact path="/">
            <Redirect to={toTasks()} />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  )
}