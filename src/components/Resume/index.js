import React from 'react';
import './resume.css'
import pdf from '../../assets/pdf/coding-resume.pdf'
function Resume () {
    return(
    <div>
        <p>Download my
        <a href={pdf} download> Resume.</a>
        </p>
        <section className="sectionResume">
            <div className="introResume">
            <h2>Marvin Ren</h2>
            <br></br>
            <h3>TECHNICAL SKILLS</h3>
            <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap, Materialize, Cloudinary </p>
            </div>

            <h3>
                Front-end Proficiencies
            </h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li></li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>
                Back-end Proficiencies
            </h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    </div>
    )
}

export default Resume 