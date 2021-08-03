import Header from 'components/Header';
import ProductFeature from 'features/Product';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
import SongFeature from './features/Song';
import TodoFeature from './features/Todo';
import './index.scss';

function App() {

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/songs" component={SongFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
