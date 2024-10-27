import { Divider, Typography } from '@mui/material'
import React from 'react'
import '../someReason/somereason.css'

const SomeReason = () => {
  return (
    <div className='bg-img-2' style={{paddingTop:"70px",paddingBottom:"70px"}}>
       <Typography variant="body1" className='logo-text text-center' color="initial">Some Reasons</Typography>
       <Typography variant="h3" className='text-center fw-semibold mt-1 mb-5' color="initial">Why Choose Us?</Typography>
     <div className='container-fluid'>
        <div className='row mx-0 mx-lg-3 mx-md-3  gy-4'>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text '>01</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold fs-2' sx={{marginTop:"-5px"}}>Residential Construction</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Building new homes, renovations, and remodeling services.</Typography>
                 </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text'>02</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold fs-2' sx={{marginTop:"-5px"}}>Commercial Construction</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Construction of office buildings, retail spaces, and industrial facilities.</Typography>
                 </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text'>03</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold fs-2' sx={{marginTop:"-5px"}}>Project Management</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Services for planning, executing, and completing projects.</Typography>
                 </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text'>04</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold fs-2' sx={{marginTop:"-5px"}}>Site Development</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Services for land clearing, grading, and utility installations.</Typography>
                 </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text'>05</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold fs-2' sx={{marginTop:"-5px"}}>Consultation Services</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Expert advice on planning, budgeting, and legal requirements.</Typography>
                 </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 our-ani-cards'>
                <div className='d-flex align-items-start p-4 rounded-5' style={{backgroundColor:"#9BBEFF",height:"246px"}}>
                <div className='d-flex align-items-center'>
                  <Typography variant="h6" color="initial" className='logo-text'>06</Typography>
                 <Divider variant="middle" component="li" className='line-why list-unstyled'/>
                 </div>
                 <div className=''>
                  <Typography variant="h4" color="initial" className='fw-semibold  fs-2' sx={{marginTop:"-5px"}}>Renovation and <br /> Remodeling</Typography>
                  <Typography variant="h6" color="initial" className='fw-medium mt-3 fs-6' >Services for updating and transforming existing structures.</Typography>
                 </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default SomeReason
