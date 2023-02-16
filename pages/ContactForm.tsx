import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
//import contactFormStyles from './contactform.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("xgebajga");
    if (state.succeeded) {
        return <p>Thanks for submitting!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
  }
  
  export default ContactForm;