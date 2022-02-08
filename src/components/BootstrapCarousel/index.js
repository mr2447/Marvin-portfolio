import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide01 from '../../assets/images/guitar-shop.jpg'
import slide02 from '../../assets/images/eat-in-peace.jpg'
import slide03 from '../../assets/images/simple-doc.jpg'
import './bootstrap-carousel.css'

function BootstrapCarousel () {
    const carouselImages = [
        {
            slideName: slide01,
            reference: 'https://pacific-fjord-62324.herokuapp.com/'
        }, 
        {
            slideName: slide02,
            reference: 'https://mr2447.github.io/dreamteam/'
        },
        {
            slideName: slide03,
            reference: 'https://enigmatic-sea-73658.herokuapp.com/'
        }
    ]
    return(
        <div className="carouselContainer">
        <Carousel fade interval={5000} variant="dark">
            {carouselImages.map((image, i)=> {
                return (
                    <Carousel.Item key={i}>
                    <a href={image.reference} target="_blank">
                        <img 
                            className="carouselImages"
                            src={image.slideName} 
                            alt={`Slide ${i}`}
                        />
                    </a>
                     <Carousel.Caption className="carouselCaption">
                     <div className="carousel-button">
                        <a href="#clickScrolltoAboutMe"> About Me</a>
                    </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            }
            )}
        </Carousel>
        </div>
    )
}

export default BootstrapCarousel;