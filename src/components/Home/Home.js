import React from 'react'
import Header from '../Header/Header'
import DashContainer from '../DashContainer/DashContainer'
const Home = () => {
  return (
    <div className="App">
      <Header />
      <div id='map'></div>
      {/* <DashContainer /> */}
    </div>
  )
}

export default Home