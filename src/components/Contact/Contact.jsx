import React from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hvielbl",
        "template_jx2rpfn",
        e.target,
        "user_Tl9V0BUgoVZYVuUAbt0Lo"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
          alert(
            "Thank you for your message, I will get back to you as soon as I can"
          );
        },
        (error) => {
          console.log(error.text);
          alert("Error sending your message");
        }
      );
  }
  return (
    <div className='contact'>
      <div className='form-container'>
        <h1>Contact me</h1>
        <form onSubmit={sendEmail}>
          <input
            type='text'
            className='form-input'
            required
            placeholder='Name'
            name='from_name'
          />
          <input
            name='_replyto'
            type='user_email'
            className='form-input'
            required
            placeholder='Email'
          />
          <textarea
            name='message'
            cols='30'
            className='form-textarea'
            rows='10'
            placeholder='Your message'
          ></textarea>
          <button className='form-button' type='submit' value='Send'>
            Send message
          </button>
        </form>
        <div className='contact-icons'></div>
      </div>
    </div>
  );
}

export default Contact;
