import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import './articles.css'

const SecondPage = ({ data }) => (
    <div className="ui centered grid" style={{paddingTop: '50px'}}>
        <div className="eight wide column">
            <div className="ui list">
                {data.allStrapiArticle.edges.reverse().map(document => (
                    <div className="item" key={document.node.id}>
                        <div className="header">{document.node.title}</div>
                        <div><ReactMarkdown source={document.node.content} /></div>
                        <hr />
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
