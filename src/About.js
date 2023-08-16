import React from 'react'
import './About.css'

function About() {
  return (
    <div id = "about">
      <h1 className = "section-header">About</h1>
      <div id = "bio">
        <p>
          I'm Diego Valles, a highly motivated Software Engineer with a passion for problem-solving and technology. 
          I graduated from the University of Texas at El Paso in 2020 with the intent to attend law school. 
          However, amidst the challenges brought by the pandemic, I discovered a new and exciting interest in programming. 
          Eager to embrace this newfound passion, I made a bold decision to switch career paths and enrolled at Flatiron School for software development. 
          Now graduated, I am seeking opportunities to contribute my skills and make a meaningful impact in a dynamic and innovative organization.
        </p>
        <img src={process.env.PUBLIC_URL + '/diego.png'} alt="Picture of Diego" />
      </div>
    </div>
  )
}
export default About