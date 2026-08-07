import React from 'react'
import ResumeInputs from '../components/ResumeInputs'
import Preview from '../components/Preview'


function Info() {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6">
                    <ResumeInputs/>
                </div>
                <div className="col-lg-6">
                    <Preview/>
                </div>
            </div>
        </div>
    )
}

export default Info
