import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Container } from "semantic-ui-react";

import Layout from '../components/layout'

import './articles.css'

class Articles extends React.Component {

  render() {
      return (
        <Layout>
          <Container id="container">
              <div className="ui list">
                  {this.props.data.allStrapiArticle.edges.reverse().map(document => (
                      <div className="item" key={document.node.id}>
                      <div className="header"><Link to={`/articles/${document.node.id}`}>{document.node.title}</Link></div>
                          <div style={{'textAlign': 'center'}}>le {new Date(document.node.createdAt).toLocaleDateString()}</div>
                          <div style={{'marginTop': '20px'}}><ReactMarkdown source={document.node.content} /></div>
                          <hr />
                      </div>
                  ))}
              </div>
          </Container>
        </Layout>
      )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
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
    `}
    render={data => <Articles data={data} {...props} />}
  />
)
