import React from 'react';
import './App.scss';
import Form from './components/Form';
import Palette from './components/Palette';
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <nav>
            <ul>
                <li>
                    <NavLink exact={true} activeClassName="selected" to="/">Форма</NavLink >
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/palette">Палитра</NavLink >
                </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <Form />
            </Route>
            <Route  path="/palette">
                <Palette />
            </Route>
        </Switch>
       </div> 
  );
}

export default App;
