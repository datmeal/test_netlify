import React, { Component } from 'react';

class Member extends Component {

  render() {
    return (
      <div className="level-item">
        <figure className="image is-128x128">
          <img src={this.props.src} alt={this.props.alt} />
        </figure>
      </div>
    );
  }
}

export default Member;