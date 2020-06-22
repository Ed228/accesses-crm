import React from 'react'
import NavBar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className="row">
          <div className='col-xs-12'>
            <NavBar/>
          </div>
        </div>
      </div>
    </header>
  )
}
