import React from 'react';
import './email-sent.css'

const EmailSent=(props) => {
    const {formState} = props
    const senderLastName = formState.last_name
    const senderName = formState.visitor_title.concat(" ", senderLastName)
    console.log(formState)
    return(
        <div>
            <div>
                <h1>Dear {senderName},</h1>
                <p> Thank you for your message. I will be in contact as soon as possible.</p>
            </div>
            <button>
                <a href="/">&#8592; Return</a>
            </button>
        </div>
        
    )
}

export default EmailSent;