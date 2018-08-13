import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'

const PresentationPage = ({ content }) => (
    <section id="presentation">
        <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
            <div className="ten wide column">
            <h1>Qui suis-je ?</h1>
              <div><ReactMarkdown source={content} /></div>
            </div>
        </div>
        <p></p>
    </section>
)

export default PresentationPage

export const query = graphql`
  fragment PresentationContentFragment on StrapiPresentation {
      content
  }
`;
