import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Quick tips and tricks to master the gadgets near you</h1>
        <p>Welcome to your Simple Tech Man Website.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
