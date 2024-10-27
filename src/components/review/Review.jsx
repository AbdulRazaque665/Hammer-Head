import React from 'react'
import Typography from '@mui/material/Typography'
import "../review/review.css"
import Img1 from "../../asset/image22.png"
import Img2 from "../../asset/image33.png"
import Img3 from "../../asset/image 44.png"
import stars from "../../asset/stars.png"
import { Box } from '@mui/material'

const Review = () => {
  return (
    <div className='container-fluid'>
      <Typography className='text-center fw-semibold logo-text mb-5' variant="h3" color="initial">Reviews</Typography>
      <Box className='bg-img3 d-flex align-items-center justify-content-center'>
        <Box className="row gy-4 justify-content-center align-items-center">
          <Box className="col-12 col-md-6 col-lg-4 d-flex justify-content-center our-ani-cards">
          <Box className="d-flex flex-column align-items-center  rounded-3 p-4" sx={{backgroundColor:"#F1F9FF",width:"300px",height:"450px"}}>
          <img src={Img1} className='img-fluid' style={{width:"115px"}} alt="" />
          <img src={stars} style={{mixBlendMode:'darken',width:"115px",marginTop:"-15px"}}/>
          <Typography variant="h4" color="initial">Toy Shop</Typography>
          <Typography variant="h6" className='fs-6 my-3' color="initial">They are professional and reliable. They have fitted full coffee shops and commercial kitchens for me. </Typography>
          <Typography variant="h6" className='fs-6' sx={{marginTop:"55px"}} color="initial"><span className='fw-semibold'>Tehzeeb</span>-23/04/2023 </Typography>


          </Box>
          </Box>
          <Box className="col-12 col-md-6 col-lg-4 d-flex justify-content-center our-ani-cards">
          <Box className="d-flex flex-column align-items-center  rounded-3 p-4" sx={{backgroundColor:"#F1F9FF",width:"300px",height:"450px"}}>
          <img src={Img2} className='img-fluid' style={{width:"115px"}} alt="" />
          <img src={stars} style={{mixBlendMode:'darken',width:"115px",marginTop:"-15px"}}/>
          <Typography variant="h4" color="initial">Cafeteria</Typography>
          <Typography variant="h6" className='fs-6 my-3' color="initial">The end result always exceeds exceptions.I would highly recommend DreamBuild Construction. </Typography>
          <Typography variant="h6" className='fs-6' sx={{marginTop:"30px"}} color="initial"><span className='fw-semibold'>Joseph</span>-03/07/2018</Typography>


          </Box>
          </Box>
          <Box className="col-12 col-md-6 col-lg-4 d-flex justify-content-center our-ani-cards">
          <Box className="d-flex flex-column align-items-center  rounded-3 p-4" sx={{backgroundColor:"#F1F9FF",width:"300px",height:"450px"}}>
          <img src={Img3} className='img-fluid' style={{width:"115px"}} alt="" />
          <img src={stars} style={{mixBlendMode:'darken',width:"115px",marginTop:"-15px"}}/>
          <Typography variant="h4" color="initial">Houses</Typography>
          <Typography variant="h6" className='fs-6 my-3' color="initial">I love how they work in their project. Thanks to the team to their outstanding work. </Typography>
          <Typography variant="h6" className='fs-6' sx={{marginTop:"55px"}} color="initial"><span className='fw-semibold'>Ali Hamza</span>-18/01/2018</Typography>
          </Box>
          </Box>

        </Box>
      </Box>
    </div>
  )
}

export default Review
