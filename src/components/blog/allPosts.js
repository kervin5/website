import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PostsGrid from "./postsGrid"

const latestPosts = ({ showFeatured }) => {
  return (
    <StaticQuery
      query={graphql`
        query latestPostsQuery {
          # allGhostPost(limit: 10) { //TODO: Implement pagination
          allGhostPost {
            nodes {
              title
              id
              feature_image
              excerpt
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
        }
      `}
      render={data => {
        return (
          <PostsGrid
            showFeatured={showFeatured}
            posts={data.allGhostPost.nodes}
          />
        )
      }}
    />
  )
}

export default latestPosts
