import React, { useState, useEffect } from "react"
import styled from "styled-components"
import GhostContentAPI from "@tryghost/content-api"
import { Link } from "gatsby"
const api = new GhostContentAPI({
  url: "https://kervin-tech-cms.herokuapp.com",
  key: process.env.GATSBY_CMS_CONTENT_API_KEY,
  version: "v3",
})

// import SearchIcon from '../ui/Icon/Search'

const StyledSearchForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
`

const StyledInput = styled.input`
  border: none;
  padding: 10px 20px;

  width: 100%;

  animation-timing-function: cubic-bezier(0, 1.24, 1, -0.63);

  &:focus {
    outline: none;
  }
`

const StyledSearchResults = styled.ul`
  text-align: left;
  text-decoration: none;
  max-height: 250px;
  overflow-y: scroll;
  height: 0.01px;
  transition: 300ms;
  margin-bottom: 0;
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    font-weight: bold;

    .Title {
      color: ${(props) => props.theme.accentColor1};
    }

    .Excerpt {
      font-size: 0.7em;
      text-decoration: none;
      font-weight: normal;
      color: ${(props) => props.theme.darkColor};
    }
  }
`

const StyledSearchArea = styled.div`
  border-radius: 5px;
  box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.31);
  transition: 100ms;
  border: 1px solid gray;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightColor};
  &:focus-within {
    /* transform: scale(1.2); */
    ul {
      height: 200px;
    }
  }
`

const SearchBar = () => {
  const [posts, setPosts] = useState([])
  const [results, setResults] = useState([])
  const [query, setQuery] = useState("")
  //   const [focus, setFocus] = useState(false);

  useEffect(() => {
    api.posts
      .browse({ limit: 5 })
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (query && query.length > 2) {
      setResults(
        posts.filter((post) => {
          const textToSearch = query.toLowerCase()
          return (
            post.title.toLowerCase().includes(textToSearch) ||
            post.html.toLowerCase().includes(textToSearch)
          )
        })
      )
    } else {
      setResults([])
    }
  }, [query, posts])

  return (
    <StyledSearchForm method="POST" onSubmit={(e) => e.preventDefault()}>
      <StyledSearchArea>
        <StyledInput
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        {
          <StyledSearchResults className={"SearchResults"}>
            {results.length ? (
              results.map((post) => (
                <Link key={`Post${post.slug}`} to={`/blog/${post.slug}`}>
                  <li>
                    <p className="Title">{post.title}</p>
                    <p className="Excerpt">{post.excerpt}</p>
                  </li>
                </Link>
              ))
            ) : (
              <li>No results</li>
            )}
          </StyledSearchResults>
        }
      </StyledSearchArea>
    </StyledSearchForm>
  )
}

export default SearchBar
