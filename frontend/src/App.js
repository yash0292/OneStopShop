import React from 'react';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './user/screens/HomePage.jsx';
import Header from './user/components/Header.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Header title='One Stop Shop' />
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
