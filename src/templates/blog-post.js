import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';
import Footer from '../components/Footer';

export const BlogPostTemplate = ({ content, contentComponent, description, title, helmet }) => {
  const PostContent = contentComponent || Content;

  return (
    <div>
      <header className="header">
        <div className="container">
          <h2 className="title is-size-3 title-text-weight-bold is-bold-light">NEWS</h2>
        </div>
      </header>
      <section className="section section--gradient">
        {helmet || ''}
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8-desktop">
              <div className="content">
                <h1 className="title is-size-3 title-text-weight-bold is-bold-light">{title}</h1>
                { /*<p>{description}</p>*/ }
                <PostContent content={content} />
                  <div class="text-center">
                    <a class="button is-medium is-primary is-outlined pl5 pr5 mt3" href="/contact/">お問い合わせ</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
    />
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        language
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
