import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1.0875rem 0`,
        fontSize: `2.5rem`,
        textAlign:`center`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `hsla(0, 0%, 0%, 0.8)`,
            textDecoration: `none`,
            backgroundColor: `yellow`,
            fontFamily: `'Domine', serif`, 
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div 
        style={{
          fontSize: `20px`,
          margin: `.5rem 0`
        }}
      >
        <Menu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
