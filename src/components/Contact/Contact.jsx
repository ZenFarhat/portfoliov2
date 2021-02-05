import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='form-container'>
        <h1>Contact me</h1>
        <form
          action='mailto:zeinfarhat6@gmail.com'
          method='post'
          enctype='text/plain'
        >
          <input
            type='text'
            className='form-input'
            required
            placeholder='Name'
            name='name'
          />
          <input
            name='email'
            type='email'
            className='form-input'
            required
            placeholder='Email'
          />
          <textarea
            name='message'
            id=''
            cols='30'
            className='form-textarea'
            rows='10'
            placeholder='Your message'
          ></textarea>
          <button className='form-button' type='submit'>
            Send message
          </button>
        </form>
        <div className='contact-icons'></div>
      </div>
    </div>
  );
}

export default Contact;
