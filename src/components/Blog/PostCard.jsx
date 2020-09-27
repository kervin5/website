import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PostMeta from "./PostMeta"
import Tags from "./Tags"

const StyledCard = styled.div`
  background-color: ${(props) =>
    props.theme.name === "light"
      ? props.theme.lightColor
      : props.theme.mutedColor};
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
      color: ${(props) =>
        props.theme.name === "light"
          ? props.theme.accentColor1
          : props.theme.mainColor};
      font-size: 0.8em;
      margin-bottom: 0;
    }

    .Title {
      font-size: ${(props) => (props.smallFont ? "0.8em" : "1.2em")};
      margin-bottom: 10px;
    }

    .Excerpt {
      font-size: 0.8em;
      margin-bottom: 5px;
      /* color: ${(props) =>
        props.theme.name === "light"
          ? props.theme.darkColor
          : props.theme.mainColor}; */
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.darkColor};
      transition: 300ms;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    .Content {
      a {
        color: ${(props) => props.theme.lightColor};
      }
    }
  }
`

const PostCard = ({ post, noImage, tags, noExcerpt, smallFont }) => {
  return (
    <StyledCard smallFont={smallFont}>
      {!noImage && (
        <Link to={`/blog/${post.slug}`}>
          <img src={post.feature_image} alt={post.title} />
        </Link>
      )}
      <div className="Content">
        <p className="PrimaryTag">
          {post.primary_tag ? post.primary_tag.name : ""}
        </p>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="Title">{post.title}</h3>
        </Link>
        {tags && <Tags tags={post.tags} />}
        {!noExcerpt && (
          <Link to={`/blog/${post.slug}`}>
            <p className="Excerpt">
              {noImage
                ? post.plaintext.substring(0, 320) + "..."
                : post.excerpt}
            </p>
          </Link>
        )}
      </div>
      <div className="Footer">
        <PostMeta post={post} />
      </div>
    </StyledCard>
  )
}

PostCard.defaultProps = {
  noimage: false,
  tags: false,
  noExcerpt: false,
}

export default PostCard
