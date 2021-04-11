import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Top from './pages/Top';

const App: React.VFC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Top} />
        </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(<App></App>, document.getElementById("app"));