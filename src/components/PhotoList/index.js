import React, {useState} from 'react'
import simpleDoc from '../../assets/images/simple-doc.jpg'
import eat from '../../assets/images/eat-in-peace.jpg'
import weather from '../../assets/images/weather-dashboard.jpg'
import team from '../../assets/images/team-generator.jpg'
import run from '../../assets/images/run-buddy.jpg'
import lyza from '../../assets/images/lyza-portfolio.jpg'
import guitarShop from '../../assets/images/guitar-shop.jpg'
import Modal from '../Modal'
import './photo-list.css'

function PhotoList(props) {
    const featurePhoto = [
        {
            title: "guitar-shop",
            filename: guitarShop,
            description: "An e-commerce app that allows users to buy and sell guitars. Built with MERN stack, it allows users to create an account, sign-in, upload products and more",
            github: ' https://github.com/mr2447/guitar-shop',
            deploy: ' https://pacific-fjord-62324.herokuapp.com/' 
        }
    ]

    const photos = [
        {
            title: 'Simple Doc',
            filename: simpleDoc,
            description: 'Helps manages a small hospital.',
            fullDescription: 'An app that helps manage a small hospital. The hospital staff will be able to login and, depending on the profession, register a patient and automatically send comments to the patient via email. ',
            role: 'Back end and Front end',
            tools: 'Express.js, express-handlebars, Handlebars, sequelize, Nodemailer. Node.js, RESTful API, MySQL, Heroku.',
            github: 'https://github.com/mr2447/simple-doc',
            deploy: 'https://enigmatic-sea-73658.herokuapp.com/'
        },
        {
            title: 'Eat in Peace',
            filename: eat,
            description: "Track user's diet based on BMI.",
            fullDescription: "A health app that tracks calories based on the user's body mass index. It searches nearby restaurants and tracks calories consumption based on the menu items the user has chosen.",
            tools: "HTML, CSS, JavaScript, CSS Framework Materialize, API Nutritionix v1, Nutritionix v2, API Zip-Codes",
            role: "Back end JavaScript and Front end",
            github: 'https://github.com/mr2447/dreamteam',
            deploy: 'https://mr2447.github.io/dreamteam/'
        },
        {
            title: 'Weather Dashboard',
            filename: weather,
            description: 'Checks weather with third party API.',
            fullDescription: "For traveler to see the weather outlook for multiple cities so that they can plan a trip accordingly. ",
            role: "Back end JavaScript and Front end",
            tools: "Html, CSS, JavaScript",
            github: 'https://github.com/mr2447/weather-daashboard',
            deploy: 'https://github.com/mr2447/weather-daashboard'
        },
        {
            title: 'Team Generator',
            filename: team,
            description: 'Generates team profile.',
            fullDescription: "For Managers to generate a webpage that displays his/hers' team basic info So that their emails and Github profiles can be quickly accessed.",
            role: "Back end JavaScript and Front end design",
            tools: "Html, CSS, JavaScript",
            github: 'https://github.com/mr2447/team-profile-generator',
            deploy: 'https://github.com/mr2447/team-profile-generator'
        },
        {
            title: 'Run Buddy',
            filename:run,
            description: 'A front-end html for small business.',
            fullDescription: "A website that offers fitness training services.",
            role: "Front end design",
            tools: "Html, CSS",
            github: 'https://mr2447.github.io/run-buddy/',
            deploy: 'https://mr2447.github.io/run-buddy/'
        },
        {
            title: "Lyza's Portfolio",
            filename: lyza,
            description: "Lyza's photography portfolio.",
            fullDescription: "A single-page application for a budding photographer, Lyza called Oh Snap! to provide a simple yet sleek platform for showing off her photography skills.",
            tools: "HTML, CSS, JavaScript, React",
            role: "Front end",
            github: 'https://github.com/mr2447/lyza-portfolio',
            deploy: 'https://mr2447.github.io/lyza-portfolio/' 
        },
    ]

    // MODAL
    let photo
    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState([]);
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    function handleClick(photo) {
       
        console.log(photo)
        setModalInfo(photo)
        toggleTrueFalse()
    }

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    }

    const modalContent = () => {
        return (
            <div className="modal-overlay">
                <div className="modal-style">
                    <Modal handleClose={handleClose} modalInfo={modalInfo} >
                        This is a modal
                    </Modal>
                </div>
            </div>
            
           
        )
    } 

    return (
        <div>
            {/* FEATURED PROJECT StARTS*/}
            <div className='feature-project-container'>

                <div className="feature-img-container">
                    <a href={featurePhoto[0].deploy} target="_blank" rel="noopener noreferrer">
                        <img
                            src={featurePhoto[0].filename}
                            alt={featurePhoto[0].title}
                        />
                    </a>
                </div>
                
                <div className="feature-description-container">
                    <div className="description-card-style">
                        <div className="feature-project-description">
                            <h2>The Month's Featured App</h2>
                            <h3>Guitar Shop</h3>
                            <p>{featurePhoto[0].description}</p> 
                        </div>
                        <div className="feature-buttons">
                            <a href={featurePhoto[0].github} target="_blank" rel="noopener noreferrer"> Github Repo</a>
                            <a href={featurePhoto[0].deploy} target="_blank" rel="noopener noreferrer"> Go to App</a>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            {/* FEATURED PROJECT ENDS */}

            {/* ABOUT PORTFOLIO STARTS */}
            <section className="myProjectSummary">
                <h1>My Projects</h1>
                <p>A selection of recent projects done in collaboration with amazing people and as a sole author.
                </p>
            </section>
             {/* ABOUT PORTFOLIO ENDS */}

            {/* MORE PROJECTS STARTS */}
            <div className="card-container">
                {photos.map((photo, i)=> { 
                    return (
                        <div className="project-card" key={photo.filename}>
                        {/* <a href={photo.deploy} target="_blank" rel="noopener noreferrer" ></a> */}
                            
                            <div className="imageContainer">
                                <img
                                    src={photo.filename}
                                    alt={photo.title}
                                />
                                <div className="overlay">
                                    <a href={photo.deploy}>{photo.deploy}</a>
                                </div>
                            </div>
                                
                            <div className="descriptionContainer">
                                <h3>{photo.title}</h3>
                               
                        
                                <button onClick={()=>
                                    handleClick(photo)
                                }>Details</button>

                            </div>
                            
                        </div>
                    );
                })} 

                {show ? modalContent() : null}
            </div>
            {/* MORE PROJECTS ENDS */}
        </div>
    )
}

export default PhotoList;