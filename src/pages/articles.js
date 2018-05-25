import React from 'react'
import Link from 'gatsby-link'

import './articles.css'

const SecondPage = ({ data }) => (
    <div className="ui centered grid" style={{paddingTop: '50px'}}>
        <div className="eight wide column">
            <div className="ui list">
                {data.allStrapiArticle.edges.map(document => (
                    <div className="item" key={document.node.id}>
                        <div className="header">{document.node.title}</div>
                        <pre>{document.node.content}</pre>
                    </div>
                ))}
            </div>
        </div>
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
          author {
              id
              username
          }
        }
      }
    }
  }
`
