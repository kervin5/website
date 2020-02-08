import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Prism from "prismjs"
import Container from "../components/layout/Container"
import Layout from "../components/layout/layout"
import Hero from "../components/layout/Hero"
import SEO from "../components/seo"
import Padding from "../components/layout/Padding"
import PostMeta from "../components/blog/postMeta"
import Share from "../components/ui/Share"

const StyledArticle = styled.article`
  padding-top: 50px;

  .PrimaryTag {
    text-transform: uppercase;
    color: ${props => props.theme.accentColor};
    font-size: 0.75em;
    margin-bottom: 0;
    font-weight: bold;
  }

  .kg-image-card {
    img {
      width: 100%;
      height: auto;
    }
  }

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
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return (
    <Layout>
      <SEO
        title={`Blog - ${post.title} - Kervin.tech`}
        description={post.excerpt}
        slug={`blog/${post.slug}`}
      />
      <Container maxwidth="720px">
        <StyledArticle className="post">
          <Padding>
            <p className="PrimaryTag">
              {post.primary_tag ? post.primary_tag.name : ""}
            </p>
            <h1>{post.title}</h1>
            <p className="Excerpt">{post.excerpt}</p>
          </Padding>
          <hr />
          <PostMeta post={post} />
          {post.feature_image ? (
            <Hero src={post.feature_image} alt={post.title} />
          ) : null}
          <Padding>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Padding>
        </StyledArticle>
        <Share url={`https://kervin.tech/blog/${post.slug}`} />
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
      reading_time
      published_at(formatString: "MMM DD YYYY")
      excerpt
      primary_author {
        name
        profile_image
      }
      primary_tag {
        name
      }
    }
  }
`
