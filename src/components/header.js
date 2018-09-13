import React from 'react'
import { Link } from 'gatsby'
import { Menu } from "semantic-ui-react";

import './header.css'

const Header = ({ siteTitle }) => (
      <Menu as="header" fixed="top">
        <Menu.Item as={Link} to='/'>Accueil</Menu.Item>
        <Menu.Item as={Link} to='/articles'>Articles</Menu.Item>
        <Menu.Item as={Link} to='#contact'>Contact</Menu.Item>
      </Menu>
)

export default Header
