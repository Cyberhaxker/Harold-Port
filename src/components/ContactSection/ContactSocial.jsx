import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SingleContactSocial from './SingleContactSocial';

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial link={"https://www.linkedin.com/in/harold-garikai-muchenje-2a3086303/"} Icon={FaLinkedinIn} />
      <SingleContactSocial link={"https://github.com/Cyberhaxker"} Icon={FaGithub} />
    </div>
  );
};

export default ContactSocial;