// import { Link } from "react-router-dom";
import './App.css';
import HeaderContent from "./Components/HeaderContent";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Singin from "./Sign in/Singin";
import { CgClose } from "react-icons/cg";
import NavBar from "./Components/NavBarContent";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import SelectLanguage from "./Components/SelectLanguage";
// import Logo from './images/squarespace-logo_icon-icons.com_57069 (1).png'
import Logo from './images/Site Logo.jpg'
import { FaUser } from "react-icons/fa";
import SidebarContent from "./Components/SidebarContent";
import Home from "./Home/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './AppSlider.css'
import useLocalSign from "./Components/LSigned";







function App() {


  const [signed , setSigned] = useLocalSign('signed' , false)
  const [visitUser , setVisitUser] = useLocalSign(false)
  const [showSearchMobile, setShowSearchMobile] = useState(false)
  const [mode, setMode] = useState(false)
  //  const [mode, setMode] = useState(() => {
  //   let currentValue

  //   try {
  //     currentValue = JSON.parse(localStorage.getItem())
  //   }catch(error) {
  //     console.log(error)
  //     currentValue = mode 
  //   }
  //  })

  const [Stylesidebar, setStyleSidebar] = useState(-100)


  function ChangeMode() {
    setMode(prev => !prev)
  }
useEffect(() => {
  localStorage.setItem("modeLightDark" , mode )
},[mode])
localStorage.getItem("modeLightDark")


  return (
    <main>
      <div className="Sidebar" style={{ right: `${Stylesidebar}%` }}>
        <div className="Sidebar-name-user">
          <CgClose className="Close-Sidebar" onClick={() => setStyleSidebar(-100)} />
          <h3><FaUser className="Sidebar-FaUser" /><span>{signed && visitUser ? 'Hello Visitor' : "Hello , Sign in"}</span></h3>
        </div>
        <div>
        </div>
        {
          SidebarContent.map(items => <div className="Sidebar-divs">
            <h3>{items.header}</h3>
            {
              items.Children.map(item => <a className="SidebarLinks" href={item.to}>{item.name}</a>)
            }
          </div>)
        }
        <h3 className="LogOut" onClick={
            () => {
            setSigned(prev => !prev)
            setStyleSidebar(-300)
            setVisitUser(prev => !prev)
            }
          }
            >Log out</h3>
      </div>
      {
        signed ?
          <div className="App">
            <div className="main-header">
            <header className="Header">
              <div className="Header-Logo">
                <img className="HeaderLogo" src={Logo} alt="Logo" />
              </div>
              <div className="Header-Search">
                {/* <FaSearch className="FaSearch-labtop" /> */}
                <FaSearch className="FaSearch-labtop"/>
                <input type="search" placeholder="Search for product" list="browsers" />
                <datalist id="browsers">
                  <option>Restorem</option>
                  <option>Covid 19</option>
                  <option>Muhammed ElHajj</option>
                  <option>Cars</option>
                  <option>Fashions</option>
                  <option>Game</option>
                  <option>Make Up</option>
                  <option>SHoses</option>
                  <option>Gifts</option>
                </datalist>
              </div>
              <div className="Mode-Languages">
                <select className="Header-select">
                  {
                    SelectLanguage.map(item => <option id={item.id}>{item.name}</option>)
                  }

                </select>
                {
                  mode ? <FaMoon onClick={ChangeMode} className="ModeIcon" /> : <FaSun onClick={ChangeMode} className="ModeIcon" />
                }
              </div>
              <div className="Header-Link">
                {
                  HeaderContent.map(item => <a className="HedaerLinks" href={item.to}>{item.name}</a>)
                }
                {
                  showSearchMobile ?
                    <CgClose className="FaSearch-mobile" onClick={() => setShowSearchMobile(prev => !prev)} />
                    : <FaSearch className="FaSearch-mobile" onClick={() => setShowSearchMobile(prev => !prev)} />
                }
                <FaBars className="FaBars" onClick={() => setStyleSidebar(0)} />
              </div>
            </header>

            <nav className="NavBar">
              <div className="emptyNavDiv"></div>

              {
                NavBar.map(item => <a className="NavLinks" href='/'>{item.name}</a>)

              }
              <div className="emptyNavDiv"></div>

            </nav>
            
            {
              showSearchMobile && <div className="Nav-search">
                <h2 className='Search__Panel__h2'>Search Panel</h2>
                <input type="search" placeholder="Search for product" />
              <h3>Search</h3>
              
              <h3 onClick={() => setShowSearchMobile(prev => !prev)}>Close</h3></div>
            }
            </div>

            <Home/>


          </div>
          : <Singin setSigned={setSigned} setVisitUser = {setVisitUser} />

      }
    </main>
  );
}

export default App;
