import React, { Component } from 'react';

class Navmenu extends Component {


  componentDidMount() {
    const navButton = document.querySelector(".Navbutton");
    const navMenu = document.querySelector(".navMenu");
    console.log(navButton);
    navButton.addEventListener("mouseenter", function (e) {
      navMenu.classList.add("active");
    });
    navMenu.addEventListener("mouseleave", function (e) {
      navMenu.classList.remove("active");
    });
  }


  render() {
    return (
      <div className="navMenu">
        <ul className="navMenuList menu-list">
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
      </div>
    )
  }
}

export default Navmenu;