import React from 'react'

function About () {
    return (
    //about me section
    <section id="about-me"> 
        <h2>About Me</h2>
        <img
            src={`/images/self-image.jpg`}
            alt="self-portrait"
            className="img-thumbnail mx-1"
        />
        <p> Marvin obtained a Bachelor of Music degree at the University of Southern California while pursuing a pre-med track. He then completed a Master of Music degree at Yale University, where he received the Stephen & Denise Adams scholarship, the Charles Ives scholarship and the Stephen & Denis Adams Fellowship. Marvin believes that no studies should exist in a vacuum and therefore, by immersing one-self in other professions we are able to put knowledge into context and give meaning to the things we do and the decisions we make. He is currently taking an online Web developer course at Columbia University while teaching guitar lessons online. He is currently living in New York with his girlfriend and two Dalmatians while staying in close contact with his guitar professor. 
        </p> 
    </section>
    );
}

export default About;