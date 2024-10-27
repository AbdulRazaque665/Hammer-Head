import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import "../careers/career.css"
import GirlImg from "../../asset/career.png"

const Careers = () => {
  return (
    <div className="background-1 pb-5">
      <Typography variant="h3" sx={{paddingTop:"75px",paddingBottom:"50px"}} className='fw-semibold text-center' color="initial">Be the part of our Team</Typography>
      <Box className="bgimg3">
         <Box className="container-fluid">
         <Box className="row d-flex flex-column-reverse flex-lg-row flex-md-row align-items-center justify-content-center">
         <Box className="col-12 col-md-6 col-lg-6 text-center hero-ani-left">
           <img src={GirlImg} className='img-fluid' alt="" />
         </Box>
         <Box className="col-12 col-md-6 col-lg-6 text-center text-md-start text-lg-start mt-4 hero-ani-right">
          <Typography variant="h2" className='fw-semibold fs-1' color="initial">2024 Graduate Roles
          Live Now!</Typography>
          <Typography variant="h4" className='fw-medium fs-4 my-4 ' color="initial">Join the number 1 construction company for Graduates</Typography>
          <a href="mailto:supporthammerhead@gmail.com">
          <button  className="border-0 text-white rounded-5 text-capitalize button-color fw-semibold px-4 py-3">Apply Now!</button>
          </a>
         </Box>
         </Box>
         </Box>
      </Box>
    </div>
  )
}

export default Careers
