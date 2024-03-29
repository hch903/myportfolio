/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `HaoChen Hsieh`,
    siteUrl: `https://haochenhsieh.gatsbyjs.io/`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify"
  ]
};