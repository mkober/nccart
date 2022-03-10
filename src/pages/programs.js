import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ProgramsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Art & Design Programs"
        keywords={[`fine art`, `communication design`, `college`, `programs`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            The Fine Art and Communication Design programs helps develop a
            student's artistic interest and strengths. As students build their
            portfolio, they will be encouraged to develop creativity through
            discovery.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.aboutFeatured.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>Fine Art</h3>
          <p>
            Exposure to career opportunities and educational options is an
            integral part of the program. By the end of the fourth semester, the
            disciplined and self-motivated student will draw from examples of
            all coursework for transfer to a college, university or art school.
            The successful student will also develop the skills in presentation
            needed to pursue a career in the visual arts.
          </p>
          <p>
            Drawings, paintings, sculptures, ceramics and photography will
            showcase a deeper understanding of the student's own ideas. The
            Individual Studio/Professional Practices course gives students the
            opportunity to gain a greater knowledge of the art world through
            visits to museums, galleries and art centers in New York City,
            Philadelphia and the Lehigh Valley. In addition, students will speak
            with curators, gallery directors, art museum personnel and a
            visiting professional artist who will help guide and critique their
            work.
          </p>
          <p>
            <a
              className="button primary fit"
              href="https://www.northampton.edu/fine-art.htm"
            >
              <strong>Learn More About The Fine Art Program</strong>
            </a>
          </p>
          <h3>Communication Design</h3>
          <p>
            If you’re creative with an eye for design and possess strong
            problem-solving and brainstorming skills, a career in graphic design
            could be an option for you. Graphic designers prepare artwork for
            many purposes, from video game design to web animation or print
            media. The designer's process is a fascinating one. It involves
            analyzing, conceptualizing and developing ideas that are "outside
            the box" to address client needs and market to a target audience in
            a visually compelling way.
          </p>
          <p>
            Our accredited program provides students with a balanced curriculum
            that combines a solid foundation in the elements and principles of
            design, editorial design layout, typographic design, photography,
            web design, 3D computer animation and motion graphics with
            real-world, hands-on projects that address current industry trends
            and needs in a learning-intensive atmosphere. If you're looking to
            become part of a fast-paced, ever-changing industry, our program
            will equip you with the training and skills you need to begin a
            successful graphic design career.
          </p>
          <p>
            <a
              className="button primary fit"
              href="https://www.northampton.edu/communication-design.htm"
            >
              <strong>Learn More About The CD Program</strong>
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
    aboutFeatured: file(relativePath: { eq: "IMG_1067.jpg" }) {
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
      <ProgramsPage location={props.location} data={data} {...props} />
    )}
  />
)
