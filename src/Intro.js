import React, {useState} from 'react'
import {Typewriter} from 'react-simple-typewriter'
import './Intro.css'

function Intro() {
  return (
    <div className = "intro-container">
      <h2 className = "sub-header">Hey, my name is</h2>
      <h1 className = "header">Diego Valles</h1>
      <h1 className = "header">
      I am a
        <Typewriter 
          words = {[
            " software engineer",
            " problem solver",
            " web developer",
            " leader",
            " web designer",
            " quick learner"
          ]}
          style = {{fontSize: "10rem"}}
          loop = {10}
          cursor = {true}
          cursorStyle = "_"
          typeSpeed = {100}
          deleteSpeed = {50}
          delaySpeed={1500}
        />
      </h1>
    </div>
  )
}

export default Intro