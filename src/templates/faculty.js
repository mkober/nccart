import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class FacultyTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    let imageCounter = 0

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.name + ", " + post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <article
          className={`faculty-content ${post.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <header className="faculty-content-header">
            <h1 className="faculty-content-title">{post.frontmatter.name}</h1>
            <h3 className="faculty-content-title">{post.frontmatter.title}</h3>
          </header>

          {post.frontmatter.thumbnail && (
            <div className="faculty-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="faculty-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="faculty-content-footer">
            <a className="button primary fit" href="/faculty">
              <strong>Back to Faculty Directory</strong>
            </a>
          </footer>
        </article>
      </Layout>
    )
  }
}

export default FacultyTemplate

export const pageQuery = graphql`
  query FacultyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        name
        title
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
