import React, { Component } from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo_crowd-cast.svg';
import Navmenu from './Navmenu.js';

class Navbar extends Component {

  
  componentDidMount() {
  }

  render() {

    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Crowd Cast Logo" width="211" height="32" />
              </figure>
            </Link>
          </div>
          <div className="navbar-end">
            <Navmenu />
          </div>
        </div>
      </nav>
      
    )
  }
}

export default Navbar;
