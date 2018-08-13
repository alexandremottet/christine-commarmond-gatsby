import React from 'react'
import Link from 'gatsby-link'

import Presentation from './presentation.js'
import ActivitiesPage from './activities.js'
import AgendaPage from './agenda.js'
import './index.css'

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      presentation: this.props.data.allStrapiPresentation.edges[0],
      news: this.props.data.allStrapiNews.edges,
      activities: this.props.data.allStrapiActivity.edges
    };
  }

  render() {
    return (
      <div className="content">
        <section id="cover">
            <div className="ui basic segment center aligned" style={{position:'relative', height: '100%'}}>
                <div className="test" style={{postion:'relative'}}>
                    <h1>{this.state.presentation.node.identity}</h1>
                    <h3>{this.state.presentation.node.activity}</h3>
                    <h5>{this.state.presentation.node.work}</h5>
                    <p>{this.state.presentation.node.location}</p>
                    <a href={"#presentation"}>
                      <div style={{position: 'relative'}}>
                        <span className="scroll"></span>
                      </div>
                    </a>
                </div>
            </div>
        </section>
        <AgendaPage content={this.state.news}></AgendaPage>
        <Presentation content={this.state.presentation.node.content}></Presentation>
        <ActivitiesPage content={this.state.activities}></ActivitiesPage>
      </div>
    )
  }

}

export default IndexPage;

export const presentationQuery = graphql`
  query PresentationAndNewsQuery {
    allStrapiNews {
      edges {
        node {
          id
          content
          date
        }
      }
    }
    allStrapiActivity {
      edges {
        node {
          id
          name
          description
          content
        }
      }
    }
    allStrapiPresentation {
      edges {
        node {
          id
          identity
          activity
          work
          location
          ...PresentationContentFragment
        }
      }
    }
  }
`;
