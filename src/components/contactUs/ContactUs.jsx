import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ContactImg from "../../asset/contact-background.png";

const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          height: "85vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ContactImg})`,
        }}
      >
        <Grid container className="container bg-transparent p-sm-5">
          <Grid item xs={12} lg={6}>
            <Typography variant="h4" className="text-center fw-bold pt-3">
              Tell us About Your Construction Project!
            </Typography>
            <Box className="border border-info border-3 mt-4 mt-sm-4 p-4 ">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              #
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              #
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <button
                className="border-0 text-white text-capitalize fw-semibold py-2 px-4 mt-4"
                style={{ backgroundColor: "#1C64EA" }}
              >
                Send
              </button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactUs;
