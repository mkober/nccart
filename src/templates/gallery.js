import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GalleryCard from "../components/galleryCard"

class GalleryTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    let imageCounter = 0

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`gallery-content ${post.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <header className="gallery-content-header">
            <h1 className="gallery-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p class="gallery-content-excerpt">
              {post.frontmatter.description}
            </p>
          )}

          {post.frontmatter.thumbnail && (
            <div className="gallery-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div className="gallery-images">
            {post.frontmatter.images.map(image => {
              imageCounter++
              return (
                <GalleryCard
                  key={image.childImageSharp.id}
                  count={imageCounter}
                  image={image}
                  postClass={`post`}
                />
              )
            })}
          </div>

          <div
            className="gallery-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
          If the post has more than one author, we load a specific template
          from includes/byline-multiple.hbs, otherwise, we just use the
          default byline. */}
          </footer>
        </article>
      </Layout>
    )
  }
}

export default GalleryTemplate

export const pageQuery = graphql`
  query GalleryBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        images {
          publicURL
          childImageSharp {
            id
            fixed {
              src
            }
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
