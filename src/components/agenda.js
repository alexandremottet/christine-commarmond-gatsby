import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';
import { Container } from 'semantic-ui-react'

class Agenda extends React.Component {

  constructor(props) {
    super(props);
    const content = this.props.data.allStrapiNews.edges || [];
    const news = content.sort((a,b) => new Date(a.node.createdAt).getTime() - new Date(b.node.createdAt).getTime()).reverse();
    this.state = {
      latest : news[0] || {}
    };
  }

  render() {
    const latest = this.state.latest.node || {};
    const displayLastNews = (new Date(latest.startDate) <= new Date()) && (new Date(latest.endDate) >= new Date());
    if (displayLastNews) {
      return (
          <section className="ui fixed" style={{background: '#004275e6', color: 'white', padding: '20px 10px'}}>
            <Container>
              <div className="ui centered grid">
                  <div className="twelve wide column">
                      <ReactMarkdown source={this.state.latest.node.content} />
                  </div>
              </div>
            </Container>
          </section>
      )
    }

    return null;
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allStrapiNews {
          edges {
            node {
              id
              content
              startDate
              endDate
            }
          }
        }
      }
    `}
    render={data => <Agenda data={data} {...props} />}
  />
)
