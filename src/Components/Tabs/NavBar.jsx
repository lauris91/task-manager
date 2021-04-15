import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <div className="navbar-brand mr-5">
          <a href="/">LOGO</a>
        </div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link cursor-pointer">Features</li>
          <li className="nav-item nav-link cursor-pointer">divi</li>
          <li className="nav-item nav-link cursor-pointer">tris</li>
          <li className="nav-item nav-link cursor-pointer">četri</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
