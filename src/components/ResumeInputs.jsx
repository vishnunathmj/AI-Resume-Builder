import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import { saveResumeAPI } from '../services/apiServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const steps = ['Basic Information', 'Contact Details', 'Educational Details', 'Review & Submit'];

function ResumeInputs({resumeDetails,setResumeDetails}) {



  console.log(resumeDetails);
  const navigate = useNavigate()
  

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.fullName} onChange={e=>setResumeDetails({...resumeDetails,fullName:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select
                onChange={e=>setResumeDetails({...resumeDetails,job:e.target.value})}
                defaultValue={''}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="JOb"
              >
                {
                  jobRole.jobRoles.map(job=>(
                  <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))
                  }
              </Select>
            </FormControl>
          </div>
        </div>
      )
        break;
      case 1: return (
        <div>
          <h3>Contact Details </h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
            <TextField value={resumeDetails.phone} onChange={e=>setResumeDetails({...resumeDetails,phone:e.target.value})} id="standard-basic-num" label="Contact Number" variant="standard" />
            <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
            <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="Github Link" variant="standard" />
          </div>
        </div>
      )
        break;
      case 2: return (
        <div>
          <h3>Educational Details </h3>
          <div className="p-3 row">
            <TextField value={resumeDetails.degree} onChange={e=>setResumeDetails({...resumeDetails,degree:e.target.value})} id="standard-basic-degree" label="Bacherlor's Degree" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="Collage/University Name" variant="standard" />
            <TextField value={resumeDetails.year} onChange={e=>setResumeDetails({...resumeDetails,year:e.target.value})} id="standard-basic-Year" label="Year of Graduation" variant="standard" />
          </div>
        </div>
      )
        break;
      case 3: return (
        <div>
          <p>Our AI will generate Skills & Summary according to your job role. Click the <b>
            Generate AI Skill & Summary</b> button to Proceed. Once the form is submitted, user won't get the chance to update the details</p>
        </div>
      )
        break;

      default: return null
        break;
    }
  }

  const generateSkillAndSummary = ()=>{
    setResumeDetails({...resumeDetails,skills:jobSkills[resumeDetails.job],summary:summaries[resumeDetails.job]})
    handleNext()
  }

  const handleSaveResume = async ()=>{
    // make api call to save resume it should execute when finish button is clicked
    const {fullName,location,job,email,phone,github,linkedin,degree,college,year,skills,summary}= resumeDetails
    if(fullName && location && job && email && phone && github && linkedin && degree && college && year && skills.length>0 && summary){
      // api call
      const response = await saveResumeAPI(resumeDetails)
      console.log(response);
      if(response.status==201){
        toast.success("Resume added successfully!!!")
        const resumeId = response.data.id
        setTimeout(()=>{
          navigate(`/resumes/${resumeId}`)
        },2500)
      }
    }else{
      toast.info("Please fill the form commpletely!!!")
    }

  }


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleSaveResume}>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* To gove the contents in the step */}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render form according active step */}
          <Box>
            {
              renderFormContent(activeStep)
            }
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {
              activeStep === steps.length - 1 ?
                <Button onClick={generateSkillAndSummary} >Generate AI Skills & Summary</Button>
                :
                <Button onClick={handleNext} >Next</Button>
            }

          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ResumeInputs
