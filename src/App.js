import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssVersion from 'page/CssVersion';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/css-version">
          <CssVersion />
        </Route>
        <Route isExact path="/">
          <div>hello world !</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
