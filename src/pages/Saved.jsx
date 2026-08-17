import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBackward, FaForward, FaSearch, FaTrashRestore } from 'react-icons/fa'
import { deleteResumesAPI, getAllResumesAPI } from '../services/apiServices'

function Saved() {
  const [allResumes, setAllResumes] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [dummyAllResumes,setDummyAllResumes] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const rowsPerPages = 4;
  const lastIndexOfCurrentPage = currentPage * rowsPerPages
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowsPerPages
  const currentResumes = allResumes.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)
  const totalPages = Math.ceil(allResumes.length/rowsPerPages)


  // console.log(searchKey);


  
  useEffect(() => {
   getAllResumes()
  }, [])


  const searchOutput = useMemo(()=>{
    setAllResumes(dummyAllResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  // display resume
  const getAllResumes = async () => {
    const response = await getAllResumesAPI()

    if (response.status === 200) {
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
  }

  // remove resume
  const removeResume = async (id) => {
    if (confirm("Are you sure, You want to delete the resume")) {
      const response = await deleteResumesAPI(id)
      if (response.status == 200) {
        getAllResumes()
      }
    }
  }



  // main part
  return (
    <div className="my-5 d-flex justify-content-center align-items-center flex-column px-5">
      <h1>All Saved Resumes</h1>
      <p style={{textAlign:'justify'}} className='my-3'>All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.</p>
      <div className="d-flex justify-content-center align-items-center w-50">
        <input onChange={(e)=>{setSearchKey(e.target.value);setCurrentPage(1);}} placeholder='Search Candidate by their job role' type="text" className='form-control'/>
        <FaSearch style={{marginLeft:'-30px'}}/>
      </div>

      <table className="my-5 table table-hover table-striped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>

        <tbody>
          {currentResumes.length > 0 ? (
            currentResumes.map((resume, index) => (
              <tr key={resume?.id}>
                <td>{index + 1}</td>

                <td>
                  <Link to={`/resumes/${resume?.id}`}>
                    {resume?.fullName?.toUpperCase()}
                  </Link>
                </td>

                <td>
                  {resume?.job?.toUpperCase()}
                </td>

                <td>
                  <button onClick={() => removeResume(resume?.id)} className="btn text-danger">
                    <FaTrashRestore />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Resumes added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-flex align-items-center">
        <button className='btn' onClick={()=>setCurrentPage(currentPage-1)} disabled ={currentPage==1}>
          <FaBackward/>
        </button>

          {currentPage} of {totalPages}

          <button className='btn' onClick={()=>setCurrentPage(currentPage+1)} disabled = {currentPage==totalPages || totalPages==0}>
          <FaForward/>
        </button>
      </div>
    </div>
  )
}

export default Saved

