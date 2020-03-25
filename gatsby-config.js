const { blogURI } = require("./globals")

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(`This WordPress Endpoint is used: '${process.env.BASE_URL}'`)
module.exports = {
  siteMetadata: {
    title: `adriantirusli`,
    description: `Blog dari Adrianti Rusli. Sedikit memuat tentang hal-hal berbau pemrograman dan pandangan tentang kehidupan.`,
    author: `@adriantirusli`,
    siteUrl: `https://adriantirusli.me/${blogURI}`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/memoji-adrin.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `${process.env.BASE_URL}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, wpgraphql } }) => {
              return wpgraphql.posts.nodes.map(node => {
                return {
                  title: node.title,
                  description: node.content,
                  date: node.modified,
                  url: `${site.siteMetadata.siteUrl}/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${node.slug}`,
                }
              })
            },
            query: `
              {
                wpgraphql {
                  posts {
                    nodes {
                      title
                      content
                      slug
                      modified
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "adriantirusli",
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
