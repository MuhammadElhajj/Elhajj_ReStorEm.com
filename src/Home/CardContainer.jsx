import React from 'react'
// import { Link } from "react-router-dom";

function CardContainer(props) {
  return (
    // <div className='col col-6 col-lg-3 col-md-4 col-sm-6 col-xs-6 CardContainer'>
    <div className='CardContainer'>
    <div className='CardContainer-secont'>
      <h1>{props.header}</h1>
      <div className='row PhotoContainer'>
  
        {
          props.child.map(item =><div className='col-6 Photo'><img src= {item.rce} alt={item.alt} /><a className='Linkogproduc' href ={item.id}>{item.name}</a></div>)
        }
      </div>
    </div>
    </div>
  )
}

export default CardContainer
