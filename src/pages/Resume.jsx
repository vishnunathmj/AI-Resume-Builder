import React from 'react'
import { HiDocumentText } from "react-icons/hi";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div style={{minHeight:'80vh'}} className='my-5'>
      <h1 className="text-center ">Create an ATS Friendly resume in minutes with AI</h1>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
            <HiDocumentText className='fs-1 text-primary' />
            <h4>Add Your Details</h4>
            <p>Our AI will generate skills & Summary</p>
            <h5>Step 1</h5>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
            <HiDocumentDownload className='fs-1 text-danger' />
            <h4>Download Your Resume</h4>
            <p>Download CV as PDF and start applying</p>
            <h5>Step 2</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="my-5 text-center">
          <Link to={'/resume-details'} style={{backgroundColor:'#9e9e91'}} className='btn text-align'>LET'S START</Link>
        </div>
      </div>
    </div>
  )
}

export default Resume
