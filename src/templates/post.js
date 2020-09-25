import React, { useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Prism from "prismjs"
import { DiscussionEmbed } from "disqus-react"
import Container from "../components/layout/Container"
import Layout from "../components/layout/layout_"
import Hero from "../components/layout/Hero"
import SEO from "../components/seo"
import Padding from "../components/layout/Padding"
import PostMeta from "../components/blog/postMeta"
import Share from "../components/ui/Share"
import UserMeta from "../components/blog/userMeta"
import Tags from "../components/blog/tags/tags"
import SubscribeForm from "../components/forms/SubscribeForm"
import PostsBar from "../components/blog/postsBar"
import Htag from "../components/ui/htag"

const StyledBlogPost = styled.div`
  width: 100%;
  .Comments {
    margin: 20px auto;
    @media (max-width: 720px) {
      padding: 0 20px;
    }
  }
`

const StyledArticle = styled.article`
  padding-top: 50px;

  .PrimaryTag {
    text-transform: uppercase;
    color: ${(props) => props.theme.accentColor1};
    font-size: 0.75em;
    margin-bottom: 0;
    font-weight: bold;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    * {
      font-family: "Fira Mono", "Courier New", Courier, monospace !important;
    }
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
        color: ${(props) => props.theme.accentColor3};
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
  const post = data.singlePost
  const randomPosts = getRandomItems(data.allOtherPosts.nodes, 3)
  const postUrl = `https://kervin.tech/blog/${post.slug}`

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.id, title: post.title },
  }
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return (
    <Layout>
      <SEO
        title={`${post.title} - Kervin.tech Blog`}
        description={post.excerpt}
        slug={`blog/${post.slug}`}
      />
      <Container maxwidth="720px">
        <StyledBlogPost>
          <StyledArticle className="post">
            <Padding>
              <p className="PrimaryTag">
                {post.primary_tag ? post.primary_tag.name : ""}
              </p>
              <h1>{post.title}</h1>
              <p className="Excerpt">{post.excerpt}</p>
              <Tags tags={post.tags} />
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
          <Share url={postUrl} />

          <UserMeta post={post} />
          <Padding padding="0 20px">
            <SubscribeForm />
          </Padding>
          {/* <hr /> */}
          <div className="Comments">
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </StyledBlogPost>
        <Htag as="h3" margin="0.5rem">
          Leer más
        </Htag>
        <hr />
        <PostsBar posts={randomPosts} noExcerpt smallFont />
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{ 
          "@context": "https://schema.org", 
          "@type": "Article",
          "headline": "${post.title}",
          "alternativeHeadline": "${post.title}",
          "name": "${post.title}",
          "thumbnailUrl": "${post.feature_image}",
          "description": "${post.excerpt}",
          "url": "${postUrl}",

          "image": {
            "@type": "ImageObject",
            "url": "${post.feature_image}",
            "width": "682",
            "height": "400"
          },
          "author": {
            "@type": "Person",
            "name": "${post.primary_author.name}"
          },
          "datePublished": "${post.published_at}",
          "dateCreated": "${post.created_at}",
          "dateModified": "${post.updated_at}",
          "publisher": {
            "@type": "Organization",
            "name": "Kervin Tech",
            "logo": {
              "@context": "http://schema.org",
              "@type": "ImageObject",
              "author": "Kervin Vasquez",
              "contentUrl": "http://kervin.tech/logo.PNG",
              "url": "http://kervin.tech/logo.PNG",
              "datePublished": "2020-02-26",
              "description": "This is the company logo of Kervin Tech",
              "name": "Kervin Tech Logo"
            }
          },
          "editor": "Kervin Vasquez", 

          "genre": "${post.primary_tag.name} tips", 
          "keywords": "${post.tags.map((tag) => tag.name).join(",")}", 
          "wordcount": "${post.plaintext.split(" ").length}", 
          "articleBody": ${JSON.stringify(post.plaintext)},
          "text": ${JSON.stringify(post.plaintext)},
            
           "mainEntityOfPage": "True"
          }
          `,
        }}
      />
    </Layout>
  )
}

function getRandomItems(array, quantity) {
  let indexs = []
  let elements = []

  while (indexs.length < quantity) {
    let randomNumber =
      Math.floor(Math.random() * (array.length - 1 - 0 + 1)) + 0
    if (!indexs.includes(randomNumber)) {
      indexs.push(randomNumber)
      elements.push(array[randomNumber])
    }
  }
  return elements
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    singlePost: ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      feature_image
      html
      reading_time
      published_at(formatString: "MMM DD YYYY")
      created_at(formatString: "MMM DD YYYY")
      updated_at(formatString: "MMM DD YYYY")
      excerpt
      plaintext
      primary_author {
        name
        profile_image
        bio
      }
      primary_tag {
        name
      }
      tags {
        name
        id
        slug
      }
    }

    allOtherPosts: allGhostPost(filter: { slug: { ne: $slug } }) {
      nodes {
        id
        title
        slug
        feature_image
        html
        reading_time
        published_at(formatString: "MMM DD YYYY")
        created_at(formatString: "MMM DD YYYY")
        updated_at(formatString: "MMM DD YYYY")
        excerpt
        plaintext
        primary_author {
          name
          profile_image
          bio
        }
        primary_tag {
          name
        }
        tags {
          name
          id
          slug
        }
      }
    }
  }
`
