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

          <h3>Communications Hall Studio 109</h3>
          <ul>
            <li>Monday: NO OPEN HOURS</li>
            <li>Tuesday: 9:00am-12:00pm, 6:20pm-10:00pm</li>
            <li>Wednesday: 6:20pm-10:00pm</li>
            <li>Thursday: 9:00am-12:00pm, 6:20pm-10:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Communications Hall Studio 110</h3>
          <ul>
            <li>Monday: 6:20pm-10:00pm</li>
            <li>Tuesday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Wednesday: NO OPEN HOURS</li>
            <li>Thursday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Communications Hall Studio 112</h3>
          <ul>
            <li>Monday: NO OPEN HOURS</li>
            <li>Tuesday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Wednesday: 6:20pm-10:00pm</li>
            <li>Thursday: 9:00am-12:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Communications Hall Studio 121</h3>
          <ul>
            <li>Monday: 9:00am-12:00pm, 3:20pm-10:00pm</li>
            <li>Tuesday: 9:00am-10:00pm</li>
            <li>Wednesday: 9:00am-12:00pm, 3:20pm-10:00pm</li>
            <li>Thursday: 9:00am-10:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Penn Hall 137</h3>
          <ul>
            <li>Monday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Tuesday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Wednesday: 9:00am-12:00pm</li>
            <li>Thursday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Friday & Saturday: NO OPEN HOURS</li>
          </ul>

          <h2>Computer Labs</h2>

          <h3>Communications Hall Computer Lab 108</h3>
          <ul>
            <li>Monday: 6:00pm-10:00pm</li>
            <li>Tuesday: 6:00pm-10:00pm</li>
            <li>Wednesday: 6:00pm-10:00pm</li>
            <li>Thursday: 9:00am-12:00pm, 6:00pm-10:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Communications Hall Computer Lab 108a</h3>
          <ul>
            <li>Monday: 2:00pm-10:00pm</li>
            <li>Tuesday: 2:00pm-6:00pm</li>
            <li>Wednesday: 6:00pm-10:00pm</li>
            <li>Thursday: 2:00pm-10:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>

          <h3>Communications Hall Computer Lab 114</h3>
          <ul>
            <li>Monday: 9:00am-12:00pm</li>
            <li>Tuesday: 9:00am-12:00pm</li>
            <li>Wednesday: 9:00am-12:00pm</li>
            <li>Thursday: 9:00am-12:00pm</li>
            <li>Friday & Saturday: 9:00am-9:00pm</li>
          </ul>
          {/*
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
          */}
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
