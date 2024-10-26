import React from 'react'
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import "./footer.css"
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <div className="background-2 py-5 ">
      <div className='container'>
      <Divider variant="middle" component="" className="blue-line"/>
       <div className="row gy-5">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <Typography variant="h5" className="footer-txt fs-2">Get Local Info</Typography>
          <Typography variant="h6" className="footer-txt my-4 fs-5">At hammerhead, we specialize in delivering high-quality construction services with a commitment to excellence and innovation. We take pride in our strong client relationships and community engagement. Contact us today to start building your dream!</Typography>
          <Typography variant="h6" className="footer-txt text-nowrap mt-5"> <Icon className="me-2 fs-3" icon="gridicons:location"  /> Cooper Road, Garhi Shahu, Lahore, Punjab</Typography>
          <Typography variant="h6" className="footer-txt text-nowrap"> <Icon className="me-2 fs-3" icon="skill-icons:gmail-light" /> supporthammerhead@gmail.com</Typography>
         
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 ">
          <Typography variant="h5" className="footer-txt fs-2">Useful Links</Typography>
          <ul className="list-unstyled d-flex flex-column justify-content-between">
          <li className='my-2 fs-5'><NavLink className=" footer-txt text-decoration-none" to="/">Home</NavLink></li>
          <li className='my-2 fs-5'><NavLink className=" footer-txt text-decoration-none" to="/careers">Careers</NavLink></li>
          <li className='my-2 fs-5'><NavLink className=" footer-txt text-decoration-none" to="/contactus">Contact Us</NavLink></li>
          <li className="my-2 fs-5 footer-txt">Services</li>
          <li className="my-2 fs-5 footer-txt">FAQs</li>
          <li className="my-2 fs-5 footer-txt">Terms & Conditions</li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.5531412481578!2d74.32279277442734!3d31.563876044993446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b4da418797f%3A0xa5156c6effce0f6e!2sCooper%20Rd%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729784745860!5m2!1sen!2s" width="500" height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-3 img-fluid"></iframe>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
