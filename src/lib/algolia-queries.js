const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `blog`
const indexName = `gatsby-blog`
const pageQuery = `query latestPostsQuery {
    allGhostPost {
      nodes {
        title
        id
        feature_image
        plaintext
        slug
        reading_time
        published_at(formatString: "MMM DD YYYY")
        plaintext
        primary_author {
          name
          profile_image
        }
        primary_tag {
          name
        }

        tags {
          id
          name
          slug
        }
      }
    }
  }`

function pageToAlgoliaRecord({
  id,
  title,
  plaintext,
  primary_author,
  primary_tag,
  tags,
  slug,
}) {
  return {
    objectID: id,
    title,
    plaintext,
    slug,
    author: primary_author.name,
    primary_tag: primary_tag.name,
    tags: tags.map((t) => t.name),
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allGhostPost.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries
