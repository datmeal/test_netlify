import React from "react";
import Link from "gatsby-link";
import Script from "react-load-script";
import graphql from "graphql";
import gd from '../img/gd.png';
import Member from '../components/Member';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <div className="container hero-container">
              <div className="hero-left">
                <h1 className="title">POWER TO THE CROWDS</h1>
                <br/>
                <h2 className="subtitle">既存の枠組みにとらわれない、新しい発想で世界を変革する事を応援します。</h2>
              </div>
              <div className="hero-right">
                <div><img src={gd} width="74" height="37" alt="Good Design" /></div>
                <div><img src="/img/iPhoneX.png" width="151" height="264" alt="iPhoneX" /></div>
                <div className="flex-column">
                  <img src="/img/logo_short.svg" width="89" height="80" alt="Staple Logo" />
                  <img src="/img/apple-store.svg" height="40" alt="Apple Store" />
                  <img src="/img/google-play.svg" height="40" alt="Google Play" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={() => this.handleScriptLoad()}
          />
          <div className="container">
            <h1 className="title has-text-primary">NEWS</h1>
            {posts
              .filter(post => post.node.frontmatter.templateKey === "blog-post")
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.frontmatter.path}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
            <div className="level">
              <div className="level-item">
                <a href="" className="button has-text-primary">ニュース一覧</a>
              </div>
            </div>
          </div>
        </section>
        <section className="section is-light">
          <div className="container">
            <h1 className="title has-text-primary">SERVICES</h1>
            <div className="columns">
              <div className="column service-column">
                <div className="box">
                  <figure className="image is-128x128">
                    <img src="/img/staple_vertical.png" alt="法人向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary">法人向け</h2>
                  <p className="has-text-primary">スマホ・IC経費精算</p>
                </div>
              </div>
              <div className="column service-column">
                <div className="box">
                  <figure className="image is-128x128">
                    <img src="/img/StapleYayoi.png" alt="小規模向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary">小規模向け</h2>
                  <p className="has-text-primary">無料の弥生向け経費精算</p>
                </div>
              </div>
              <div className="column service-column">
                <div className="box">
                  <figure className="image is-128x128">
                    <img src="/img/StapleCard.png" alt="個人事業・中小零細向け" />
                  </figure>
                  <h2 className="is-size-5 has-text-weight-bold has-text-primary">個人事業・中小零細向け</h2>
                  <p className="has-text-primary">無料の資金繰り計画支援</p>
                </div>
              </div>
            </div>
            <div className="more-button">
              <a href="" className="button is-primary">
                <span>
                  他のサービスを見る
                </span>
                <span className="icon">
                  <i className="fas fa-caret-right"></i>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-primary">MEMBERS</h1>
            <div className="level">
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
            </div>
            <h2 className="subtitle has-text-primary has-text-weight-bold is-size-5 has-text-centered">Future is not in front of us, it is inside of us. <br />新しい未来を私達と一緒に作りませんか？</h2>
            <div className="level">
              <div className="level-item">
                <div className="buttons">
                  <a href="/products" className="button is-link">採用情報</a>
                  <a href="/products" className="button">メンバーのプロフィール</a>
                </div>
              </div>
            </div>
            <div className="more-button">
              <a href="" className="button is-link">
                <span>
                  採用情報を見る
                </span>
                <span className="icon">
                  <i className="fas fa-caret-right"></i>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="section is-primary">
          <div className="container">
            <h1 className="title has-text-white">BLOGS</h1>
            <div className="level">
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
              <Member alt="test" src="/img/t_hoshikawa_color_350-300x300.jpg" />
            </div>
            <div className="more-button">
              <a href="" className="button is-link"><span>
                ブログ一覧
              </span>
                <span className="icon">
                  <i className="fas fa-caret-right"></i>
                </span></a>
            </div>
          </div>
        </section>
        <section className="section is-primary">
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
        <footer className="footer">
          
        </footer>
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
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
