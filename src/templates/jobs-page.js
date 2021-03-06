import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

@connect(
  state => ({
    locale: state.content.lang,
  }),
  dispatch => ({ switchLangpage: lang => dispatch(actions.switchLangpage(lang)) })
)
class JobsPageTemplate extends React.Component {
  render() {
    const PageContent = this.props.contentComponent || Content;
    return (
      <div>
        <header className="header">
          <div className="container">
            <h2 className="title is-size-3 title-text-weight-bold is-bold-light">{this.props.title}</h2>
          </div>
        </header>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8-desktop">
                  <PageContent className="content" content={this.props.content} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<JobsPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
  />);
};

export const jobsPageQuery = graphql`
  query JobsPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
