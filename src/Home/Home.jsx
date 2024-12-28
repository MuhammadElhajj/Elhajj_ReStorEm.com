import React from 'react'
import './Home.css'
import CardContainer from './CardContainer'
import CardInfo from './CardInfo'
import FooterInfo from '../Components/FooterInfo'
// import { Link } from "react-router-dom";
import AppSlider from '../Components/AppSlider'
// import Logo from '../images/squarespace-logo_icon-icons.com_57069 (1).png'


function Home() {

  const ArreyLetters = [
    {
      letter : 'R',
      color : 'red',
    },
    {
      letter : 'e',
      color : 'rgb(212, 255, 0)',
    },
    {
      letter : 'S',
      color : 'rgb(21, 255, 0)',
    },
    {
      letter : 't',
      color : 'rgb(0, 251, 255)',
    },
    {
      letter : 'o',
      color : 'rgb(0, 42, 255)',
    },
    {
      letter : 'r',
      color : 'rgb(225, 0, 255)',
    },
    {
      letter : 'E',
      color : 'rgb(225, 0, 255)',
    },
    {
      letter : 'm',
      color : 'rgb(255, 169, 169)',
    },
  ]
  return (
    <div className='Home'>
      
      <div className='row Home-container'>
        {
          CardInfo.map(item => <CardContainer header={item.header} child={item.Children}  />)
        }
      </div>
      <AppSlider/>
      {/* <AppSlider/> */}
      <div className='footer1'>
      <div className='footer-third'>
        {/* <img className='Footer-logo' src={Logo} alt='Logo'/> */}
        <h2>
          {
            ArreyLetters.map(item => <span style={{color : item.color}}>{item.letter}</span>)
          }
          </h2>
      </div>
        <div className='footer-second row m-0'>
        
        {
          FooterInfo.map(item => <div className=' col-6 col-sm-6 col-md-3 col-lg-3 d-flex flex-column'>
<h3>{item.name}</h3>
{
  item.Links.map(item => <a className='footer-link' href='#'>{item.link}</a> )
}
          </div>)
        }
      </div>
      

      </div>
    </div>
  )
}

export default Home
