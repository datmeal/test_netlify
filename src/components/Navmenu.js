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
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Contact</Link>
            <Link to="/">Blog</Link>
            <Link to="/admin/">Admin</Link>
          </ul>
        </div>
        <Navbutton handleClick={this.activate} />
      </nav>
    )
  }
}

export default Navmenu;