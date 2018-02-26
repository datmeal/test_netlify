import React from 'react';
import { AboutPageTemplate } from '../../templates/jobs-page';

const JobsPagePreview = ({ entry, widgetFor }) => (
  <JobsPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default AboutPagePreview;
