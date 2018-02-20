import React, { Component } from 'react';

class Member extends Component {

  render() {
    return (
      <div className="">
        <figure className="image is-240x240">
          <img src={this.props.src} alt={this.props.alt} />
        </figure>
      </div>
    );
  }
}

export default Member;