import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const OpenHousePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Art Dept Open House"
        keywords={[`fine art`, `communication design`, `college`, `programs`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Fine Art & Communication Design Open House at NCC</h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.featuredImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>Thinking about enrolling at NCC?</h3>
          <p class="has-text-centered">
            Join us at an Open House to tour campus, learn about programs, meet
            faculty, discover resources and more. Plus get all your admissions
            and financial aid questions answered.
          </p>
          <p class="has-text-centered">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSkyluGHSYGmaRLdUjyMyp4Qf6MR0Ecu_E7-t_hxStdw7dDl3ITeDmrh5zm55ajaqFi_LdVDhlJNv6_/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="440"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          </p>
          <h3>NCC Spring Open Houses</h3>
          <h4>Bethlehem Campus: Saturday, April 23 | 9am-1pm</h4>
          <h4>Monroe Campus: Saturday, May 7 | 10am-1pm</h4>
          <p>
            <a
              className="button primary fit"
              href="https://info.northampton.edu/spring22-open-house"
            >
              <strong>RSVP for the Next Open House</strong>
            </a>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    featuredImage: file(relativePath: { eq: "bethlehem-gallery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <OpenHousePage location={props.location} data={data} {...props} />
    )}
  />
)
