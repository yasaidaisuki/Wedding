import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xgebajga");
    if (state.succeeded) {
        return <p>Thanks for submitting!</p>;
    }
    return (
        <form className='contact-form' onSubmit={handleSubmit}>

        <label htmlFor="email">
          Email
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

        <label htmlFor="name">
          Your Full Name
        </label>
        <input
          id="name"
          type="text" 
          name="name"
        />

        <div className='contact-form-dropdowns'>
            <label htmlFor="attending">
              Are you joining us?
            </label>
            <select name="attending" id="attending" required={true}>
                <option value="" selected={true} disabled={false}>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>

        <div className='contact-form-dropdowns'>
            <label htmlFor="plus">
              And how with how many guests?
            </label>
            <select name="plus" id="plus" required={false}>
                <option value="0" selected={true}>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        
        <label htmlFor="message">
          Please leave us a message!
        </label>
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
          Send now
        </button>
      </form>

    );
  }
  
  export default ContactForm;