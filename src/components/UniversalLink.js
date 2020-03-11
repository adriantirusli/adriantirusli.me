import React from "react"
import { Link as GatsbyLink } from "gatsby"

const UniversalLink = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)
  
  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
export default UniversalLink