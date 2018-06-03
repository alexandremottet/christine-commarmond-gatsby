import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <header className="ui fixed menu">
    <Link className="item" to="/">
      Accueil
    </Link>
    <Link className="item" to="/articles/">
      Blog
    </Link>
  </header>
)

export default Header
