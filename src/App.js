import React, { useState } from 'react'

import { Header, Userbox, Inbox, Mail, Calendar } from './Components'

function App() {
  const [navItem, setNavItem] = useState(false)
  const [color, setColor] = useState('#4d76fd')

  return (
    <div className="wrapper">
      <Header
        navItem={navItem}
        setNavItem={setNavItem}
        color={color}
        setColor={setColor}
      />
      {/* <div className="page-content"> */}
      <Userbox color={color} />
      <div className="main-box">
        {!navItem ? (
          <>
            <div className="inbox-container">
              <Inbox />
            </div>
            <div className="mail-container">
              <Mail />
            </div>
          </>
        ) : (
          <div className="calendar-wrapper">
            <Calendar />
          </div>
        )}
        {/* </div> */}
      </div>
    </div>
  )
}

export default App
