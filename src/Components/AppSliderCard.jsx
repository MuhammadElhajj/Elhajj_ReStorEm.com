import React from 'react'
// import { Link } from "react-router-dom";

function AppSliderCard(props) {
  return (
    <div className='AppSliderCard'>
      <img src={props.src} alt={props.alt} />
      <h3>{props.name}</h3>
      <p>{props.p}</p>
<a href='#' className='Download-link'>Dounload</a>
    </div>
  )
}

export default AppSliderCard
