import React from 'react'
import Navbar from './componets/Navbar'
// import profile from './componets/Navbar'
import Nav_footer from './componets/Nav_footer'
// import About from './componets/About/About'
import { Routes, Route } from 'react-router-dom';
// import about1 from './componets/About/about1';
// import Navbar11 from './componets/Navbar11';
import { NavLink } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg';
import Contact from './componets/Contact'
import './componets/Navbar.css'

const App = () => {
  return (
    <>
    <div>

    <div className='nav1'>
        <ul>
          <li className='li1'>
            <NavLink className="nav2" to="/">Home</NavLink>
          </li >
          <li className='li1'>
            <NavLink className="nav2" to="/About">About</NavLink>
          </li>
          <li className='li1'>
            <NavLink className="nav2" to="/Contact">Contact</NavLink>
          </li>
          <li className='li11'>
            <NavLink className='nav111' to="/Login">Login<CgProfile/></NavLink>
          </li>
        </ul>
    </div>
    <Routes>
      <Route exact path='/'Component={Navbar}/>
      <Route path='/Contact' Component={Contact}/>
    </Routes>
    </div>
    </>

  )
}

export default App

{/* <Navbar/> */}
{/* <Routes> */}
  {/* <Route path='/' Component={Navbar}/> */}
  // <Route path='/compo/About' Component={About}/>
  // <Route path='/Contact' Component={Contact}/>
// </Routes>