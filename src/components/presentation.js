import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown';

const Presentation = () => (
  <StaticQuery
    query={graphql`
      query PresentationDetailQuery {
        strapiPresentation {
          content
        }
      }
    `}
    render={data => (
        <section id="presentation">
            <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
                <div className="ten wide column">
                <h1>Qui suis-je ?</h1>
                  <div><ReactMarkdown source={data.strapiPresentation.content} /></div>
                </div>
            </div>
            <p></p>
        </section>
    )}
  />
)

export default Presentation
