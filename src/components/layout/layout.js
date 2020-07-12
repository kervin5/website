/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ReactGA from "react-ga"
import styled from "styled-components"

import Theme from "./Theme"
import { CustomThemeProvider } from "../../context/ThemeContext"
import Header from "../header"
import Footer from "./Footer"
import "./layout.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0;
  padding-top: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.lightColor};
  color: ${(props) => props.theme.darkColor};

  a{
    /* color: ${(props) => props.theme.accentColor3}; */
    &:visited {
    color: ${(props) => props.theme.mainColor};
    }
  }
`

const Layout = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize("UA-147253394-1")
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <CustomThemeProvider>
      <Theme>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>
          <main>{children}</main>
          <Footer />
        </StyledLayout>
      </Theme>
    </CustomThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
