const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const gallery = path.resolve(`./src/templates/gallery.js`)
  const faculty = path.resolve(`./src/templates/faculty.js`)

  const galleryResults = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { collection: { eq: "gallery" } } }
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  if (galleryResults.errors) {
    reporter.panicOnBuild("Error while running Gallery GraphQL query")
  }

  const galleryPosts = galleryResults.data.allMarkdownRemark.edges

  galleryPosts.forEach((post, index) => {
    const previous =
      index === galleryPosts.length - 1 ? null : galleryPosts[index + 1].node
    const next = index === 0 ? null : galleryPosts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      pathPrefix: "/",
      component: gallery,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })

  const facultyResults = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { frontmatter: { collection: { eq: "faculty" } } }
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  if (facultyResults.errors) {
    reporter.panicOnBuild("Error while running Faculty GraphQL query")
  }

  const facultyPosts = facultyResults.data.allMarkdownRemark.edges

  facultyPosts.forEach((post, index) => {
    const previous =
      index === facultyPosts.length - 1 ? null : facultyPosts[index + 1].node
    const next = index === 0 ? null : facultyPosts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      pathPrefix: "/",
      component: faculty,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
