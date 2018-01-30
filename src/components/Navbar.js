import React, { Component } from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import Navmenu from './Navmenu.js';

class Navbar extends Component {

  
  componentDidMount() {
  }

  render() {

    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Crowd Cast Logo" width="128px" height="32px" />
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
        </Link>
            <Link className="navbar-item" to="/products">
              Products
        </Link>
          </div>
          <div className="navbar-end">
            <Link className="navbar-item" to="/admin/">
              Admin
            </Link>
            <Navmenu />
          </div>
        </div>
      </nav>
      
    )
  }
}

export default Navbar;
