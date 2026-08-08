import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrashRestore } from "react-icons/fa";

function Saved() {
  return (
    <div className='my-5 d-flex justify-content-center align-items-center flex-column'>
      <h1>All Saved Resumes</h1>
      <table className="my-5 table table-hover tble-stripped">
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to={'/resumes/id'}>Name</Link></td>
            <td>JOB</td>
            <td><button className='btn text-danger'><FaTrashRestore /></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Saved
