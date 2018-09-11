module.exports = {
  siteMetadata: {
    title: `Christine Commarmond - Ecrivaine Publique`,
    siteUrl: `https://christinecommarmond.fr`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `presentation`,
          `article`,
          `news`,
          `activity`,
          `user`
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125509832-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        sampleRate: 5,
        siteSpeedSampleRate: 10
      },
    }
  ],
}
