require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Kervin Vasquez - Web Developer`,
    description: `I'm a web developer based in Los Angeles, passionate for creating robust yet user friendly solutions. Writing reusable, scalable, testable, and efficient software with Javascript and PHP is what I do best 😁.`,
    author: `@kervin5`,
    siteUrl: `https://kervin.tech`,
    twitterHandle: "@kervin5",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kervin.tech - Web Developer`,
        short_name: `Kervin.tech`,
        start_url: `/`,
        background_color: `#F45A2C`,
        theme_color: `#F45A2C`,
        display: `minimal-ui`,
        icon: `src/images/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Fira Mono`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GATSBY_CMS_API_URL,
        contentApiKey: process.env.GATSBY_CMS_CONTENT_API_KEY,
        plugins: [
          {
            resolve: `gatsby-ghost-social-cards`,
            options: {
              base: `base.jpg`,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
