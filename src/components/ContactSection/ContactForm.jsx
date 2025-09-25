import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3sizdt9', 'template_ip1oxt7', form.current, {
        publicKey: 'sv--ejhlCfc2_KitO',
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccessMessage('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      {successMessage && <p className='text-white'>{successMessage}</p>}
      <form className='flex flex-col gap-4 text-stone-900' ref={form} onSubmit={sendEmail}>
        <input 
        name='from_name'
        type="text" 
        placeholder='Your Name' 
        required 
        className='h-12 rounded-lg bg-stone-300 px-2'
        value={name}
        onChange={handleName}
        />
        <input 
        name='from_email'
        type="email" 
        placeholder='Your Email' 
        required 
        className='h-12 rounded-lg bg-stone-300 px-2'
        value={email}
        onChange={handleEmail}
        />
        <textarea 
        name='message'
        type="text"
        cols="50" 
        rows="9" 
        placeholder='Your Message' 
        className='rounded-lg bg-stone-300 p-2'
        required
        value={message}
        onChange={handleMessage}
        />  
        <button type="submit" className='w-full rounded-lg border border-cyan-400 text-white h-12 font-bold text-xl hover:bg-cyan-500 bg-cyan-400 transition-all duration-500'>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;