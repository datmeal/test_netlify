import React, { Component } from 'react';
import Link from 'gatsby-link';

export default class LangMenu extends Component {
  render() {
    const data = this.props.data;
    let switchLanguage = this.props.switchLanguage;
    return (
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{this.props.language}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item" onClick={switchLanguage.bind(this, 'en')}>
              {data.en}
            </div>
            <div className="dropdown-item" onClick={switchLanguage.bind(this, 'ja')}>
              {data.ja}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
