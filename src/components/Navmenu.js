import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class Navmenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false,
      navMenuClass: "navMenu",
      buttonIcon: "fas fa-lg fa-bars"
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
              <Link to="/blog">News</Link>
            </li>
            <li>
              <Link to="/about/">About Us</Link>
            </li>
            <li>
              <Link to="/jobs/">Jobs</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
            <li>
              <Link to="/admin/">Admin(temporary)</Link>
            </li>
          </ul>
        </div>
        <Navbutton handleClick={this.activate} icon={this.state.buttonIcon} />
      </nav>
    )
  }
}

class Navbutton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  handleHover(e) {
    this.props.handleClick();
  }

  render() {
    return (
      <div>
        <div className="Navbutton" onClick={() => this.handleClick()} onMouseEnter={() => this.handleHover()}>
          <button>
            <i className={this.props.icon} />
          </button>
        </div>
      </div>
    )
  }
}