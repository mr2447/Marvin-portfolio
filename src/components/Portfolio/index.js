import React from 'react';
import PhotoList from '../PhotoList';



function Portfolio({currentSection}) {
    // const { name, description } = currentSection
    return(
        <section>
            {/* <h1>{name}</h1>
            <p>{description}</p> */}
            <PhotoList>
            </PhotoList>
        </section>
    );
}
export default Portfolio
