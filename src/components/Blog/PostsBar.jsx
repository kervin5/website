import React from "react"

import { Grid, Row, Col } from "react-flexbox-grid"
import PostCard from "./PostCard"

const randomPostsBar = ({ posts, noExcerpt, smallFont }) => {
  return (
    <Grid>
      <Row center="xs">
        {posts.map((post, index) => (
          <Col key={"PostBar" + index} md={4} style={{ display: "flex" }}>
            <PostCard
              post={post}
              noExcerpt={noExcerpt}
              tags
              smallFont={smallFont}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

export default randomPostsBar
