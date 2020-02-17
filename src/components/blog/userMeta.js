import React from "react"
import styled from "styled-components"

const StyledUserMeta = styled.div`
  display: flex;
  padding: 0 20px 20px;
  margin: 20px auto;

  .AuthorPicture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img {
      height: 100%;
      width: auto;
    }
  }

  .AuthorBio {
    font-size: 0.9em;
  }

  .MetaData {
    width: 100%;
    p {
      margin-bottom: 0px;
    }

    .AuthorName {
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: uppercase;
    }

    .Caption {
      font-size: 0.75em;
      text-transform: uppercase;
    }
  }
`

const UserMeta = ({ post }) => {
  return (
    <StyledUserMeta className="StyledUserMeta">
      <div className="AuthorPicture">
        <img src={post.primary_author.profile_image} alt="Profile "></img>
      </div>
      <div className="MetaData">
        <p className="Caption">ESCRITO POR</p>
        <p className="AuthorName">{post.primary_author.name}</p>
        <p className="AuthorBio">{post.primary_author.bio}</p>
      </div>
    </StyledUserMeta>
  )
}

export default UserMeta
