import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Page/Main';
import { MainContainer } from './components/Layout';

function App() {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </MainContainer>
    </Router>

  );
}

export default App;
