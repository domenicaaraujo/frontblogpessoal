import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login  from './paginas/login/Login';


function App() {
  return (
    <Router>
      <NavBar>
        <Switch>
          <div style={{minHeight: '100vh'}}>

          <Router>
            </Router  path='/login'>
            <Login />
          </Router>

            <Router>
            </Router  path='/home'>
            <Home />
          </Router>
        </div>
      </Switch>
    </NavBar>
  </Router >   
  );
}

export default App;
