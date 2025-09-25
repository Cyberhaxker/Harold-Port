import React from 'react'
import mailPick from '../../assets/Green_Mail.png'
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';

const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src={mailPick} 
      alt="Contact Me"
      className='max-w-[200px]'
      />
    <ContactInfo />
    <ContactSocial />
    </div>
  );
};

export default ContactMeRight;