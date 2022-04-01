import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FacultyCard from "../components/facultyCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const FacultyIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const faculty = data.allMarkdownRemark.edges
  let facultyCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Faculty"
        keywords={[`art`, `faculty`, `professors`, `college`]}
      />
      <header className="page-head">
        <h2 className="page-head-title">
          Our faculty are both experienced educators and professionals with
          ongoing experience in the studio and working with other creative
          professionals in the Industry
        </h2>
      </header>

      <div class="faculty-content-header">
        <h2>Full-Time Faculty</h2>
      </div>
      <div className="faculty-feed">
        {faculty.map(({ node }) => {
          if (node.frontmatter.role == "fulltime") {
            facultyCounter++
            return (
              <FacultyCard
                key={node.fields.slug}
                count={facultyCounter}
                node={node}
              />
            )
          }
        })}
      </div>

      <div class="faculty-content-header">
        <h2>Adjuct Faculty</h2>
      </div>
      <div className="faculty-feed">
        {faculty.map(({ node }) => {
          if (node.frontmatter.role == "adjunct") {
            facultyCounter++
            return (
              <FacultyCard
                key={node.fields.slug}
                count={facultyCounter}
                node={node}
              />
            )
          }
        })}
      </div>
    </Layout>
  )
}

const facultyQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "faculty" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            name
            title
            role
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
    }
  }
`

export default props => (
  <StaticQuery
    query={facultyQuery}
    render={data => (
      <FacultyIndex location={props.location} props data={data} {...props} />
    )}
  />
)
