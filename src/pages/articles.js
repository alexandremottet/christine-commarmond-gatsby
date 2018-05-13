import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => (
  <div>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default SecondPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
