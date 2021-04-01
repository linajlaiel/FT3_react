import './App.css';
import React from 'react';
import Nav from './Nav'
import Menu from './Menu'
import Ban from './Baniere'
import ReactDOM from 'react-dom';
import Render from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Demo5 from './Calendar'


function App() {
  return (
    <body>
      <Router>
          <Menu/>
          <Route path='/' exact component={Ban}/>
          <Route path='/Calendar' component={Demo5}/>
          
        
      </Router>
   </body>
  );
}

export default App;

