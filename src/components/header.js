// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NavBar from "./navigation/NavBar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: 0,
    }}
  >
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
