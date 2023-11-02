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
              fluid={data.sashaShyarsAurgessPhotosImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>
            Untitled Part II and III <br />
            We All Have To Make Compromises
          </h3>
          <h4>
            Photographs by Sasha Phyars-Burgess
            <br />
            October 23rd thru December 15, 2023
          </h4>
          <p class="has-text-centered is-bold">
            Artist Talk <br />
            November 2nd 5:30pm to 6:30pm
          </p>
          <p class="has-text-centered is-bold">
            Artist Reception <br />
            November 2nd 6:30pm to 8:00pm
          </p>
          <p class="has-text-centered">
            Communications Hall Gallery
            <br />
            3835 Green Pond Road
            <br />
            Bethlehem, PA
            <br />
          </p>
          <p class="has-text-centered is-bold">
            Sasha Phyars-Burgess is a recepient
            <br /> of a 2023 Guggenheim Fellowship in Photography
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={
                data.sashaShyarsAurgessArtistStatementImage.childImageSharp
                  .fluid
              }
              className=""
            />
          </figure>

          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.diffusedRealityShowImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>
            Diffused Reality Photographs <br />
            and Recent Paintings in Oil Exhibition
          </h3>
          <h4>
            by Daniel Marcolina and Courtney Alnutt
            <br />
            January 11th thru March 3, 2023
          </h4>
          <p class="has-text-centered is-bold">
            Artist Reception <br />
            February 9th 3:00pm to 4:30pm
          </p>
          <p class="has-text-centered">
            Communications Hall Gallery
            <br />
            3835 Green Pond Road
            <br />
            Bethlehem, PA
            <br />
            <br />
            <a
              className="button primary"
              href="https://storage.net-fs.com/hosting/6538850/17/"
              target="_blank"
            >
              <strong>VIEW AN INTERACTIVE PRESENTATION OF THE SHOW</strong>
            </a>
          </p>
          <p class="has-text-centered is-bold">
            Presentation on the topic of altering reality with AI and AR by Mr.
            Marcolina.
            <br />
            Sponsored by the NCC College Life Committee
            <br />
            February 9th 11:00an to 12:00pm
            <br />
            <br />
            <a
              className="button primary"
              href="https://www.eventbrite.com/e/diffused-reality-photography-lecture-by-daniel-marcolina-tickets-525844514097"
            >
              <strong>Signup here to RSVP for the Presentation</strong>
            </a>
          </p>
          <p class="has-text-centered">
            College Center 220
            <br />
            3835 Green Pond Road
            <br />
            Bethlehem, PA
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.diffusedRealityMakingImage.childImageSharp.fluid}
              className=""
            />
          </figure>
          <h4>
            DIFFUSED REALITY
            <br />
            HYBRID PHOTOGRAPHS BY DANIEL MARCOLINA
          </h4>
          <p>
            Exploring how the AI image to image work-flow can bend the truth of
            an original photograph in many directions while still retaining some
            of it original DNA.
          </p>
          <p>
            <strong>The Original to Original AI Work-Flow</strong>
            <br />
            This show presents over a hundred novel images that are the result
            of a unique Human/AI work-flow. They each start with the artists
            original photographs that are manually/digitally reworked and then
            morphed/curated through various AI tools. The resulting “picks” are
            then upscaled, reworked and color corrected in post. This digital
            crafting can bend the truth of the original while still retaining
            some of its original DNA.
          </p>
          <p>
            <strong>A Show within a show</strong>
            <br />
            Beyond the amazing variety of distinctive visuals, the show has been
            taken to an exciting new dimension with the integration of augmented
            reality. By scan-ning certain images on the walls with your phone
            you will see the work come to life in various unexpected ways. And
            even unlock a gallery within the gallery that you can walk through.
            <br />
            <br />
            The photography and augmented design of the show are by the
            nationally distinguished Philadelphia based designer/photographer
            Dan Marcolina. Dan has written and been represented in many books
            and lectured widely on digital design and image creation.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.ladyAndTheDeerImage.childImageSharp.fluid}
              className=""
            />
          </figure>
          <h4>Courtney Alnutt</h4>
          <p>
            Courtney grew up on a small farm in rural Pennsylvania and has
            always lived among nature and many different animals, even wildlife
            in her house that was cared for by her to-be vet sister. The choices
            she makes in the subject matter of her work echoes this background.
          </p>
          <p>
            Her work reveals personal insight into her life and reflects
            self-exploration. Her work also documents her own personal academic
            journey. The techniques used in her work are those traditionally
            employed for representational art and produced with oil paints on
            fine linen panels.
          </p>
          <p>
            She received an associate degree in culinary arts in 2014 and worked
            as a wedding cake artist for three years. After soul searching, she
            decided to pursue art full time and in 2017 went on to study fine
            art at Paris College of Art in Paris, France. In 2019 she
            transferred to Laguna College of Art and Design in Laguna Beach, CA
            and graduated in 2021 with Summa Cum Laude honors and a bachelor’s
            degree in drawing and painting. Courtney was selected to show a
            painting in the student-juried exhibition at LCAD Gallery In Laguna
            Beach, CA in December of 2019 and participated in a senior show in
            2021 at the same gallery.
          </p>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.odetotheformerCirculusImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>
            ODE TO THE FORMER and CIRCULUS
            <br />
            Exhibition by Jillian McLuhan and Marni Bowen
          </h3>
          <h4>October 24th thru December 9th</h4>
          <p class="has-text-centered is-bold">
            Artist Reception <br />
            Nov 2nd, 4:00 to 6:30 PM
          </p>
          <p class="has-text-centered">
            Communications Hall Gallery
            <br />
            3835 Green Pond Road
            <br />
            Bethlehem, PA
          </p>
          <p class="has-text-centered">
            <iframe
              width="720"
              height="405"
              src="https://www.youtube.com/embed/4_wtv700afQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.hundredDaysMarniImage.childImageSharp.fluid}
              className=""
            />
          </figure>
          <p>
            The video was created by Ethan Berry based on Marni Bowen's fabric
            design titled 100 Days. The artwork reminded Berry of Jazz music
            with a main theme with layers of instrumental variations on that
            theme. Berry made a series of short film camera exposures (about 2
            seconds each) of each of the 100 sections of the artwork, digitized
            the film negative to make the video file and added ambient sounds he
            recorded during the shooting of the original film. The musical track
            is by an 80's era electronica group from Germany called Atari
            Teenage Riot.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.presidentOpenHouseImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>
            President’s Open House and Art Exhibit
            <br />
            Featuring Paintings by William Christine
          </h3>
          <h4>President's Open House \ Wine & Cheese Reception</h4>
          <h4>Nov 7th, 4:00 to 6:00 PM</h4>
          <p class="has-text-centered is-bold">
            President's Office
            <br />
            College Center, 4th Floor <br />
            Bethlehem, PA
          </p>
          <p>
            William Christine is pleased to have been a long time member of the
            NCC community, particularly the 15 years he’s been Artist in
            Residence at the Reibman Hall Children’s Center. His artistic work
            has focused on landscape painting for most of his career.
          </p>
          <p>
            As an undergraduate in 1974 he spent a pivotal semester at the
            Artists for Environment Foundation where he studied with Bob
            Kulicke, Lois Dodd, and David Dewey. In 1990 he received the MFA
            degree from Brooklyn College. Christine has shown his work at
            various museums and galleries in the NewYork, Philadelphia, and
            Washington DC areas for many years. His works are held in
            collections including the Readers Digest Corporate Collection, the
            Segal Museum, and the Allentown Art Museum. Recent works have
            focused on creating rythmic color sequences inspired by his wife's
            native flower gardens. The paintings on exhibit here draw from
            themes he’s explored over the past 20 years.
          </p>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.discoverJapaneseYokaiImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3>Discover Japanese Yokai Folklore</h3>
          <h4>Oct 27, 6:00 PM EDT</h4>
          <p class="has-text-centered is-bold">
            Presented by the NCC Japanese Cultural Program
          </p>
          <p>What are Yokai?</p>
          <p>
            We have two amazing Yokai experts from Japan, Matt Alt and Matthew
            Meyer. Matt Alt is presenting the important history of Yokai and how
            Yokai play an important role in modern Japan today. On the other
            hand, Matthew Meyer is presenting his Yokai illustrations, Yokai
            stories, and sharing his experience of living in Japan as an artist.
          </p>
          <p>
            This is a great chance to learn&discuss about a significant of
            Japanese anime, video games, manga, pop culture, literature, and
            more!! We will have a time for Q&A at the end, so please bring your
            questions and join our conversations!
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
          <p class="has-text-centered is-bold">
            Curated by Prof. Rachael Gorchov
          </p>
          <p class="has-text-centered">
            Tiger Strikes Asteroid New York
            <br />
            1329 Willoughby Ave, #2A
            <br />
            Brooklyn, NY 11237
          </p>
          <p>
            BROOKLYN, NY – Tiger Strikes Asteroid New York is thrilled to
            present Sana Musasama: I Never Played with Dolls, the first
            exhibition featuring her Topsy Turvy dolls, a project Musasama first
            embarked on over a decade ago to commemorate personally influential
            women and girls. The work represents a spectrum of individuals from
            public figures such as Coretta Scott King and Jackie Kennedy to
            Musasama’s family members and symbolic stand-ins for anonymous child
            soldiers in Sierra Leone.
          </p>
          <p>
            Throughout its evolution, this body of work has grown to incorporate
            not only Musasama’s ceramic work, 32 hands have contributed to this
            project. To list a few: senior citizens in New York City, survivors
            of human trafficking in Cambodia, and art and engineering students,
            thus collaborating with communities she has worked with as an
            activist for 26 years and as a teacher. Accompanying the Topsy
            Turvey dolls will be Musasama’s “I See Me” dolls, reimaginations of
            a doll Musasama’s mother made with her when she was a preteen to
            help her appreciate her own hair when other children perceived wavy,
            “whiter” hair to be more desirable. The Artist at Play: new works by
            Sana Musasama, an essay on Musasama’s life and this body of work by
            TS Murphy accompanies this exhibition.
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
    odetotheformerCirculusImage: file(
      relativePath: { eq: "odetotheformer_circulus.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    presidentOpenHouseImage: file(
      relativePath: { eq: "presidentopenhouse_williamchristine.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    neverPlayedWithDollsImage: file(
      relativePath: { eq: "sana-musama-i-never-played-with-dolls.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discoverJapaneseYokaiImage: file(
      relativePath: { eq: "discover-japanese-yokai-folklore.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    diffusedRealityMakingImage: file(
      relativePath: { eq: "diffused-reality-making-ai-personal.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    diffusedRealityShowImage: file(
      relativePath: { eq: "diffused-reality-recent-oil-paintings-show.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ladyAndTheDeerImage: file(
      relativePath: { eq: "the-lady-and-the-deer.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgessArtistStatementImage: file(
      relativePath: { eq: "sasha-phyars-burgess-artist-statement.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgess1Image: file(
      relativePath: { eq: "sasha-phyars-burgess-1.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgess2Image: file(
      relativePath: { eq: "sasha-phyars-burgess-2.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgess3Image: file(
      relativePath: { eq: "sasha-phyars-burgess-3.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgess4Image: file(
      relativePath: { eq: "sasha-phyars-burgess-4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sashaShyarsAurgessPhotosImage: file(
      relativePath: { eq: "sasha-phyars-burgess-photos.png" }
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
      <EventsPage location={props.location} data={data} {...props} />
    )}
  />
)
