import React from 'react'
import Link from 'gatsby-link'

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
                <div style={{position: 'relative'}}>
                    <span className="scroll"></span>
                </div>
            </div>
        </div>
    </section>
    <section id="presentation">
        <div className="ui horizontal divider" style={{margin:0, paddingTop: '50px'}}>
            <h2>Qui suis-je ?</h2>
            <p>Je susi écraivaine publique. Je vous accompagne ...</p>
        </div>
        <p></p>
    </section>
  </div>
)

export default IndexPage
