import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Preview() {
  return (
    <div className='w-100'>
      <h2>Full Name</h2>
      <p className="fs-6 lh-1">Phone : </p>
      <p className="fs-6 lh-1">Email : </p>
      <p className="fs-6 lh-1">Linkedin : </p>
      <p className="fs-6 lh-1">Github : </p>
      <p className="fs-6 lh-1">Location : </p>
      <Divider className='bg-dark my-3' />
      <h4>Professional Summary</h4>
      <p>summary</p>
      <Divider className='bg-dark my-3' />
      <h4>Technical Skill</h4>
      {/* duplicate according to the skill */}
      <span><Button varient="text" className='text-dark'>Skill</Button></span>
      <Divider className='bg-dark my-3' />
      <h4>Education</h4>
      <p className="fs-6 lh-1">Bachelor's Degree : </p>
      <p className="fs-6 lh-1">University/College Name : </p>
      <p className="fs-6 lh-1">Year of Graduation : </p>

    </div>
  )
}

export default Preview
