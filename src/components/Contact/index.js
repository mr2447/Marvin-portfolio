import React, { useState, useRef} from 'react'; 
import { validateEmail } from '../../utils/helpers';
import './contact.css'
import emailjs from '@emailjs/browser'
import EmailSent from '../EmailSent'
import forestImage from '../../assets/images/forest-img.jpg'



function ContactForm() {
//SHOW CONTACT FORM
    const [contactFormPage, setContactFormPage] =useState(true)
// ~~~~~~~~~~~~~~~~~~~~~

// EMAILJS STARTS
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
// EMAILJS ENDS

// FORM FUNCTIONS STARTS
    const [formState, setFormState] = useState({visitor_title: '', first_name: '',last_name:'', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const { visitor_title, first_name, last_name, email, message } = formState;


    function handleChange(e) {
        if(e.target.name === 'email')  {
            const isValid = validateEmail(e.target.value)
            console.log(isValid);
            // isValide conditional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('')
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
                console.log(errorMessage)
            } else {
                setErrorMessage('')
            }
        }
        if(!errorMessage) {
        //spread operator used to retain the other key-value pairs in this object, and only assign the value for formState.name
        setFormState({...formState, [e.target.name]: e.target.value})
        //e.target.name is the Name attribute(email, name...), but name is the name attribute with the name value
        console.log(e.target.name)
        console.log("form:",  e.target.value)
        // console.log('errorMessage', errorMessage)
        } 
        console.log("errorMessage: ",errorMessage)
      
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        if(!formState.visitor_title || !formState.first_name || !formState.last_name || !formState.email || !formState.message) {
            alert("Please fill in the required '*' information.")
        } 
        else {
            console.log(formState);
            sendEmail(e);
            
        }
  
    }
// FORM FUNCTION ENDS

return (
    <div>
        <div className="top-img-container">
            <img src={forestImage} alt="forest-image"/>
            <div className="center-img-text">
                <h1>
                Contact Me
                </h1>      
            </div>
        </div>
    {contactFormPage && (
        // USE SECTION TO BE TARGETED BY DARKMODE TOGGLE
        <section className='contactFormContainer'>
            
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div>
                <h1>Contact Form</h1>
                <p>Please fill in this form to send me a message. I will respond as soon as possible.</p>
                </div>
                <div className="form-grid">
                    <div className="form-grid-item">
                        <div className="form-select-area">
                            <label htmlFor="visitor_title">* Title: </label>
                            <select name="visitor_title" type="text" defaultValue={visitor_title} onChange={handleChange}>
                                <option>Select...</option>
                                <option>Ms.&lrm;</option>
                                <option>Mrs.&lrm;</option>
                                <option>Mr.&lrm;</option>
                            </select>
                        </div> 
                    </div>
                    <div className='form-grid-item'>
                        <div className='form-required-info'>
                            <p>* Required fields</p>
                        </div>
                    </div>
                    <div className='form-grid-item'>
                        <div className="form-write-area">
                            <label htmlFor="first_name">* First Name: </label>
                            <input type="text" name="first_name" defaultValue={first_name} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='form-grid-item' >
                        <div className='form-write-area'>
                            <label htmlFor="first_name">* Last Name: </label>
                            <input type="text" name="last_name" defaultValue={last_name} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='form-grid-item'>
                        <div className='form-write-area'>
                            <label htmlFor="email">* Email:</label>
                            <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="message-wrapper">
                    <div className='form-write-area'>
                        <label htmlFor="message">* Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                    </div>
                </div>
                    {errorMessage && (
                        <div className='form-write-area'>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                <div className="contact-form-button-wrapper">
                <button type="submit" data-testid="button" >Submit</button>
                </div>
            </form>
        </section>)
    }
    {successSubmitPage && (
        <EmailSent formState={formState}/>
    )}
    </div>
        
)
}

export default ContactForm;