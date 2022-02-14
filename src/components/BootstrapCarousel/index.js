import React from 'react'
import { Carousel } from 'react-bootstrap'
import guitarShopPoster from '../../assets/images/guitar-shop-poster.jpg'
import eatInPeacePoster from '../../assets/images/eat-in-peace-poster.jpg'
import simpleDocPoster from '../../assets/images/simple-doc-poster.jpg'
import './bootstrap-carousel.css'

function BootstrapCarousel () {
    const carouselImages = [
        {
            slideName: eatInPeacePoster,
            reference: 'https://mr2447.github.io/dreamteam/'
        },
        {
            slideName: guitarShopPoster,
            reference: 'https://pacific-fjord-62324.herokuapp.com/'
        },
        {
            slideName: simpleDocPoster,
            reference: 'https://enigmatic-sea-73658.herokuapp.com/'
        }
    ]
    return(
        <div className="carouselContainer">

        <Carousel fade  interval={3000} variant="dark">
            {carouselImages.map((image, i)=> {
                return (
                    <Carousel.Item key={i}>
                        <a href={image.reference} target="_blank" rel="noopener noreferrer" className="hoverme">
                            <img 
                                className="carouselImages"
                                src={image.slideName} 
                                alt={`Slide ${i}`}
                            />
                        </a>
                        {/* <Carousel.Caption className="carouselCaption">
                            <a href="#/">About Me</a>
                        </Carousel.Caption> */}

                    </Carousel.Item>
                )
            }
            )}
        </Carousel>
        </div>
    )
}

export default BootstrapCarousel;