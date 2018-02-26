import React, { Component } from 'react';

class Member extends Component {
  render() {
    return (
      <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
        <figure className="image">
          <img src={this.props.src} alt={this.props.alt} />
        </figure>
      </div>
    );
  }
}

export default Member;
