import React from "react"
import { CreateLocalLink } from "../utils"
import UniversalLink from "./UniversalLink"

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <UniversalLink style={{ textDecoration: "none" }}
      to={CreateLocalLink(menuItem, wordPressUrl)}>
      {menuItem.label}
    </UniversalLink>
  )
}

export default MenuItem