import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div id="content">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.css' }
      ]}
      script={[
        { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/semantic-ui@2.3.1/dist/semantic.min.js' }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div style={{height:'50px'}}></div>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`