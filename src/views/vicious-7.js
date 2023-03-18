import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import './vicious-7.css'

const Vicious7 = (props) => {
  return (
    <div className="vicious7-container">
      <Helmet>
        <title>Vicious-7 - OnConf template1</title>
        <meta property="og:title" content="Vicious-7 - OnConf template1" />
      </Helmet>
      <div className="vicious7-hero">
        <h1 className="vicious7-text">THE VICIOUS 7</h1>
        <button className="vicious7-button button">Get Started</button>
      </div>
      <div className="vicious7-features">
        <div className="vicious7-container1">
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="https://images.unsplash.com/photo-1678973788045-b7eb6ae7de08?ixid=Mnw5MTMyMXwwfDF8YWxsfDF8fHx8fHwyfHwxNjc5MTI0Njc1&amp;ixlib=rb-4.0.3&amp;h=400"
          ></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName3"
            image_src="https://images.unsplash.com/photo-1679057783906-90bd5024133e?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3OTEyNDY3NQ&amp;ixlib=rb-4.0.3&amp;h=400"
          ></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
        </div>
      </div>
    </div>
  )
}

export default Vicious7
