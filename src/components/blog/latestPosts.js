import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Grid, Row, Col } from "react-flexbox-grid"
import styled from "styled-components"
import { Link } from "gatsby"

import PostMeta from "./postMeta"
import WidePostCard from "./widePostCard"

const StyledCard = styled.div`
  background-color: ${props => props.theme.lightColor};
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
  text-align: left;
  img {
    width: 100%;
  }
  transition: 200ms;

  &:hover {
    transform: scale(1.01);
  }

  .Content {
    padding: 20px 20px 5px;

    .PrimaryTag {
      text-transform: uppercase;
      color: ${props => props.theme.accentColor};
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
const latestPosts = ({ showFeatured }) => {
  return (
    <StaticQuery
      query={graphql`
        query latestPostsQuery {
          allGhostPost(limit: 10) {
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
      render={data => (
        <Grid>
          <Row middle="xs" center="xs">
            {data.allGhostPost.nodes.map((post, index) =>
              showFeatured && index === 0 ? (
                <Col key={"Post" + index} md={12}>
                  <WidePostCard post={post} />
                  <br />
                </Col>
              ) : (
                <Col key={"Post" + index} md={4}>
                  <StyledCard>
                    <img src={post.feature_image} alt={post.title}></img>
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
                  </StyledCard>
                </Col>
              )
            )}
          </Row>
        </Grid>
      )}
    />
  )
}

export default latestPosts
