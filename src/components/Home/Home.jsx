import React from 'react'
import Designs from '../Designs/Designs'
// import CreateFullCard from '../Designs/CreateFullCard'
import './Home.css'
function Home() {
  return (
      <div>
      <section id="hero">
        
        <div className="hero container">
        <div className="hero__text">
            <h1 className="hero__head"> let us design your<span>bead</span> </h1>
            <p className="hero__para">we design to your test</p>
            <p className="hero__latest">check our latest design </p>
            <a href="/" className="btn hero__btn"  >Here</a>
        </div>
        <div className="particles"></div>
        {/* <div className="waves"></div> */}
        </div>
          </section>
      <Designs />
      </div>
  )
}

export default Home