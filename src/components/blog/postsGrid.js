import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import WidePostCard from "./widePostCard"
import PostCard from "./postCard"

const postsGrid = ({ showFeatured, posts }) => {
  const topFourPosts = posts.slice(0, 4)
  const restOfThePosts = posts.slice(4)

  return (
    <>
      <Grid>
        <Row middle="xs" center="xs">
          {topFourPosts.map((post, index) =>
            showFeatured && index === 0 ? (
              <Col key={"Post" + index} md={12}>
                <WidePostCard post={post} />
                <br />
              </Col>
            ) : (
              <Col key={"Post" + index} md={4}>
                <PostCard post={post} />
              </Col>
            )
          )}
        </Row>
      </Grid>
      <Grid>
        <Row middle="xs" center="xs">
          {restOfThePosts.map((post, index) => (
            <Col key={"Post" + index} md={12}>
              <PostCard post={post} noImage tags />
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  )
}

export default postsGrid
