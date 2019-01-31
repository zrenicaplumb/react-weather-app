import { browserHistory, Router, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import {Home} from './views/Home';
import {About} from './views/About';
import {NoMatch} from './views/NoMatch';
import App from './views/Home/App';
import {Navbar} from './components/Navbar/Navbar';
import ForecastHourly from './views/ForecastHourly/ForecastHourly';




export const Routes = () => {
      return (
            <div>
                  <Navbar/>
                  <Switch>
                        <Route exact path="/Home" component={App}/>
                        <Route exact path="/">
                              <Redirect to="/Home"/>
                        </Route>
                        <Route exact path="/ForecastHourly" component={ForecastHourly}/>
                        <Route component={NoMatch}/>
                        
                  </Switch>
            </div>
      );
};