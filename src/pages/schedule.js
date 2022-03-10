import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const SchedulePage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Studio & Lab Schedule"
        keywords={[`studio`, `lab`, `hours`, `schedule`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Open Studio and Computer Labs are available Monday thru Saturdays on
            the Bethlehem Campus for Fine Art and Communication Design Students.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.scheduleFeatured.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h2>Fine Art Studios</h2>
          <h3>Communication Hall Studio 109</h3>
          <ul>
            <li>Tuesday: 9:00am-8:00pm</li>
            <li>Thursday: 3:00pm-8:00pm</li>
            <li>Friday: 9:00am-2:00pm</li>
            <li>
              Saturday: 9:00am-2:00pm (There will be a non-credit class held in
              109 on Saturdays from 9:15-11:45am starting 11/7 and ending 12/5){" "}
            </li>
          </ul>
          <h3>Communication Hall Studio 110</h3>
          <ul>
            <li>Tuesday: 9:00am-8:00pm</li>
            <li>Thursday: 3:00pm-8:00pm</li>
            <li>Friday: 9:00am-2:00pm</li>
            <li>Saturday: 9:00am-2:00pm</li>
          </ul>
          <h3>Communication Hall Studio 112</h3>
          <ul>
            <li>Tuesday: 9:00am-6:00pm</li>
            <li>Thursday: 3:00pm-6:00pm</li>
            <li>Friday: 9:00am-2:00pm</li>
            <li>Saturday: 9:00am-2:00pm</li>
          </ul>
          <h3>Communication Hall Studio 112</h3>
          <ul>
            <li>Tuesday: 9:00am-6:00pm</li>
            <li>Thursday: 3:00pm-6:00pm</li>
            <li>Friday: 9:00am-2:00pm</li>
            <li>Saturday: 9:00am-2:00pm</li>
          </ul>
          <h3>Communication Hall Tool Room 123</h3>
          <ul>
            <li>Friday: 9:00am-2:00pm</li>
            <li>Saturday: 9:00am-2:00pm</li>
          </ul>

          <h2>Computer Labs</h2>
          <h3>Communication Hall Computer Labs</h3>
          <h3>108, 108a, 114, & 121</h3>
          <ul>
            <li>Monday: 9:00am - 2:00pm</li>
            <li>Tuesday: 9:00am - 2:00pm</li>
            <li>Wednesday: 9:00am - 2:00pm</li>
            <li>Thursday: 3:00pm - 2:00pm</li>
            <li>Friday: 9:00am - 2:00pm</li>
            <li>Saturday: 9:00am - 2:00pm</li>
          </ul>
          <p>
            <em>
              <strong>
                Mondays, Wednesday, Thursday, Friday, and Saturday: Students
                should check in with Jillian McLuhan first in room 121.
              </strong>
            </em>
          </p>
          <p>
            <em>
              <strong>
                Tuesdays: Students should check in with work study student
                Pepper Flatt in room 108.
              </strong>
            </em>
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
    scheduleFeatured: file(
      relativePath: { eq: "shutterstock_146679500-1024x684.jpg" }
    ) {
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
      <SchedulePage location={props.location} data={data} {...props} />
    )}
  />
)
