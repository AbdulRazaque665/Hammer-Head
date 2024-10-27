import React, { useState } from 'react'
import AboutsUs from '../aboutUs/AboutsUs'
import WhyUs from '../whyUs/WhyUs'
import Careers from '../careers/Careers'
import ContactUs from '../contactUs/ContactUs'
import HeroImg from "../../asset/buildong.png"
import Typography from '@mui/material/Typography';
import "./herosection.css"
import AlertDialog from './dialog/Dialog'



const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="pt-5 background-1">
      <div className="container-fluid ">
      <div className='row mx-lg-4 mx-md-4 mx-sm-none align-items-center'>
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-between hero-ani-left">
        <Typography  variant="h2" className="fw-semibold" >From Blueprint,
        to reality</Typography>
        <Typography variant="h5" className="fw-semibold my-4">At hammerhead, we specialize in delivering high-quality construction services with a commitment to excellence and innovation. We take pride in our strong client relationships and community engagement. Contact us today to start building your dream!</Typography>
        <button onClick={handleClickOpen} className="border-0 text-white rounded-5 text-capitalize button-color btn-size fw-semibold fs-5">Call Now</button>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 text-end d-lg-block d-md-block d-none hero-ani-right">
       <img src={HeroImg} className="img-fluid w-75"/>
      </div>
      </div>
      </div>


     <AboutsUs/>
     <WhyUs/>
     <Careers/>
     <ContactUs/>
     <AlertDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} />   
    </div>
  )
}

export default HeroSection
