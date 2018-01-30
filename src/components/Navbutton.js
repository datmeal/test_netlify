import React, { Component } from 'react';
import menu from '../img/menu.svg';

class Navbutton extends Component {
  constructor(props) {
    super(props);


    this.state = {
      hover: false
    }

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
        <div className="Navbutton">
          <button onClick={() => this.handleClick()} onMouseEnter={() => this.handleHover()}>
            <img src={menu} />
          </button>
        </div>
      </div>
    )
  }
}

export default Navbutton;
