import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ height: '350px', backgroundColor: '#1b1718' }} className='container-fluid p-5'>
      <div className="row">
        <div className="col-lg-4">
          <h4 className="mb-3 text-light">AI rBuilder</h4>
          <p style={{ textAlign: 'justify'}} className='text-light'>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4 className="mb-3 text-light">Contact Us</h4>
          <p className='text-light'> <MdEmail />resumebuilder@gnail.com</p>
          <p className='text-light'> <FaPhoneAlt />9999999999</p>
          <h5 className="my-3 text-light">Connect With Us</h5>
          <div className="fs-5 text-light">
            <FaInstagram />
            <FaSquareFacebook className='mx-2' />
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <h6 className="text-center text-light my-2">Designed & Build with ❤️ using React</h6>
    </div>

  )
}

export default Footer
