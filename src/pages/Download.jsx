import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaTrashRestore } from "react-icons/fa";
import { getAlldownloadAPI } from '../services/apiServices';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { color } from 'chart.js/helpers';


ChartJS.register(ArcElement, Tooltip, Legend);


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

function Download() {



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [downloadList, setDownloadList] = useState([])
  // console.log(downloadList);
  // used to store job role
  const [label,setLabel] = useState([])
  // used to store count of each job roles
  const [value,setValue] = useState([])
  const colorPallete = ['#2596be','#eab676','#063970','#bf10c2','#25990e','#998d0e']
  const backgroundColor = label.map((value,index)=>colorPallete[index%colorPallete.length])

  const data = {
    labels:label,
    datasets:[{
      data:value,
      backgroundColor
    }
    ]
  }



  useEffect(() => {
    getAlldownloads()
  }, [])

  const getAlldownloads = async () => {
    const result = await getAlldownloadAPI()
    setDownloadList(result.data)
    const output = {}
    result.data.forEach(item=>{
      const currentJob = item.jobRole
      const currentCount = 1
      if(currentJob in output){
        output[currentJob] += 1
      }else{
        output[currentJob] = 1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }


  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume History</h2>
        <button onClick={handleOpen} style={{ color: '#615048' }} className="btn  fs-3 me-3">View in chart</button>
      </div>
      <div className="row my-5">
        {
          downloadList?.length > 0 && <p className='fs-5 mt-3'>Total Downloaded resumes from our site is <span className='fs-bold'>{downloadList.length}</span></p>
        }
      </div>

      <div className="row my-5">
        {/* duplicate delete items */}
        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div key={resume?.id} className="col-lg-4 mb-3">
                <div style={{ height: '400px' }} className='shadow p-3 rounded'>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Review at: {resume?.timestamb}</h6>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to={`/resumes/${resume?.resumeId}`}><img src={resume?.resumeImg} alt="download CV" className="w-100" height={'300px'} /></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <div className="text-center">User not downloaded any resume yet!!!</div>
        }
      </div>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CV Download Count by Job Role
          </Typography>
          
        {/* chart */}
        <Box id="modal-modal-description" sx={{mt: 2 }}>
          <div className="text-center ">
              <Pie data={data}/>
            
            <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
          </div>
        </Box >

        </Box>
      </Modal>


    </div>



  )
}

export default Download


{/* <div className="row">
          <div className="col-lg-4 rounded fw-bold shadow">
            <p>Review at: </p>
            <button></button>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-4"></div>
        </div> */}