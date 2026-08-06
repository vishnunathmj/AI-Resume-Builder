import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { TbBackground } from 'react-icons/tb';

function Header() {

  const aboutUsContent = "An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF."

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#1b1718'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* App icon in img tag */}
            <img width={'45px'} src="https://static.vecteezy.com/system/resources/thumbnails/032/851/682/small/cv-approved-3d-illustration-icon-or-resume-approved-3d-illustration-icon-free-png.png" alt="image" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>AI rBuilder</Link>
          </Typography>
          <Tooltip title={aboutUsContent}><Button color="inherit">About US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
