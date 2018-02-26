import React, { Component } from 'react';
import Link from 'gatsby-link';
import menuIcon from '../img/menu.svg';
import closeIcon from '../img/close.svg';

export default class Navmenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      navMenuClass: 'navMenu',
      buttonIcon: menuIcon,
    };

    this.clickButton = this.clickButton.bind(this);
    this.hoverButton = this.hoverButton.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }

  clickButton() {
    if (this.state.active === false) {
      this.setState({ active: true, navMenuClass: 'navMenu active', buttonIcon: closeIcon });
    } else {
      this.setState({ active: false, navMenuClass: 'navMenu', buttonIcon: menuIcon });
    }
    // if(document.documentElement.clientWidth >= 768) {
    //   this.setState({
    //     active: true,
    //     navMenuClass: "navMenu active"
    //   })
    // }
  }

  hoverButton() {
    this.setState({ active: true, navMenuClass: 'navMenu active', buttonIcon: closeIcon });
    // if(document.documentElement.clientWidth >= 768) {
    //   this.setState({
    //     active: true,
    //     navMenuClass: "navMenu active"
    //   })
    // }
  }

  deactivate() {
    this.setState({
      active: false,
      navMenuClass: 'navMenu',
      buttonIcon: menuIcon,
    });
  }

  componentDidMount() {}

  render() {
    return (
      <nav onMouseLeave={this.deactivate}>
        <div className={this.state.navMenuClass}>
          <ul className="navMenuList menu-list">
            {/*<li>
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
              <Link to="/contacts/">Contact</Link>
            </li>*/}
            <li>
              <Link to="/admin/">Admin(temporary)</Link>
            </li>
          </ul>
        </div>
        <Navbutton handleClick={this.clickButton} handleHover={this.hoverButton} icon={this.state.buttonIcon} />
      </nav>
    );
  }
}

class Navbutton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  handleHover(e) {
    this.props.handleHover();
  }

  render() {
    return (
      <div>
        <div className="Navbutton" onClick={() => this.handleClick()} onMouseEnter={() => this.handleHover()}>
          <button>
            <img src={this.props.icon} alt="" />
          </button>
        </div>
      </div>
    );
  }
}
