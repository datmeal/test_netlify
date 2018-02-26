import Link from 'gatsby-link';
import graphql from 'graphql';
import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <a href={this.props.link} className="column is-half-tablet is-half-desktop blogunit">
        <figure className="image">
          <img src={this.props.src} alt={this.props.alt} />
        </figure>
        <div className="blog-text has-text-primary">
          <h4 className="is-size-4 has-text-weight-semibold">{this.props.title}</h4>
          <p>
          {this.props.date} by {this.props.author}
          </p>
        </div>
      </a>
    );
  }
}

export default Blog;
