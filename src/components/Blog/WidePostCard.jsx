import React from "react"
import styled from "styled-components"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Link } from "gatsby"

import PostMeta from "./PostMeta"

const StyledPostCard = styled.div`
  background-color: ${(props) => props.theme.lightColor};
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
  text-align: left;

  transition: 200ms;

  &:hover {
    transform: scale(1.01);
  }

  .FeaturedImage {
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .Main {
    width: 100%;
  }

  .Content {
    padding: 20px 20px 5px;

    .PrimaryTag {
      text-transform: uppercase;
      color: ${(props) => props.theme.accentColor1};
      font-size: 0.8em;
      margin-bottom: 0;
    }

    .Title {
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    .Excerpt {
      font-size: 0.8em;
      margin-bottom: 5px;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.darkColor};
      transition: 300ms;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.accentColor3};
    .Content {
      a {
        color: ${(props) => props.theme.lightColor};
      }
    }
  }
`
const widePostCard = ({ post }) => {
  return (
    <StyledPostCard>
      <Grid>
        <Row>
          <Col md={8} className="FeaturedImage">
            <img src={post.feature_image} alt={post.title}></img>
          </Col>
          <Col md={4}>
            <div className="Main">
              <div className="Content">
                <p className="PrimaryTag">
                  {post.primary_tag ? post.primary_tag.name : ""}
                </p>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="Title">{post.title}</h3>
                  <p className="Excerpt">{post.excerpt}</p>
                </Link>
              </div>
              <div className="Footer">
                <PostMeta post={post} />
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </StyledPostCard>
  )
}

export default widePostCard
