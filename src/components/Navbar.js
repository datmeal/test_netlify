import React, { Component } from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo_crowd-cast.svg';
import Navmenu from './Navmenu.js';
import LangMenu from './LangMenu.js';
import { connect } from 'react-redux';

import actions from './actions';

@connect(
  state => ({ content: state.content }),
  dispatch => ({ switchLanguage: lang => dispatch(actions.switchLanguage(lang)) })
)
class Navbar extends Component {
  componentDidMount() {}

  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    const locale = this.props.locale;
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Crowd Cast Logo" width="211" height="32" />
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
            <LangMenu
              data={content.page.langmenu}
              switchLanguage={switchLanguage}
              locale={locale}
              language={content.language}
            />
          </div>
          <div className="navbar-end">
            <Navmenu />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
