import React from 'react'
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* eslint-disable import/no-anonymous-default-export */
export default ({ navItem, setNavItem }) => (
  <header>
    <div className="task-manager-header">Task Manager</div>
    <div className="main-area-header">
      <div className="serach-bar">
        <input className="search" type="text" placeholder="Search..."></input>
      </div>
      <div className="nav">
        <input
          type="checkbox"
          id="switcher-1"
          className="cursor-pointer"
          onClick={() => setNavItem(!navItem)}
        />
        <label htmlFor="switcher-1" className="cursor-pointer"></label>
      </div>
      <div className="theame-button cursor-pointer">
        <FontAwesomeIcon icon={faEyeDropper} color="white" />
      </div>
    </div>
  </header>
)
