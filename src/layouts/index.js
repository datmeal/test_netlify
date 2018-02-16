import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Navmenu from '../components/Navmenu';
import './all.sass';

@connect(
  state => ({
    content: state.content,
    language: state.language,
    locale: state.locale,
    feed: state.feed,
  }),
  dispatch => ({ switchLanguage: lang => dispatch(actions.switchLanguage(lang)) })
)
export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      language: this.props.language,
      feed: this.props.feed,
    };
  }
  render() {
    return (
      <div>
        <Helmet title="Home | Crowd Cast, Ltd. - POWER TO THE CROWDS">
          <html className="has-navbar-fixed-top" />
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
        </Helmet>
        <Navbar locale={this.props.locale} language={this.props.language} />
        {/* <LangSwitch /> */}
        <div>{this.props.children()}</div>
        {/* <div>{children()}</div> */}
        {/* <section className="section is-primary">
      <div className="container has-text-centered has-text-white">
        <p>最新情報はSNSでもご覧頂けます</p>
        <div className="sns-icons">
          <i className="fab fa-5x fa-facebook"></i>
          <i className="fab fa-5x fa-twitter"></i>
          <i className="fab fa-5x fa-youtube"></i>
        </div>
        <p className="has-text-weight-bold">クラウドキャスト株式会社<br />Crowd Cast Co., Ltd.</p>
        <br />
        <p>東京都千代田区大手町１－６－１<br />大手町ビル4階 FINOLAB</p>
        <br />
        <a href="https://goo.gl/maps/DbabAyWART42" className="button is-link">
          <span>
            Google Maps
              </span>
          <span className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </span>
        </a>
      </div>
    </section>
    <footer className="footer has-text-centered">
      <Link to="/" className="is-block has-text-primary">お問い合わせ</Link>
      <Link to="/" className="is-block has-text-primary">STAPLEをご利用のお客様</Link>
      <Link to="/" className="is-block has-text-primary">STAPLE for 弥生をご利用のお客様</Link>
      <Link to="/" className="is-block has-text-primary">STAPLE Pulseをご利用のお客様</Link>
      <p className="is-block has-text-primary">Copyright Crowd Cast Co., Ltd. All rights reserved.</p>
    </footer> */}
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};
