import React from 'react'
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Hammerlogo from '../../asset/logo.png';
import "./header.css"

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <div className="container-fluid">
    <AppBar position="static" className="bg-transparent shadow-none">
      <Container maxWidth="">
        <Toolbar disableGutters>
        <NavLink className="d-flex align-items-center text-decoration-none" to="/">
        <img width="35px" src={Hammerlogo} className="d-lg-block d-md-block d-none me-2" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            className=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            HammerHead
          </Typography>
        </NavLink>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/whyus">Why Us</NavLink></li>
                <li><NavLink to="/careers">Careers</NavLink></li>
                <li><NavLink to="/contactus">Contact Us</NavLink></li>
              </ul>
            </Menu>
          </Box>   
          <img src={Hammerlogo} className='d-md-none d-lg-none d-sm-block me-2' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box className="" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <ul className='mx-auto d-flex justify-content-center mb-0  list-unstyled'>
                <li className=" me-4"><NavLink className="text-decoration-none text-black fw-semibold fs-5 hover" to="/">Home</NavLink></li>
                <li className=" me-4"><NavLink className="text-decoration-none text-black fw-semibold fs-5 hover" to="/aboutus">About Us</NavLink></li>
                <li className=" me-4"><NavLink className="text-decoration-none text-black fw-semibold fs-5 hover" to="/whyus">Why Us</NavLink></li>
                <li className=" me-4"><NavLink className="text-decoration-none text-black fw-semibold fs-5 hover" to="/careers">Careers</NavLink></li>
                <li className=""><NavLink      className="text-decoration-none text-black fw-semibold fs-5 hover" to="/contactus">Contact Us</NavLink></li>
              </ul>
          </Box>
          <Box>
            <button  className="border-0 text-white rounded-5 text-capitalize button-color fw-semibold">Let's Connect</button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}

export default Header
