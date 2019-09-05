import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer } from './components/Layout';

import Main from './components/Page/Main';
import About from './components/Page/About';
import Blog from './components/Page/Blog';
import Price from './components/Page/Price';
import Contact from './components/Page/Contact';
import Specializations from './components/Page/Specializations';

function App() {
  return (
    <Router>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/specializations" component={Specializations} />
        </Switch>
      </MainContainer>
    </Router>

  );
}

export default App;
