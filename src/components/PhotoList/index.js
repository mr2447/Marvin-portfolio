import React from 'react'


function PhotoList() {

    const photos = [
        {
            title: 'Simple Doc',
            filename: 'simple-doc',
            description: 'Manages a small hospital.',
            github: 'https://github.com/mr2447/simple-doc',
            deploy: 'https://enigmatic-sea-73658.herokuapp.com/'
        },
        {
            title: 'Eat in Peace',
            filename: 'eat-in-peace',
            description: "Track user's diet based on BMI.",
            github: 'https://github.com/mr2447/dreamteam',
            deploy: 'https://mr2447.github.io/dreamteam/'
        },
        {
            title: 'Weather Dashboard',
            filename: 'weather-dashboard',
            description: 'Checks weather with third party API.',
            github: 'https://github.com/mr2447/weather-daashboard',
            deploy: 'https://github.com/mr2447/weather-daashboard'
        },
        {
            title: 'Team Generator',
            filename: 'team-generator',
            description: 'Generates team profile.',
            github: 'https://github.com/mr2447/team-profile-generator',
            deploy: 'https://github.com/mr2447/team-profile-generator'
        },
        {
            title: 'Run Buddy',
            filename:'run-buddy',
            description: 'A front-end html for small business.',
            github: 'https://mr2447.github.io/run-buddy/',
            deploy: 'https://mr2447.github.io/run-buddy/'
        },
        {
            title: "Lyza's Portfolio",
            filename:'lyza-portfolio',
            description: "Lyza's photography portfolio.",
            github: 'https://github.com/mr2447/lyza-portfolio',
            deploy: 'https://mr2447.github.io/lyza-portfolio/' 
        }
    ]
    return (
        <div className="flex-row">
            {photos.map((photo)=> { 
                return (
                    <div key={photo.filename}>
                    <a href={photo.deploy} target="_blank">
                    <img
                    src={`/images/${photo.filename}.jpg`}
                    alt={photo.title}
                    className="img-thumbnail mx-1"
                    />
                    </a>
                    <h3>{photo.title}</h3>
                    <br/>
                    <span>{photo.description} <a href={photo.github} target="_blank"> Github Repo</a></span>
                    <br/>
                    <br/>
                    </div>
                );
            })} 
        </div>
    )
}

export default PhotoList;