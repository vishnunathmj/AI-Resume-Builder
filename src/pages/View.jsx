import React from 'react'
import { Link } from 'react-router-dom'
import Preview from '../components/Preview'
import { IoMdDownload } from "react-icons/io";
import Edit from '../components/Edit'
import { HiMiniDocumentText } from "react-icons/hi2";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaBackward } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";

function View() {
  return (
    <div container my-5>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* Download */}
            <button style={{color:'#615048'}} className="btn fs-3 me-3"><IoMdDownload /></button>
            {/* Edit */}
            <Edit/>
            {/* all resume */}
            <Link to={'/all-resumes'} style={{color:'#615048'}} className="btn fs-3 me-3"><HiMiniDocumentText /></Link>
            {/* Download history */}
            <Link to={'/downloads'} style={{color:'#615048'}} className="btn fs-3 me-3"><IoIosCloudDownload /></Link>
            {/* Back */}
            <Link to={'/resume-details'} style={{color:'#615048'}} className="btn fs-3 me-3"><FaBackward /></Link>

          </div>
          {/* preview component */}
          <div className="p-5">
            <Preview />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
