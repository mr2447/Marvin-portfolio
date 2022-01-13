import React, { useState } from 'react'; 
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({name: '', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if(e.target.name === 'email')  {
            const isValid = validateEmail(e.target.value)
            console.log(isValid);
            // isValide conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('')
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
                console.log(setErrorMessage)
            } else {
                setErrorMessage('')
            }
        }
        if(!errorMessage) {
        //spread operator used to retain the other key-value pairs in this object, and only assign the value for formState.name
        setFormState({...formState, [e.target.name]: e.target.value})
        //e.target.name is the Name attribute(email, name...), but name is the name attribute with the name value
        // console.log("form:", [e.target.name])
        // console.log('errorMessage', errorMessage)
        } 
        console.log("errorMessage: ",errorMessage)
      
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
return (
    <section>
        <h1 data-testid="h1tag">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="email">Email addess:</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button type="submit" data-testid="button" >Submit</button>
        </form>
    </section>
)
}

export default ContactForm;