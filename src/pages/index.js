import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import './index.css'

const IndexPage = ({ data }) => (
  <div className="content">
    <section id="cover">
        <div className="ui basic segment center aligned" style={{position:'relative', height: '100%'}}>
            <div className="test" style={{postion:'relative'}}>
                <h1>christine commarmond</h1>
                <h3><i>lettre, biographie, mémoire</i></h3>
                <h5>écrivaine publique</h5>
                <p>Clermont-Ferrand, Auvergne, France</p>
                <a href={"#presentation"}>
                  <div style={{position: 'relative'}}>
                      <span className="scroll"></span>
                  </div>
                </a>
            </div>
        </div>
    </section>
    <section id="presentation">
        <div className="ui grid" style={{margin:0, paddingTop: '50px'}}>
            <div className="sixteen wide column">
            <h2>Qui suis-je ?</h2>
            {data.allStrapiPresentation.edges.map(document => (
                <div><ReactMarkdown source={document.node.content} /></div>
            ))}
            </div>
        </div>
        <p></p>
    </section>
    <section id="tarif">
        <div className="ui grid" style={{margin:0, paddingTop: '50px'}}>
            <div className="sixteen wide column">
              <h2>Tarif</h2>
              <h5>Chaque projet est personnel et différent, les tarifs indiqués ci-dessous ne sont que indicatif</h5>
              <div class="ui items">
                <div class="item">
                  <div class="content">
                    <a class="header">Cute Dog</a>
                    <div class="description">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <p></p>
    </section>
  </div>
)

export default IndexPage

export const presentationQuery = graphql`
  query PresentationQuery {
    allStrapiPresentation {
      edges {
        node {
          id
          content
        }
      }
    }
  }
`
