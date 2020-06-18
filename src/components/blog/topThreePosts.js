import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"
import PostCard from "./postCard"

const topThreePosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query latestThreePostsQuery {
          allGhostPost(limit: 3) {
            nodes {
              title
              id
              feature_image
              excerpt
              slug
              reading_time
              published_at(formatString: "MMM DD YYYY")
              primary_author {
                name
                profile_image
              }
              primary_tag {
                name
              }
            }
          }
        }
      `}
      render={(data) => (
        <Grid>
          <Row center="xs">
            {data.allGhostPost.nodes.map((post, index) => (
              <Col
                key={"PosttopThree" + index}
                md={4}
                style={{ display: "flex" }}
              >
                <PostCard post={post} />
              </Col>
            ))}
          </Row>
        </Grid>
      )}
    />
  )
}

export default topThreePosts
