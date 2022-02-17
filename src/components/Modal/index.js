import { toUnitless } from '@mui/material/styles/cssUtils'
import React from 'react'
// import ReactDom from 'react-dom'
//  ReactDom.createPortal
function Modal(props) {
    const{modalInfo, handleClose}=props
    return(
    <>
     <div>
         <h1>Project: {modalInfo.title}</h1>
         <div>
            <h4>Description:</h4>
            <p>{modalInfo.fullDescription}</p>
            <h4>Tools:</h4>
            <p>{modalInfo.tools}</p>
            <h4>Role:</h4>
            <p>{modalInfo.role}</p>
            
         </div>
         <section>
             <div>
                 <button><a href={modalInfo.github} target="_blank" rel="noopener noreferrer">Github</a></button>
                 <button><a href={modalInfo.deploy} target="_blank" rel="noopener noreferrer">Go to App</a></button>
             </div>

            <button onClick={handleClose}>close</button>
         </section>
          
     </div>
     </>
    //  ,document.getElementById('portal')
    )
}

export default Modal