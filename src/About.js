import React from 'react'
import './About.css'
import Tech from './Tech'

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
      <h2 id = "about-subheader">Recent Tech Stack</h2>
      <div id = "techs">
        <Tech name = "JavaScript" fileName = '/js.png'/>
        <Tech name = "React" fileName = '/react.png'/>
        <Tech name = "Rails" fileName = '/rails.png'/>
        <Tech name = "Sinatra" fileName = '/sinatra.png'/>
        <Tech name = "HTML" fileName = '/html.png'/>
        <Tech name = "CSS" fileName = '/css.png'/>
        <Tech name = "SQL" fileName = '/sql.png'/>
        <Tech name = "PostgreSQL" fileName = '/postgre.png'/>
        <Tech name = "SQLite" fileName = '/sqlite.png'/>
        <Tech name = "Git" fileName = '/git.png'/>
      </div>

    </div>
  )
}
export default About