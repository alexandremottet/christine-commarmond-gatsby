const path = require(`path`)

const allStrapiArticleQuery = `
  {
    allStrapiArticle {
      edges {
        node {
          id
        }
      }
    }
  }
`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(allStrapiArticleQuery).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allStrapiArticle.edges.forEach(({ node }) => {
        createPage({
          path: `/articles/${node.id}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            id: node.id,
          },
        })
      })

      resolve()
    })
  })
}
