import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import RepoContainer from './containers/RepoContainer';

class App extends React.Component {
  render() {
    // return <RepoContainer />;
    return (
      <Router>
        <Switch>
          <Route path="/repo">
            <RepoContainer />
          </Route>
          <Route path="/123">
            {123}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
