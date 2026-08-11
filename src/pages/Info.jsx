import React from 'react'
import ResumeInputs from '../components/ResumeInputs'
import Preview from '../components/Preview'


function Info() {

    const [resumeDetails,setResumeDetails] = React.useState({
        fullName:"",location:"",job:"",email:"",phone:"",linkedin:"",github:"",degree:"",college:"",year:"",skills:[],summary:""
      })

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-6">
                    <ResumeInputs resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
                </div>
                <div className="col-lg-6">
                    {resumeDetails.fullName && <Preview resumeDetails={resumeDetails}/>}
                </div>
            </div>
        </div>
    )
}

export default Info
