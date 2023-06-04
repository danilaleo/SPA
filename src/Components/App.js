// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import AboutMe from './components/AboutMe/AboutMe';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/about" component={AboutMe} />
          <Route path="/user/:userId" component={PostDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
