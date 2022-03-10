import React from "react"
import { Link } from "gatsby"

export default props => (
  <article className="faculty-card">
    <Link to={props.node.fields.slug} className="faculty-card-link">
      <div className="profile-image">
        <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
      </div>
      <div className="name">{props.node.frontmatter.name}</div>
      <div className="title">{props.node.frontmatter.title}</div>
    </Link>
  </article>
)
