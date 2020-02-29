import React from "react"

import { Grid, Row, Col } from "react-flexbox-grid"
import PostCard from "./postCard"

const randomPostsBar = ({ posts, noExcerpt }) => {
  return (
    <Grid>
      <Row middle="xs" center="xs">
        {posts.map((post, index) => (
          <Col key={"Post" + index} md={4}>
            <PostCard post={post} noExcerpt={noExcerpt} smallFont />
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

export default randomPostsBar
