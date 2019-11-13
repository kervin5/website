import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Container from "../components/layout/Container"
import Layout from "../components/layout/layout"
import Hero from "../components/layout/Hero"
import SEO from "../components/seo"

const StyledArticle = styled.article`
  padding-top: 100px;

  .kg-bookmark-card {
    border: 1px solid rgba(0, 0, 0, 0.2);

    border-radius: 5px;

    .kg-bookmark-container {
      text-decoration: none;
      align-items: center;
      display: flex;

      &:active {
        color: ${props => props.theme.secondaryColor};
      }

      .kg-bookmark-content {
        padding: 10px 20px;
        .kg-bookmark-title {
          font-size: 0.9em;
          line-height: 0.9em;
          font-weight: 600;
          color: #343f44;
          margin-bottom: 10px;
        }

        .kg-bookmark-description {
          font-size: 0.7em;
          line-height: 1.5em;
        }
      }

      .kg-bookmark-metadata {
        margin-top: 10px;
        font-size: 0.7em;
        display: flex;
      }

      .kg-bookmark-icon {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }

      .kg-bookmark-thumbnail {
        position: relative;
        display: flex;
        overflow: hidden;

        img {
          height: 100%;
          max-height: 200px;
        }
      }
    }
  }
`

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <SEO title={`Blog - ${post.title} - Kervin.tech`} />
      <Container maxwidth="720px">
        <StyledArticle className="post">
          {post.feature_image ? (
            <Hero src={post.feature_image} alt={post.title} />
          ) : null}
          <h1>{post.title}</h1>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledArticle>
      </Container>
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      feature_image
      html
    }
  }
`
