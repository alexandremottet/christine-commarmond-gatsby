import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import './articles.css'

const SecondPage = ({ data }) => (
    <div className="ui centered grid" style={{paddingTop: '50px'}}>
        <div className="twelve wide column">
            <div className="ui list">
                {data.allStrapiArticle.edges.reverse().map(document => (
                    <div className="item" key={document.node.id}>
                        <div className="header">{document.node.title}</div>
                        <div style={{'textAlign': 'center'}}>le {new Date(document.node.createdAt).toLocaleDateString()}</div>
                        <div style={{'marginTop': '20px'}}><ReactMarkdown source={document.node.content} /></div>
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
          createdAt
          author {
              id
              username
          }
        }
      }
    }
  }
`
