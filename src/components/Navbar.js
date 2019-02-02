import React from 'react';
import {Link} from 'react-router-dom';
// import './Navbar.css';

export const Navbar = () => {
      return(
            <div>
                  <ul>
                        <li>
                              <Link to="/Home">Home</Link>
                        </li>
                        <li>
                              <Link to="/WeatherApp">WeatherApp</Link>
                        </li>
                        <li>
                              <Link to="/RecipeApp">RecipeApp</Link>
                        </li>
                        
                  </ul>
                  <hr/>
            </div>
      )
}

