import React from 'react';

const EmailSent=(props) => {
    const {formState} = props
    const senderName = formState.to_name
    return(
        <h1>Thank you {senderName}, Email Sent!</h1>
    )
}

export default EmailSent;