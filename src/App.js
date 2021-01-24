import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Home from './components/home';
import Navbar2 from './components/navbar2'
import Agri from './components/agri'
import Safety from './components/safety'
import Environment from './components/environment'
import Health from './components/health'
import Social from './components/social'
import Prize from './components/prize'
import Register from './components/registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contact'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route path='/agri' component={Agri}/>
          <Route path='/safety' component={Safety}/>
          <Route path='/environment' component={Environment}/>
          <Route path='/health' component={Health}/>
          <Route path='/social' component={Social}/>
          <Route path='/prize' component={Prize}/>
          <Route path='/Register' component={Register}/>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Contact/>
      </Router>
    </>
  );
}

export default App;
