import React from 'react';

function Resume ({currentSection}) {
    return(
    <div>
        <p>Download my
        <a href="./images/coding-resume.pdf" download> Resume.</a>
        </p>
        <section>
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