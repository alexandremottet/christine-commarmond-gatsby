import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink}  from 'gatsby-plugin-google-analytics'

import Presentation from './presentation.js'
import ActivitiesPage from './activities.js'
import AgendaPage from './agenda.js'
import ContactPage from './contact.js'
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
            <video loop muted autoPlay playsInline poster="https://firebasestorage.googleapis.com/v0/b/christine-commarmond.appspot.com/o/banner_static_sd.jpg?alt=media&token=8b8db013-d64f-425a-bf4d-22fff927462c">
              <source src="https://firebasestorage.googleapis.com/v0/b/christine-commarmond.appspot.com/o/banner_sd.mp4?alt=media&token=458e20f2-eb55-44ef-a268-39ecc74357ab" type="video/mp4" />
            </video>
            <div className="ui basic segment center aligned" style={{position:'relative', height: '100%'}}>
                <div className="test" style={{postion:'relative'}}>
                    <h1>{this.state.presentation.node.identity}</h1>
                    <h3>{this.state.presentation.node.activity}</h3>
                    <h5>{this.state.presentation.node.work}</h5>
                    <p>{this.state.presentation.node.location}</p>
                    <div className="links">
                      <OutboundLink href="https://www.facebook.com/commarmondch"><i className="fab fa-facebook-square"></i></OutboundLink>
                      <OutboundLink href="https://www.instagram.com/christinecommarmond/"><i className="fab fa-instagram"></i></OutboundLink>
                    </div>
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
        <ContactPage></ContactPage>
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
          startDate
          endDate
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
