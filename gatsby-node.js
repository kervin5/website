const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  //Create pages for individual articles ============================================================================
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)

  // Query Ghost data
  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for posts.`)
    return
  }

  if (!result.data.allGhostPost) {
    // Create pages for each Ghost post
    return
  }

  const items = result.data.allGhostPost.edges
  items.forEach(({ node }) => {
    node.url = `blog/${node.slug}/`

    createPage({
      path: node.url,
      component: path.resolve(postTemplate),
      context: {
        slug: node.slug,
      },
    })
  })

  //Create pages for individual tags ============================================================================
  // Query Ghost data
  const tagsResult = await graphql(`
    {
      allGhostTag {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  if (tagsResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for tags.`)
    return
  }

  if (tagsResult.data.allGhostTag) {
    // Create pages for each Ghost post
    const items = tagsResult.data.allGhostTag.nodes
    items.forEach(node => {
      node.url = `blog/tag/${node.slug}/`

      createPage({
        path: node.url,
        component: path.resolve(tagTemplate),
        context: {
          slug: node.slug,
          name: node.name,
        },
      })
    })
  }
}
