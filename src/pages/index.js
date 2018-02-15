import React from 'react';
import Link from 'gatsby-link';
import Script from 'react-load-script';
import graphql from 'graphql';
import gd from '../img/gd.png';
import Member from '../components/Member';
import Footer from '../components/Footer';
//import Scrolldown from '../components/Scrolldown.js';
import { connect } from 'react-redux';

@connect(
  state => ({ content: state.content }),
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
                <h1 className="title catchphrase">{text.header}</h1>
                <br />
                <h2 className="subtitle salescopy">{text.subtitle}</h2>
              </div>
              <div className="hero-right is-hidden-touch">
                <div>
                  <img src={gd} width="112" height="" alt="Good Design" />
                </div>
                <div>
                  <img src="/img/ipx.png" width="151" height="264" alt="iPhoneX" />
                </div>
                <div className="flex-column">
                  <p />
                  <p />
                  <img src="/img/logo_short.svg" width="120" height="" alt="Staple Logo" />
                  <p />
                  <img src="/img/apple-store.svg" height="40" alt="Apple Store" />
                  <img src="/img/google-play.svg" height="40" alt="Google Play" />
                  <p />
                </div>
              </div>
              <div className="hero-mobile is-hidden-desktop">
                <figure className="image">
                  <img src="/img/ipx.png" width="168" height="337" alt="iPhoneX" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-buttons is-flex is-hidden-desktop">
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
        </div>
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
                <Link to="/" className="button is-medium is-primary is-outlined pl2 pr2">
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
                    <img src="/img/staple_vertical.png" alt="法人向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">法人向け</h2>
                  <p className="has-text-primary mt05">スマホ・IC経費精算</p>
                </a>
              </div>
              <div className="column service-column">
                <a href="https://expense.staple.jp/yayoi/" target="_blank" className="box pt3 pb3">
                  <figure className="image is-128x128">
                    <img src="/img/StapleYayoi.png" alt="小規模向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">小規模向け</h2>
                  <p className="has-text-primary mt05">無料の弥生向け経費精算</p>
                </a>
              </div>
              <div className="column service-column">
                <a href="https://staple.hanjohanjo.jp/" target="_blank" className="box pt3 pb3">
                  <figure className="image is-128x128">
                    <img src="/img/StapleCard.png" alt="個人事業・中小零細向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary mt1">個人事業・中小零細向け</h2>
                  <p className="has-text-primary mt05">無料の資金繰り計画支援</p>
                </a>
              </div>
            </div>
            <div className="more-button dropshadow">
              <Link to="/" className="button dropshadow">
                <span className="mt05 mr1 mb05 ml1">他のサービスを見る</span>
                <span className="icon is-primary">
                  <i className="fas fa-caret-right fa-2x" />
                </span>
              </Link>
            </div>
            {/* <Scrolldown targetId="members" /> */}
          </div>
        </section>
        <section className="section" id="members">
          <div className="container">
            <h1 className="title has-text-primary has-text-centered-touch">MEMBERS</h1>
            <div className="level">
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
            </div>
            <div className="level">  
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
            </div>
            <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5 has-text-centered">
              新しい未来を私達と一緒に作りませんか？ 
              {/* Future is not in front of us, it is inside of us. */}
            </h2>
            <div className="level">
              <div className="level-item">
                <div className="buttons">
                  <Link to="/products" className="button is-medium is-primary is-outlined pl2 pr2">
                    メンバーのプロフィール
                  </Link>
                </div>
              </div>
            </div>
            <div className="more-button dropshadow">
              <Link to="/" className="button is-light">
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
            <div className="level">
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
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