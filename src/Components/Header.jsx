import React from 'react'
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* eslint-disable import/no-anonymous-default-export */
export default ({ navItem, setNavItem, color, setColor }) => (
  <header>
    <div className="task-manager-header">Task Manager</div>
    <div className="main-area-header">
      <input className="search" type="text" placeholder="Search..."></input>
      <div className="nav">
        <input
          type="checkbox"
          id="switcher-1"
          className="cursor-pointer"
          onClick={() => setNavItem(!navItem)}
        />
        <label htmlFor="switcher-1" className="cursor-pointer"></label>
      </div>
      <div className="theame-button">
        <FontAwesomeIcon icon={faEyeDropper} color="white" className="icon" />
        <input
          type="color"
          value={color}
          onChange={(e) => {
            document.body.style.setProperty('--button-color', e.target.value)
            setColor(e.target.value)
          }}
          className="colorpicker"
          id="colorpicker"
        ></input>
      </div>
    </div>
  </header>
)
