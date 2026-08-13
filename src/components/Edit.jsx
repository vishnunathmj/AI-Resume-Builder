import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from 'react-icons/fa6';
import jobRole from '../assets/jobRole.json'
import { toast } from 'react-toastify';
import { editResumeAPI } from '../services/apiServices';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};

function Edit({ resumeDetails, setResumeDetails }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = React.useRef()

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetails, skills: resumeDetails.skills.filter(item => item != skill) })
  }

  const addSkill = (skill) => {
    if (skill) {
      if (resumeDetails?.skills?.map(item => item.toLowerCase()).includes(skill.toLowerCase())) {
        toast.warning("Given skill isalready available... Please add another!!!")
      } else {
        setResumeDetails({ ...resumeDetails, skills: [...resumeDetails?.skills, skill] })
      }
      skillRef.current.value = ""
    } else {
      toast.info("Input valid skill")
    }
  }

  const handleUpdateResume = async () => {
    // make api call to save resume it should execute when update button is clicked
    const { fullName, location, job, email, phone, github, linkedin, degree, college, year, skills, summary } = resumeDetails
    if (fullName && location && job && email && phone && github && linkedin && degree && college && year && skills.length > 0 && summary) {
      // api call
      const response = await editResumeAPI(resumeDetails.id,resumeDetails)
      // console.log(response);
      if (response.status == 200) {
        toast.success("Resume updated successfully!!!")
        handleClose()
        // const resumeId = response.data.id
        }
    } else {
      toast.info("Please fill the form commpletely!!!")
    }

  }


  return (
    <div>
      <Button onClick={handleOpen} style={{ color: '#615048' }} className="btn fs-3 me-3"><MdEditDocument /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{ backgroundColor: '#62707d', color: '#ffffff' }} className='text-center' id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.fullName} onChange={e => setResumeDetails({ ...resumeDetails, fullName: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select
                    onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
                    value={resumeDetails.job}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="JOb"
                  >
                    {
                      jobRole.jobRoles.map(job => (
                        <MenuItem key={job} value={job}>{job}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* contact details */}
            <div>
              <h3>Contact Details </h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-email" label="Email" variant="standard" />
                <TextField value={resumeDetails.phone} onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })} id="standard-basic-num" label="Contact Number" variant="standard" />
                <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>
            {/* Educational Details */}
            <div>
              <h3>Educational Details </h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.degree} onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })} id="standard-basic-degree" label="Bacherlor's Degree" variant="standard" />
                <TextField value={resumeDetails.college} onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })} id="standard-basic-college" label="Collage/University Name" variant="standard" />
                <TextField value={resumeDetails.year} onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })} id="standard-basic-Year" label="Year of Graduation" variant="standard" />
              </div>
            </div>
            {/* Skills */}
            <div className="">
              <h3>Skills</h3>
              <div className="d-flex p-3">
                <input ref={skillRef} className="form-control" placeholder='Add New Skill' />
                <Button onClick={() => addSkill(skillRef.current.value)} className='btn'>ADD</Button>
              </div>
              <h6>Added Skills</h6>
              {/* all skills - duplicate */}
              <div className="p-3 d-flex justify-content-between flex-wrap">
                {
                  resumeDetails?.skills?.map(skill => (
                    <Button onClick={() => removeSkill(skill)} key={skill} variant='contained' sx={{ backgroundColor: '#615048', color: 'white' }} className='my-1'>{skill} <FaXmark className='ms-2' /></Button>
                  ))
                }
              </div>
            </div>
            {/* Summary */}
            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField value={resumeDetails.summary} onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id='summary' label="Summary" multiline variant='standard' />
              </div>
            </div>
            {/* update Button */}
            <button onClick={handleUpdateResume} className='btn text-light mt-3' style={{ backgroundColor: '#62707d' }}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
