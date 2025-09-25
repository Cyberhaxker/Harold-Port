import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white text-bold'>
      <SingleInfo Image={MdOutlineAttachEmail} text="muchenjeharold@gmail.com" />
      <SingleInfo Image={FiPhone} text="+263787601944" />
      <SingleInfo Image={IoLocationOutline} text="Harare, Zimbabwe" />
    </div>
  );
};

export default ContactInfo;