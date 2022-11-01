import Hr from 'components/horizontal-line'
import React from 'react'
import Banner from './components/banner'
import FeatureList from './components/feature-list'
import Features from './components/features'
import Navigation from './components/navigation'
import ReadyTrial from './components/ready-trial'
import Solutions from './components/solutions'
import Support from './components/support'

const Home = () => {
  return (
    <div>
        <Navigation />
        <Hr />
        <Banner />
        <FeatureList />
        <Features />
        <Solutions />
        <Support />
        <ReadyTrial />

        <Hr />
        <Navigation />
    </div>
  )
}

export default Home