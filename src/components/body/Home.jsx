import React from 'react'
import { motion } from 'framer-motion'
import landingImage from "../../images/Pic.png";

function Home() {
  document.title = "Home"

  return (
    <section className='landing' >
      <div className="textContainer waviy">
        <h1 className='name'>
          Vinay Katta
        </h1>

        <p className="description">
          I am a Full stack developer
        </p>


      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          src={landingImage}
          alt=""
        />
      </div>
    </section>
  )
}

export default Home