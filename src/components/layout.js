import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' }
          ]}
        >
          <html lang="en" />
          <meta property="title" content={data.site.siteMetadata.title} />
          <meta property="description" content='Site personnel de Christine Commarmond écrivaine Publique dans la région Auvergne' />
          <meta property="keywords" content='écrivain, écrivaine, publique, public, christine, commarmond, auvergne, puy-de-dome, sainte-florine' />
          <meta property="robots" content='index, follow' />
          <meta property="title" content={data.site.siteMetadata.title} />
          <meta property="author" content='Christine Commarmond' />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:description" content='Site personnel de Christine Commarmond écrivaine Publique dans la région Auvergne' />
          <meta property="og:type" content='website' />
          <meta property="google-site-verification" content="hgFZGH8J_ZX_QbqP--iAd7ICTGh86z7iZco7nEB7HPs" />
          <meta name="msvalidate.01" content="CDEDB43A29F299BBA9EB95B4DD0EAD8E" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
