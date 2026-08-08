import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrashRestore } from "react-icons/fa";

function Download() {
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume History</h2>
        <Link to={'/resume-details'}> <IoMdArrowRoundBack />Back</Link>
      </div>
      <p className='fs-5 mt-3'>Total Downloaded resumes from our site is <span className='fs-bold'>10</span></p>
      <div className="row my-5">
        {/* duplicate delete items */}
        <div className="col-lg-4 mb-3">
          <div style={{ height: '400px' }} className='shadow p-3 rounded'>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Review at: timestamb</h6>
            </div>
            <div className="mt-3 text-center">
              <Link to={'/resumes/id'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG2LOhq7-vbk0Gmx6XIN8Ju1MqG1ROBtY1FOujXLnJEJdUMNYJBMs9-k&s=10" alt="download CV" className="w-100" height={'300px'} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download


{/* <div className="row">
          <div className="col-lg-4 rounded fw-bold shadow">
            <p>Review at: </p>
            <button></button>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div> */}