import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';


import "./App.css";
import Home from "./pages/Home";
import { Properties } from './pages/Properties';



function App() {
  return (

    <div className="App">
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/properties' component={Properties} />

      </Switch>
    </div>


  );
}

export default App;
