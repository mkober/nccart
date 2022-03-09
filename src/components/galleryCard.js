import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`gallery-card ${props.count % 4 === 0 && `gallery-card-large`} ${
      props.postClass
    }`}
    style={
      props.image.childImageSharp.id && {
        backgroundImage: `url(${props.image.childImageSharp.fluid.src})`,
      }
    }
  >
    <a
      href={props.image.childImageSharp.fluid.src}
      className="gallery-card-link"
    >
      <div className="gallery-card-content"></div>
    </a>
  </article>
)
