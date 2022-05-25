import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Solutions Planner</title>
        <meta property="og:title" content="Direct Solutions Planner" />
      </Helmet>
    </div>
  )
}

export default Home
