import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Table from './Components/Table/Table'


// Desarrollado por Samuel Sanabria
function App() {


  return (

    <BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/table/:path"
              component={Table} />
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
