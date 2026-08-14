import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Preview from '../components/Preview'
import { IoMdDownload } from "react-icons/io";
import Edit from '../components/Edit'
import { HiMiniDocumentText } from "react-icons/hi2";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaBackward } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { downloadResumeAPI, viewResumeAPI } from '../services/apiServices';
import { jsPDF } from "jspdf";
import js from '@eslint/js';
import html2canvas from 'html2canvas';


function View() {

  const previewRef = useRef()
  const [resume, setResume] = useState({})

  const { id } = useParams()
  console.log(resume);

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const response = await viewResumeAPI(id)
    if (response.status == 200) {
      setResume(response.data)
    }
  }

  const downloadCV = async () => {
    // generate rsumeImg from cloudinary - api call
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    canvas.toBlob(async (imgFile) => {
      // create formData to sned file via Api
      const formData = new FormData()
      formData.append("file", imgFile)
      formData.append("upload_preset", "resumes")
      const result = await fetch("https://api.cloudinary.com/v1_1/ma5lujiy/image/upload", {
        method: "POST",
        body: formData
      })
      const serverData = await result.json()
      const url = serverData.secure_url
      console.log(url);
      generatePDF(url)
    })

  }

  const generatePDF = async (resumeImg) => {

    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg, "PNG", 0, 0, imageWidth, imageHeight)
    // Api call to save download resume details in json
    const today = new Date()
    const timestamb = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    const result = await downloadResumeAPI({timestamb,resumeImg,resumeId:resume.id,jobRole:resume.job})
    if(result.status==201){
      pdf.save(`${resume.fullName}-cv.pdf`)
    }
  }

  return (
    <div className='container my-5' >
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* navigation icons */}
          <div className="d-flex justify-content-center align-items-center">
            {/* Download */}
            <button onClick={downloadCV} style={{ color: '#615048' }} className="btn fs-3 me-3"><IoMdDownload /></button>
            {/* Edit */}
            <Edit resumeDetails={resume} setResumeDetails={setResume} />
            {/* all resume */}
            {/* <Link to={'/all-resumes'} style={{color:'#615048'}} className="btn fs-3 me-3"><HiMiniDocumentText /></Link> */}
            {/* Download history */}
            {/* <Link to={'/downloads'} style={{color:'#615048'}} className="btn fs-3 me-3"><IoIosCloudDownload /></Link> */}
            {/* Back */}
            <Link to={'/resume-details'} style={{ color: '#615048' }} className="btn fs-3 me-3"><FaBackward /></Link>

          </div>
          {/* preview component */}
          <div ref={previewRef} className="p-5">
            <Preview resumeDetails={resume} />
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View
