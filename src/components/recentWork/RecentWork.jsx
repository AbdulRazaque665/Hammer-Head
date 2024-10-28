import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Img1 from "../../asset/image.png"
import Img2 from "../../asset/image-1.png"
import Img3 from "../../asset/image-2.png"
import Img4 from "../../asset/image-3.png"
import Img5 from "../../asset/image-4.png"
import Img6 from "../../asset/image-5.png"
import Img7 from "../../asset/image-6.png"
import Img8 from "../../asset/image-7.png"
import Img9 from "../../asset/image-8.png"


const RecentWork = () => {
  return (
    <Box className="text-center" sx={{marginTop:"40px",paddingBottom:"150px"}}>
      <Typography className='text-center fw-semibold logo-text' variant="h3" color="initial">Recent Work</Typography>
      <Box className="container">
      <Typography className='text-start pb-5 pt-3' variant="h5" color="initial">At hammerhead, we take pride in our diverse range of construction projects that reflect our commitment to quality and innovation. Below are some of our most recent works that showcase our expertise and dedication to excellence.</Typography>
      </Box>
       <Box className="container">
          <Box className="row gy-5">
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img1} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img2} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img3} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img4} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img5} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img6} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img7} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img8} alt="" /></Box>
          <Box className="col-12 col-md-6 col-lg-4 p-0"><img className='img-fluid' src={Img9} alt="" /></Box>
          </Box>
       </Box>
    </Box>
  )
}

export default RecentWork
