import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import { connect } from 'react-redux';

import Blog from '../components/Blog';
import Member from '../components/Member';
import Footer from '../components/Footer';

import gd from '../img/gd.png';

@connect(
  state => ({
    content: state.content,
    feed: state.feed,
    members: state.members,
    blogs: state.blogs,
  }),
  dispatch => ({ switchLanguage: lang => dispatch(actions.switchLanguage(lang)) })
)
export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  componentDidMount() {}

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const text = this.props.content.page.home;
    const locale = this.props.content.lang;
    let dateFormat = this.props.content.dateFormat;

    return (
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container hero-container">
              <div className="hero-left is-hidden-touch">
                <h1 className="is-size-2 has-text-weight-semibold catchphrase">{text.header}</h1>
              </div>
              <div className="hero-right is-hidden-touch">
                <a href="https://staple.jp/landing/" target="_blank">
                  <img src="/img/staple_gooddesign.svg" width="200" height="" alt="Staple Logo" />
                </a>
              </div>
              <div className="hero is-hidden-desktop">
              <h1 className="is-size-4 has-text-weight-semibold mb2">{text.header}</h1>
              <a href="https://staple.jp/landing/" target="_blank" class="textcenter">
                <img src="/img/staple_gooddesign.svg" width="200" height="" alt="Staple Logo" />
              </a>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="mobile-buttons is-flex is-hidden-desktop">
          <div className="is-flex">
            <figure className="image">
              <img src="/img/staple_logo.png" width="91" height="32" alt="Staple Logo" />
            </figure>
            <figure className="image">
              <img src="/img/good-design-award2017.png" width="132" height="42" alt="Good Design" />
            </figure>
          </div>
          <div className="is-block">
            <img src="/img/apple-store.svg" height="48" alt="Apple Store" />
          </div>
          <div className="is-block">
            <img src="/img/google-play.svg" height="48" alt="Google Play" />
          </div>
        </div>*/}
        <section className="section">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={() => this.handleScriptLoad()}
          />
          <div className="container">
            <h1 className="title has-text-primary has-text-centered-touch">NEWS</h1>
            {posts
              .filter(
                post =>
                  post.node.frontmatter.templateKey === 'blog-post' && post.node.frontmatter.language === `${locale}`
              )
              .map(({ node: post }) => (
                <div className="content columns" style={{}} key={post.id}>
                  <p className="column is-one-fifth is-marginless has-text-primary has-text-weight-bold">
                    {post.frontmatter.date}
                  </p>
                  <p className="column">
                    <Link className="has-text-primary" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  {/* <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.frontmatter.path}>
                      Keep Reading →
                    </Link>
                  </p> */}
                </div>
              ))}
            <div className="level">
              <div className="level-item">
                <Link to="/" className="button is-medium is-primary is-outlined pl2 pr2 mt05">
                  ニュース一覧
                </Link>
              </div>
            </div>
            {/* <Scrolldown targetId="services"/> */}
          </div>
        </section>
        <section className="section is-light" id="services">
          <div className="container">
            <h1 className="title has-text-primary has-text-centered-touch">SERVICES</h1>
            <div className="columns">
              <div className="column service-column">
                <a href="https://staple.jp/landing/" target="_blank" className="box pt3 pb3">
                  <figure className="image is-128x128">
                    <img src="/img/staple_vertical.svg" alt="モバイルアプリSTAPLE" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">Staple</h2>
                  <p className="has-text-primary mt05">法人向け、スマホ・IC経費精算</p>
                </a>
              </div>
              <div className="column service-column">
                <a href="https://expense.staple.jp/yayoi/" target="_blank" className="box pt3 pb3">
                  <figure className="image is-128x128">
                    <img src="/img/StapleYayoi.png" alt="Staple for 弥生" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">Staple for 弥生</h2>
                  <p className="has-text-primary mt05">小規模向け無料経費精算</p>
                </a>
              </div>
              <div className="column service-column">
                <a href="https://play.google.com/store/apps/details?id=jp.crowdcast.staple_reader&hl=ja" target="_blank" className="box pt3 pb3">
                  <figure className="image is-128x128">
                    <img src="/img/StapleCard.png" alt="Staple Reader" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">Staple Reader</h2>
                  <p className="has-text-primary mt05">交通系ICカード読取専用アプリ</p>
                </a>
              </div>
            </div>
            {/*<div className="more-button dropshadow">
              <Link to="/" className="button dropshadow">
                <span className="mt05 mr1 mb05 ml1">他のサービスを見る</span>
                <span className="icon is-primary">
                  <i className="fas fa-caret-right fa-2x" />
                </span>
              </Link>
            </div>*/}
            {/* <Scrolldown targetId="members" /> */}
          </div>
        </section>
        <section className="section" id="members">
          <div className="container">
            <h1 className="title has-text-primary has-text-centered-touch">MEMBERS</h1>
            <div className="columns is-gapless is-multiline membersthumbs">
              {this.props.members.map(member => {
                return <Member alt={member.name} src={member.imgUrl} />;
              })}
            </div>
            <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5 has-text-centered mt2">
              {text.future}
            </h2>
            <div className="level">
              <div className="level-item">
                <div className="buttons">
                  <Link to="/team" className="button is-medium is-primary is-outlined pl2 pr2 mt05">
                    メンバーのプロフィール
                  </Link>
                </div>
              </div>
            </div>
            <div className="more-button dropshadow">
              <Link to="/jobs/" className="button is-light">
                <span className="mt05 mr1 mb05 ml1">採用情報を見る</span>
                <span className="icon is-link">
                  <i className="fas fa-caret-right fa-2x" />
                </span>
              </Link>
            </div>
            {/* <Scrolldown targetId="blogs" /> */}
          </div>
        </section>
        <section className="section is-primary" id="blogs">
          <div className="container">
            <h1 className="title has-text-white">BLOGS</h1>
            <div className="columns is-gapless is-multiline blogsthumbs">
              {this.props.blogs.map(blog => {
                return <Blog alt={blog.name} src={blog.imgUrl} title={blog.title} author={blog.author} date={blog.date} link={blog.link} />;
              })}
            </div>
            <div className="more-button dropshadowblack">
              <a href="https://medium.com/@t.hoshikawa" target="_blank" className="button is-light">
                <span className="mt05 mr1 mb05 ml1">ブログ一覧</span>
                <span className="icon is-link">
                  <i className="fas fa-caret-right fa-2x" />
                </span>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY. MM. DD")
            path
            language
          }
        }
      }
    }
  }
`;

// date(formatString: "MMMM DD, YYYY")
