import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrashRestore } from 'react-icons/fa'
import { getAllResumesAPI } from '../services/apiServices'

function Saved() {
  const [allResumes, setAllResumes] = useState([])

  useEffect(() => {
    getAllResumes()
  }, [])

  const getAllResumes = async () => {
    const response = await getAllResumesAPI()

    if (response.status === 200) {
      setAllResumes(response.data)
    }
  }

  return (
    <div className="my-5 d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>

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
          {allResumes.length > 0 ? (
            allResumes.map((resume, index) => (
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
                  <button className="btn text-danger">
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
    </div>
  )
}

export default Saved

