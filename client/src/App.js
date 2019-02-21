import React, { Component, Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import CorhortFormView from './views/CorhortFormView';
import CorhortsView from './views/CorhortsView';
import CorhortView from './views/CorhortView';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/corhort/new'>Add Corhort</NavLink>
        </nav>
        <div className='app-container'>
          <Route path='/Corhort/new' component={CorhortFormView} />
          <Route exact path='/' component={CorhortsView} />
          <Route path='/api/cohorts/:id' component={CorhortView} />
        </div>
      </>
    );
  }
}

export default App;