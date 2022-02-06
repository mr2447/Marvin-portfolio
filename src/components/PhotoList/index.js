import React from 'react'
import simpleDoc from '../../assets/images/simple-doc.jpg'
import eat from '../../assets/images/eat-in-peace.jpg'
import weather from '../../assets/images/weather-dashboard.jpg'
import team from '../../assets/images/team-generator.jpg'
import run from '../../assets/images/run-buddy.jpg'
import lyza from '../../assets/images/lyza-portfolio.jpg'
import guitarShop from '../../assets/images/guitar-shop.jpg'

function PhotoList() {
    const featurePhoto = [
        {
            title: "guitar-shop",
            filename: guitarShop,
            description: "An e-commerce app that allows users to buy and sell guitars.",
            github: ' https://github.com/mr2447/guitar-shop',
            deploy: ' https://pacific-fjord-62324.herokuapp.com/' 
        }
    ]

    const photos = [
        {
            title: 'Simple Doc',
            filename: simpleDoc,
            description: 'Helps manages a small hospital.',
            github: 'https://github.com/mr2447/simple-doc',
            deploy: 'https://enigmatic-sea-73658.herokuapp.com/'
        },
        {
            title: 'Eat in Peace',
            filename: eat,
            description: "Track user's diet based on BMI.",
            github: 'https://github.com/mr2447/dreamteam',
            deploy: 'https://mr2447.github.io/dreamteam/'
        },
        {
            title: 'Weather Dashboard',
            filename: weather,
            description: 'Checks weather with third party API.',
            github: 'https://github.com/mr2447/weather-daashboard',
            deploy: 'https://github.com/mr2447/weather-daashboard'
        },
        {
            title: 'Team Generator',
            filename: team,
            description: 'Generates team profile.',
            github: 'https://github.com/mr2447/team-profile-generator',
            deploy: 'https://github.com/mr2447/team-profile-generator'
        },
        {
            title: 'Run Buddy',
            filename:run,
            description: 'A front-end html for small business.',
            github: 'https://mr2447.github.io/run-buddy/',
            deploy: 'https://mr2447.github.io/run-buddy/'
        },
        {
            title: "Lyza's Portfolio",
            filename: lyza,
            description: "Lyza's photography portfolio.",
            github: 'https://github.com/mr2447/lyza-portfolio',
            deploy: 'https://mr2447.github.io/lyza-portfolio/' 
        },
    ]
    return (
        <div>
            {/* Featured Project */}
            <div className='feature-project'>
                <a href={featurePhoto[0].deploy} target="_blank">
                    <img
                        src={featurePhoto[0].filename}
                        alt={featurePhoto[0].title}
                    />
                </a>
                <div className="feature-project-description">
                    <h2>The Month's Featured App</h2>
                    <h3>Guitar Shop</h3>
                    <p>{featurePhoto[0].description}</p> 
                </div>
                <div className="feature-buttons">
                    <a href={featurePhoto[0].github} target="_blank"> Github Repo</a>
                    <a href={featurePhoto[0].deploy} target="_blank"> Discover</a>
                </div>
            </div>
            
            {/* Projects */}
            <div className="card-container">
            {photos.map((photo)=> { 
                return (
                    <div className="project-card" key={photo.filename}>
                    <a href={photo.deploy} target="_blank">
                        <img
                            src={photo.filename}
                            alt={photo.title}

                        />
                    </a>
                    <h3>{photo.title}</h3>
                    <span>{photo.description} <a href={photo.github} target="_blank"> Github Repo</a></span>
                    </div>
                );
            })} 
            </div>
        </div>
    )
}

export default PhotoList;