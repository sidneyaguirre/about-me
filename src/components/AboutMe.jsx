import React, { Component } from 'react'

import '../styles/AboutMe.scss'

class AboutMe extends Component{
    render(){
        return(
            <section className="aboutme">

                <div className="aboutme__profile">
                    <div className="aboutme__profile--photo">
                        <div className="aboutme__profile--image">
                            <img src="https://pbs.twimg.com/profile_images/1080340293734596609/sPzR_JAX_400x400.jpg" alt="sid"/>
                        </div>
                        <p>&laquo; wether you think you can or can't,<br/> you're right &raquo; H.F</p>
                    </div> 
                    <div className="aboutme__profile--bio">
                        <h1>Hello... Welcome to my site!</h1>&nbsp;
                        <article>
                            <h3>As you are now here, I will tell you a bit about myself:</h3>
                            <li>My full name is Sidney Aguirre Castro <span role="img" aria-label="gem">💎</span></li>&nbsp;
                            <li>I was born in 1993-05-26 <span role="img" aria-label="bear">🧸</span></li>&nbsp;
                            <li>I am from Cali (Valle del Cauca - Colombia <span role="img" aria-label="colombianFlag">🇨🇴</span>)</li>&nbsp;
                            <li>I like fruits &amp; veggies<span role="img" aria-label="fruits-veggies">🍊🥦🍉🍇🥬</span></li>&nbsp;
                            <li>I love cupcake + coffee<span role="img" aria-label="cupcake-cofee">🧁☕</span></li>&nbsp;
                            <li>I believe there's one God &amp; his name is <strong>Jesus</strong><span role="img" aria-label="heart">💜</span></li>&nbsp;
                            <li>I study <strong>software engineering</strong><span role="img" aria-label="programmer">👩🏻‍💻</span></li>&nbsp;
                            <li>I am a Web developer <span role="img" aria-label="pc">🖥</span></li>&nbsp;
                        </article>
                    </div>
                    <div className="aboutme__profile--socialmedia">
                        <a href="https://www.instagram.com/sidney_pao/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram faa-shake animated-hover"></i></a>
                        <a href="https://twitter.com/sidney_pao" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter faa-shake animated-hover"></i></a>
                        <a href="https://www.github.com/sidneyaguirre" target="_blank" rel="noopener noreferrer"><i className="fab fa-github faa-shake animated-hover"></i></a>
                        <a href="https://www.linkedin.com/in/sidney-aguirre-718a82109/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in faa-shake animated-hover"></i></a>
                    </div>
                </div>

                

            </section>
        )
    }
}

export default AboutMe