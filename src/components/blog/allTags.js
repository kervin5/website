import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Tags from "./tags/tags"
import styled from "styled-components"

const StyledTagsBar = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  .BlogTag {
    margin-bottom: 0.9em;
  }
`

const topThreePosts = () => {
  return (
    <StaticQuery
      query={graphql`
        query allTags {
          allGhostTag {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        return (
          <StyledTagsBar>
            <Tags
              tags={data.allGhostTag.edges.map(edge => ({ ...edge.node }))}
            />
          </StyledTagsBar>
        )
      }}
    />
  )
}

export default topThreePosts
