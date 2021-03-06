import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssVersion from 'page/CssVersion';
import JsVersion from 'page/JsVersion';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/css-version">
          <CssVersion />
        </Route>
        <Route path="/js-version">
          <JsVersion />
        </Route>
        <Route isExact path="/">
          <div>hello world !</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
