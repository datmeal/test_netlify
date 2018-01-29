import React, { Component } from 'react';
import Link from 'gatsby-link';
import menu from '../img/menu.svg';

class Navbutton extends Component {
  render() {
    return (
      <div className="Navbutton">
        <button>
          <img src={menu} />
        </button>
      </div>
    )
  }
}

export default Navbutton;
