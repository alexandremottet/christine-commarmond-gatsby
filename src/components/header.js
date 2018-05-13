import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className="ui menu">
    <Link className="item" to="/">
      Accueil
    </Link>
    <Link className="item" to="/articles/">
      Blog
    </Link>
  </div>
)

export default Header
