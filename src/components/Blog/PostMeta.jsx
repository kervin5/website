import React from "react"
import styled from "styled-components"

const StyledPostMeta = styled.div`
  display: flex;
  padding: 0 20px 20px;

  .AuthorPicture {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    margin-right: 10px;
    img {
      height: 100%;
      width: auto;
    }
  }

  .MetaData {
    p {
      margin-bottom: 0px;
      text-transform: uppercase;
    }

    .AuthorName {
      font-weight: bold;
      font-size: 0.9rem;
    }

    .Reading {
      font-size: 0.75em;
    }
  }
`

const postMeta = ({ post }) => {
  return (
    <StyledPostMeta className="PostMeta">
      <div className="AuthorPicture">
        <img src={post.primary_author.profile_image} alt="Profile "></img>
      </div>
      <div className="MetaData">
        <p className="AuthorName">{post.primary_author.name}</p>
        <p className="Reading">
          {" "}
          {post.published_at} • {post.reading_time} Min Read
        </p>
      </div>
    </StyledPostMeta>
  )
}

export default postMeta
