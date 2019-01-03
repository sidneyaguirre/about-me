import React, { Component } from 'react'

import Header from '../components/Header'
import AboutMe from '../components/AboutMe'

import '../styles/App.css'

class App extends Component{
    render(){
        return(
          <div>
            <Header/>
            <div className="app"> 
            <AboutMe/>
            </div>
          </div>
        )
    }
}

export default App