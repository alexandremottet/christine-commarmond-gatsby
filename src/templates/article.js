import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Container } from "semantic-ui-react";

import Layout from '../components/layout'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Container id="container">
      <div>
        <h1>{data.strapiArticle.title}</h1>
        <p><ReactMarkdown source={data.strapiArticle.content} /></p>
      </div>
    </Container>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
    }
  }
`
