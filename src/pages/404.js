import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Monmaap nih, balik ke <a href="/">depan aja ya</a></p>
  </Layout>
)

export default NotFoundPage