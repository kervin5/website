import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import WidePostCard from "./WidePostCard"
import PostCard from "./PostCard"

const PostsGrid = ({ showFeatured, posts }) => {
  const topFourPosts = posts.slice(0, 4)
  const restOfThePosts = posts.slice(4)

  return (
    <>
      <Grid>
        <Row center="xs">
          {topFourPosts.map((post, index) =>
            showFeatured && index === 0 ? (
              <Col
                key={"PostGridFour" + index}
                md={12}
                style={{ display: "flex" }}
              >
                <WidePostCard post={post} />
                <br />
              </Col>
            ) : (
              <Col key={"Post" + index} md={4} style={{ display: "flex" }}>
                <PostCard post={post} />
              </Col>
            )
          )}
        </Row>
      </Grid>
      <Grid>
        <Row middle="xs" center="xs">
          {restOfThePosts.map((post, index) => (
            <Col
              key={"PostRestOfPost" + index}
              md={12}
              style={{ display: "flex" }}
            >
              <PostCard post={post} noImage tags />
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  )
}

export default PostsGrid
