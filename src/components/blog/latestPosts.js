import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledCard = styled.div`
  background-color: ${props => props.theme.lightColor};
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
  img {
    width: 100%;
  }
  transition: 200ms;

  &:hover {
    transform: scale(1.01);
  }

  .Content {
    padding: 10px;
    p {
      font-size: 0.8em;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.darkColor};
      transition: 300ms;
    }
  }

  &:hover {
    background-color: ${props => props.theme.secondaryColor};
    .Content {
      a {
        color: ${props => props.theme.lightColor};
      }
    }
  }
`

const latestPosts = posts => {
  return (
    <Grid>
      <Row middle="xs" center="xs">
        {posts.posts.map((post, index) => (
          <Col key={"Post" + index} md={4}>
            <StyledCard>
              <img src={post.feature_image} alt={post.title}></img>
              <div className="Content">
                <Link to={`/blog/${post.slug}`}>
                  {" "}
                  <strong>{post.title}</strong>
                  <p>{post.excerpt.substring(0, 140)}...</p>
                </Link>
              </div>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Grid>
  )
}

export default latestPosts
