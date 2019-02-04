import { browserHistory, Router, Route, Redirect, Switch } from 'react-router-dom';
import React from 'react';
import {Home} from './views/Home';
import {NoMatch} from './views/NoMatch';
import WeatherApp from './views/WeatherApp/WeatherApp';
import RecipeApp from './views/RecipeApp/RecipeApp';
import {Navbar} from './components/Navbar';
import ForecastHourly from './views/ForecastHourly/ForecastHourly';
import RecipeDetails from './components/RecipeApp/RecipeDetails';



export const Routes = () => {
      return (
            <div>
                  <Navbar/>
                  <Switch>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path="/">
                              <Redirect to="/Home"/>
                        </Route>
                        <Route exact path="/WeatherApp" component={WeatherApp}/>
                        <Route exact path="/RecipeApp" component={RecipeApp}/>
                        <Route exact path="/RecipeDetails/:label" component={RecipeDetails}/>

                        <Route exact path="/ForecastHourly/:id" component={ForecastHourly}/>
                        <Route component={NoMatch}/>
                        
                  </Switch>
            </div>
      );
};