import React from 'react'
import './Tech.css'

function Tech({name, fileName}) {
  return (
    <div id = "tech">
      <img src={process.env.PUBLIC_URL + fileName} alt = {name}/>
      <h4>{name}</h4>
    </div>
  )
}

export default Tech