import React, { Component } from 'react';
import Link from 'gatsby-link';
import Navbutton from './Navbutton.js';

class Navmenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      navMenuClass: "navMenu"
    }

    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }

  activate() {
    if(document.documentElement.clientWidth >= 768) {
      this.setState({
        active: true,
        navMenuClass: "navMenu active"
      })
    }
  }

  deactivate() {
    this.setState({
      active: false,
      navMenuClass: "navMenu"
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav onMouseLeave={this.deactivate}>
        <div className={this.state.navMenuClass} >
          <ul className="navMenuList menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Contact</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/admin/">Admin</Link>
            </li>
          </ul>
        </div>
        <Navbutton handleClick={this.activate} />
      </nav>
    )
  }
}

export default Navmenu;