import React from "react"
import styled from "styled-components"
import Tag from "./tag"

const StyledTags = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      {tags.map((tag, index) => (
        <Tag key={tag.id + "Tag"} slug={tag.slug}>
          {tag.name}
        </Tag>
      ))}
    </StyledTags>
  )
}

export default Tags
