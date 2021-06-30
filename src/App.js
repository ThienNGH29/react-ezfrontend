import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import SongFeature from "./features/Song";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <h2>Header</h2>
      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/songs">Song</NavLink></p>
      
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to ="/posts/:postId" exact />

        <Route path="/" component={SongFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/songs" component={SongFeature} />

        <Route component={NotFound} />
      </Switch>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
