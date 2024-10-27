import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';

 
  const AlertDialog = (props) => {
  const {handleClose,open} = props

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='d-flex align-items-center justify-content-between'>
          <Typography variant="h5" color="initial">Details</Typography>
          <Button onClick={handleClose} variant="text" color="black">
          <CloseIcon/>
          </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box className="">
            <Typography variant="h6" color="initial" className='d-flex align-items-center'><Icon icon="line-md:phone-call-loop" className='logo-text me-2' />Phone: 03100000000</Typography>
            <Typography variant="h6" color="initial" className='d-flex align-items-center'><Icon icon="logos:google-gmail" className='fs-6 me-2' />Mail: supporthammerhead@gmail.com</Typography>
            <Typography variant="h6" color="initial" className='d-flex align-items-center'><Icon icon="logos:whatsapp-icon" className='me-2'/>Whatsapp: 03100000000</Typography>
            </Box>
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </Fragment>
  );
}

export default AlertDialog