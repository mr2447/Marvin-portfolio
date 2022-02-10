import React from 'react'
import selfImage from '../../assets/images/self-image.jpg'
import meCoding from '../../assets/images/me-coding.jpg'
import './about.css'
import BootstrapCarousel from '../BootstrapCarousel'


function About () {
    return (
        
    <div>
    {/* CAROUSEL */}
        <BootstrapCarousel />
        <div className="flex-grid">
           <div className="col-1 welcomeStatement">
               <h1 >Welcome, 
                   <br/>I'm Marvin,
                   <br/>web developer.
                </h1>
            </div>
            
           <div className="col-2 welcomeImageContainer">
                <img
                    src={meCoding}
                    alt="me at laptop"
                    className="welcomeImage"
                />
           </div>
        </div>
    {/* ABOUT SECTION */}
       <div className="flex-grid">
           <div className="col-1">
                <img
                    src={selfImage}
                    alt="self-portrait"
                    className="portraitImage"
                />
           </div>
           <div className="col-2 aboutMeContainer">
                    <div className="descriptionTitle" id="clickScrolltoAboutMe">
                        <h2>About Me</h2>
                    </div>
                    <div className="descriptionParagraph">
                        <p>Recent full-scholarship Yale University graduate and full stack developer with a certificate in full stack development from Columbia University. Strength in meeting deadlines, creativity, and teamwork over Github. Passionate about approaching web applications from different angles and collaborating with others to create responsive and meaningful web applications. With each project, my aim is to best engage my audience by studiously finding creative ways to solve problems about app functionalities, with a focus on logical user experience. I worked on a team of two to develop a single-page MERN e-commerce app that helps local guitar store owners to manage their sales, inventory and allows customers to browse and purchase. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
                    </div>
                    <div className="about-button">
                        <a href="https://github.com/mr2447" target="_blank">
                            <button>
                                My GitHub
                            </button>
                            </a>
                    </div>
           </div>
       </div>
    </div>
    );
}

export default About;