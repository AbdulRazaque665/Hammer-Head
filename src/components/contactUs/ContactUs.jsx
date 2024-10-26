import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ContactImg from "../../asset/contact-background.png";
import AskedQuestions from "./AskedQuestions";

const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          minHeight: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${ContactImg})`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.60)",
            minHeight: "100%",
            width: "100%",
          }}
        >
          <Grid container className="container p-sm-5 py-3">
            <Grid item xs={12} lg={6}>
              <Typography
                variant="h4"
                className="text-center text-white fw-bold pt-4"
              >
                Tell us About Your Construction Project!
              </Typography>
              <Box className="mt-md-4">
                <Grid container spacing={3} className="my-2">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      className="bg-white rounded-3"
                      id="outlined-basic"
                      placeholder="First Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className="bg-white rounded-3"
                      fullWidth
                      id="outlined-basic"
                      placeholder="Last Name"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3} className="my-2">
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      className="bg-white rounded-3"
                      id="outlined-basic"
                      placeholder="Your Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      className="bg-white rounded-3"
                      id="outlined-basic"
                      placeholder="Phone"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3} className="my-2">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      className="bg-white rounded-3"
                      id="outlined-basic"
                      placeholder="Service you need"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} className="my-2">
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-static"
                      fullWidth
                      className="bg-white rounded-3"
                      placeholder="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>

                <button
                  className="border-0 text-white text-capitalize rounded-3 fs-5 fw-semibold py-1 px-4 mt-4"
                  style={{ backgroundColor: "#1C64EA" }}
                >
                  Send
                </button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
      <AskedQuestions/>
    </div>
  );
};

export default ContactUs;
