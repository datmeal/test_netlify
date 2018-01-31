import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Navmenu from '../components/Navmenu';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Crowd Cast, Ltd. - POWER TO THE CROWDS">
      <html className="has-navbar-fixed-top" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
