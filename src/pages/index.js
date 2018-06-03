import React from 'react'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import './index.css'

const IndexPage = ({ data }) => (
  <div className="content">
    <section id="cover">
        <div className="ui basic segment center aligned" style={{position:'relative', height: '100%'}}>
            <div className="test" style={{postion:'relative'}}>
                <h1>Christine Commarmond</h1>
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
    <section className="ui fixed" style={{background: '#d688a4e6', color: 'white', padding: '20px 10px'}}>
      <div className="ui centered grid">
          <div className="twelve wide column">
            <p>Je serai présente</p>
            <p>Je serai présente au prochain .....</p>
          </div>
      </div>
    </section>
    <section id="presentation">
        <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
            <div className="ten wide column">
            <h1>Qui suis-je ?</h1>
            {data.allStrapiPresentation.edges.map(document => (
                <div><ReactMarkdown source={document.node.content} /></div>
            ))}
            </div>
        </div>
        <p></p>
    </section>
    <section id="tarif">
        <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
            <div className="ten wide column">
              <h1>Prestations</h1>
              <h5>Chaque projet est personnel et différent, les tarifs indiqués ci-dessous ne sont que indicatif</h5>

              <div className="ui basic segment">
                <div className="ui left floated tiny statistic">
                  <div className="value">
                    Récit de vie, biographie
                  </div>
                </div>
                <p>
                  Deux heures d’entretien gratuit pour la première consultation.
                  Ensuite forfait entretien (2h) + écriture (10 heures de travail) :
                  400 € ( ce tarif inclut les enregistrements, la saisie du document,
                  les corrections et la livraison sur papier, clé USB, ou par e-mail.
                </p>
                <div className="ui left floated tiny statistic">
                  <div className="value">
                    Suivi administratif
                  </div>
                </div>
                <p>
• Aide à la constitution de dossiers administratifs : 30 € /heure
• Rédaction de courriers administratifs : 30 € la page
• Tri et classement de papier : 20 € / heure
• Rédaction de courriers personnels : 20 €/heure
                </p>
                <div className="ui left floated mini statistic">
                  <div className="value">
                    Autres
                  </div>
                </div>
                <p>
                • Lettre de motivation : 30 € la page
                • CV : 25 € la page
                • Forfait (lettre de motivation+ CV) : 40 € la page
                </p>
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
