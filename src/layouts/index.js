import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Navmenu from '../components/Navmenu';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <html className="has-navbar-fixed-top" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
