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

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant="standard">
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="JOb"
                  >
                    <MenuItem value={'job'}>Job</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {/* contact details */}
            <div>
              <h3>Contact Details </h3>
              <div className="p-3 row">
                <TextField id="standard-basic-email" label="Email" variant="standard" />
                <TextField id="standard-basic-num" label="Contact Number" variant="standard" />
                <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                <TextField id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>
            {/* Educational Details */}
            <div>
              <h3>Educational Details </h3>
              <div className="p-3 row">
                <TextField id="standard-basic-degree" label="Bacherlor's Degree" variant="standard" />
                <TextField id="standard-basic-college" label="Collage/University Name" variant="standard" />
                <TextField id="standard-basic-Year" label="Year of Graduation" variant="standard" />
              </div>
            </div>
              {/* Skills */}
              <div className="">
                <h3>Skills</h3>
                <div className="d-flex p-3">
                  <input className="form-control" placeholder='Add New Skill'/>
                  <Button className='btn'>ADD</Button>
                </div>
                <h6>Added Skills</h6>
                {/* all skills - duplicate */}
                <div className="p-3 d-flex justify-content-between flex-wrap">
                  <Button sx={{backgroundColor:'#615048',color:'white'}}>Skills <FaXmark className='ms-2'/></Button>
                </div>
              </div>
              {/* Summary */}
              <div>
                <h3>Summary</h3>
                <div className="p-3 row">
                  <TextField id='summary' label="Summary" multiline variant='standard' />
                </div>
              </div>
            {/* update Button */}
            <button className='btn text-light mt-3' style={{backgroundColor:'#62707d'}}>UPDATE CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
