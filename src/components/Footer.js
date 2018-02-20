import React, { Component } from 'react';
import Link from "gatsby-link";

class Footer extends Component {
  render() {
    return (
      <div>
        <section className="section is-primary">
          <div className="container has-text-centered has-text-white">
            <p>最新情報はSNSでもご覧頂けます</p>
            <div className="sns-icons">
              <a href="https://www.facebook.com/crowdcast/"><i className="fab fa-5x fa-facebook"></i></a>
              { /*<i className="fab fa-5x fa-twitter"></i>
              <i className="fab fa-5x fa-youtube"></i>*/ }
            </div>
            <p className="has-text-weight-bold">クラウドキャスト株式会社<br />Crowd Cast Co., Ltd.</p>
            <br />
            <p>東京都千代田区大手町１－６－１<br />大手町ビル4階 FINOLAB</p>
            <br />
            <a href="https://goo.gl/maps/6DEdU36SfT32" className="button is-link pl3 pr3">
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
          { /*<Link to="/" className="is-block has-text-primary">お問い合わせ</Link>
          <Link to="/" className="is-block has-text-primary">STAPLEをご利用のお客様</Link>
          <Link to="/" className="is-block has-text-primary">STAPLE for 弥生をご利用のお客様</Link>
    <Link to="/" className="is-block has-text-primary">STAPLE Pulseをご利用のお客様</Link>*/ }
          <p className="is-block has-text-primary">Copyright Crowd Cast Co., Ltd. All rights reserved.</p>
        </footer>
      </div>
    )
  }
}

export default Footer