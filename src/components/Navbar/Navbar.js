import React from 'react';
import {Link} from 'react-router-dom';
// import './Navbar.css';

export const Navbar = () => {
      return(
            <div>
                  <h5>Navbar</h5>
                  <ul>
                        <li>
                              <Link to="/Home">Home</Link>
                        </li>
                        <li>
                              <Link to="/About">About</Link>
                        </li>
                        
                  </ul>
                  <hr/>
            </div>
      )
}

