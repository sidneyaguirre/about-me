import React, { Component } from 'react' 

import '../styles/Header.scss'

class Header extends Component{
    render(){
        return (
            <header className="header">
                <div className="header__title">
                    <h1>Sidney</h1>
                </div>
                <div className="header__navbar">
                    <ul>
                        <li className="home"><span>Home</span></li>
                        <li className="projects"><span>Projects</span></li>
                        <li className="blog"><span>Notepads</span></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
