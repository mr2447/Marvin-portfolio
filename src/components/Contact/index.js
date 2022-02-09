import React, { useState, useRef} from 'react'; 
import { validateEmail } from '../../utils/helpers';
import './contact.css'
import emailjs from '@emailjs/browser'
import EmailSent from '../EmailSent'


function ContactForm() {
    //show contact form
    const [contactFormPage, setContactFormPage] =useState(true)
    // emailJS
    const [successSubmitPage, setSuccessSubmitPage] = useState(false)
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pmc9mtf', 'template_91vaxqq', form.current, 'user_3mnEB7KNy2tfpx3Vf8Zi6')
        .then((result) => {
            console.log(result.text);
            setSuccessSubmitPage(true)
            setContactFormPage(false)
        }, (error) => {
            console.log(error.text);
        });
    }

    // const resetForm = () => {
    //     document.querySelector(form).value = formState
    // }
    // Form functions
    const [formState, setFormState] = useState({to_name: '', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const { to_name, email, message } = formState;


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
        sendEmail(e);
        console.log(e.target)
    }

return (
    <div>
    {contactFormPage && (<section>
        <h1 data-testid="h1tag">Contact me</h1>
        <form ref={form} id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="name">Name:</label>
                <input type="text" name="to_name" defaultValue={to_name} onBlur={handleChange}/>
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
    </section>)}
    {successSubmitPage && (
        <EmailSent formState={formState}/>
    )}
    </div>
        
)
}

export default ContactForm;