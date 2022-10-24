import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const EventsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Art Shows & Events at NCC"
        keywords={[`fine art`, `communication design`, `college`, `programs`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Art Shows & Events at NCC</h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.odetotheformerCirculusImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>ODE TO THE FORMER and CIRCULUS<br/>
            Exhibition by Jillian McLuhan and Marni Bowen</h3>
          <h4>October 24th thru December 9th</h4>
          <p class="has-text-centered is-bold">Artist Reception <br/>
            Nov 2nd, 4:00 to 6:30 PM</p>
          <p class="has-text-centered">
            Communications Hall Gallery<br/>
            3835 Green Pond Road<br/>
            Bethlehem, PA
          </p>
          <p class="has-text-centered">
            <iframe width="720" height="405" src="https://www.youtube.com/embed/4_wtv700afQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.hundredDaysMarniImage.childImageSharp.fluid}
              className=""
            />
          </figure>
          <p>
            The video was created by Ethan Berry based on Marni Bowen's
            fabric design titled 100 Days. The artwork reminded Berry of Jazz
            music with a main theme with layers of instrumental variations
            on that theme. Berry made a series of short film camera exposures
            (about 2 seconds each) of each of the 100 sections of the artwork,
            digitized the film negative to make the video file and added ambient
            sounds he recorded during the shooting of the original film. The musical
            track is by an 80's era electronica group from Germany called Atari Teenage Riot.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.presidentOpenHouseImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>President’s Open House and Art Exhibit<br/>
            Featuring Paintings by William Christine</h3>
          <h4>President's Open House \ Wine & Cheese Reception</h4>
          <h4>Nov 7th, 4:00 to 6:00 PM</h4>
          <p class="has-text-centered is-bold">
            President's Office<br/>
            College Center, 4th Floor <br/>
            Bethlehem, PA
          </p>
          <p>
            William Christine is pleased to have been a long time member of the NCC
            community, particularly the 15 years he’s been Artist in Residence at
            the Reibman Hall Children’s Center. His artistic work has focused on
            landscape painting for most of his career.
          </p>
          <p>
            As an undergraduate in 1974 he spent a pivotal semester at the Artists for Environment
            Foundation where he studied with Bob Kulicke, Lois Dodd, and David Dewey. In 1990
            he received the MFA degree from Brooklyn College. Christine has shown his work at various
            museums and galleries in the NewYork, Philadelphia, and Washington DC areas for many years.
            His works are held in collections including the Readers Digest Corporate Collection, the
            Segal Museum, and the Allentown Art Museum. Recent works have focused on creating
            rythmic color sequences inspired by his wife's native flower gardens. The paintings on exhibit
            here draw from themes he’s explored over the past 20 years.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.discoverJapaneseYokaiImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>Discover Japanese Yokai Folklore</h3>
          <h4>Oct 27, 6:00 PM EDT</h4>
          <p class="has-text-centered is-bold">Presented by the NCC Japanese Cultural Program</p>
          <p>
            What are Yokai?
          </p>
          <p>
            We have two amazing Yokai experts from Japan, Matt Alt and Matthew Meyer. Matt
            Alt is presenting the important history of Yokai and how Yokai play an important
            role in modern Japan today. On the other hand, Matthew Meyer is presenting his
            Yokai illustrations, Yokai stories, and sharing his experience of living in
            Japan as an artist.
          </p>
          <p>
            This is a great chance to learn&discuss about a significant of Japanese anime,
            video games, manga, pop culture, literature, and more!! We will have a time for
            Q&A at the end, so please bring your questions and join our conversations!
          </p>
          <p>
            <a
              className="button primary fit"
              href="https://www.nccjapanart.org/event-details/discover-japanese-yokai-folklore"
            >
              <strong>Click Here For More Information</strong>
            </a>
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.neverPlayedWithDollsImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>Sana Musasama: I Never Played with Dolls</h3>
          <h4>September 17 – October 30, 2022</h4>
          <p class="has-text-centered is-bold">Curated by Prof. Rachael Gorchov</p>
          <p class="has-text-centered">
            Tiger Strikes Asteroid New York<br />
            1329 Willoughby Ave, #2A<br />
            Brooklyn, NY 11237
          </p>
          <p>
            BROOKLYN, NY – Tiger Strikes Asteroid New York is thrilled to present Sana
            Musasama: I Never Played with Dolls, the first exhibition featuring her
            Topsy Turvy dolls, a project Musasama first embarked on over a decade ago
            to commemorate personally influential women and girls. The work represents
            a spectrum of individuals from public figures such as Coretta Scott King and
            Jackie Kennedy to Musasama’s family members and symbolic stand-ins for
            anonymous child soldiers in Sierra Leone.
          </p>
          <p>
            Throughout its evolution, this body of work has grown to incorporate not only
            Musasama’s ceramic work, 32 hands have contributed to this project. To list a
            few: senior citizens in New York City, survivors of human trafficking in Cambodia,
            and art and engineering students, thus collaborating with communities she has
            worked with as an activist for 26 years and as a teacher. Accompanying the Topsy
            Turvey dolls will be Musasama’s “I See Me” dolls, reimaginations of a doll
            Musasama’s mother made with her when she was a preteen to help her appreciate
            her own hair when other children perceived wavy, “whiter” hair to be more desirable.
            The Artist at Play: new works by Sana Musasama, an essay on Musasama’s life and
            this body of work by TS Murphy accompanies this exhibition.
          </p>
          <p>
            <a
              className="button primary fit"
              href="https://www.tigerstrikesasteroid.com/tagged/ineverplayedwithdolls"
            >
              <strong>Click Here For More Information</strong>
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
    hundredDaysMarniImage: file(relativePath: { eq: "100days-marni.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    odetotheformerCirculusImage: file(relativePath: { eq: "odetotheformer_circulus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    presidentOpenHouseImage: file(relativePath: { eq: "presidentopenhouse_williamchristine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    neverPlayedWithDollsImage: file(relativePath: { eq: "sana-musama-i-never-played-with-dolls.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discoverJapaneseYokaiImage: file(relativePath: { eq: "discover-japanese-yokai-folklore.jpg" }) {
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
      <EventsPage location={props.location} data={data} {...props} />
    )}
  />
)
