import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { OutboundLink}  from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import Presentation from '../components/presentation'
import Activites from '../components/activites'
import Agenda from '../components/agenda'
import Contact from '../components/contact'

import './index.css'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query PresentationQuery {
        strapiPresentation {
          id
          identity
          activity
          work
          location
        }
      }
    `}
    render={data => (
      <Layout>
        <section id="cover">
            <video loop muted autoPlay playsInline poster="https://firebasestorage.googleapis.com/v0/b/christine-commarmond.appspot.com/o/banner_static_sd.jpg?alt=media&token=8b8db013-d64f-425a-bf4d-22fff927462c">
              <source src="https://firebasestorage.googleapis.com/v0/b/christine-commarmond.appspot.com/o/banner_sd.mp4?alt=media&token=458e20f2-eb55-44ef-a268-39ecc74357ab" type="video/mp4" />
            </video>
            <div className="ui basic segment center aligned" style={{position:'relative', height: '100%'}}>
                <div className="test" style={{postion:'relative'}}>
                    <h1>{data.strapiPresentation.identity}</h1>
                    <h3>{data.strapiPresentation.activity}</h3>
                    <h5>{data.strapiPresentation.work}</h5>
                    <p>{data.strapiPresentation.location}</p>
                    <div className="links">
                      <OutboundLink href="https://www.facebook.com/commarmondch"><i className="fab fa-facebook-square"></i></OutboundLink>
                      <OutboundLink href="https://www.instagram.com/christinecommarmond/"><i className="fab fa-instagram"></i></OutboundLink>
                      <OutboundLink href="https://twitter.com/chriscommarmond"><i className="fab fa-twitter"></i></OutboundLink>
                      <OutboundLink href="https://fr.linkedin.com/in/christine-commarmond-25750b105"><i className="fab fa-linkedin"></i></OutboundLink>
                    </div>
                    <a href={"#presentation"}>
                      <div style={{position: 'relative'}}>
                        <span className="scroll"></span>
                      </div>
                    </a>
                </div>
            </div>
        </section>
        <Agenda></Agenda>
        <Presentation></Presentation>
        <Activites></Activites>
        <Contact></Contact>
      </Layout>
    )}
    />
)

export default IndexPage
