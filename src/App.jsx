import React from 'react'
import Nav from './Components/Nav/NavBar'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <>
    <div className="wraper">
    <div className="main">
      <div className="card">
      <Home/>
      <Nav/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App