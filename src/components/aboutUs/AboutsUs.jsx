import React from "react";
import Grid from "@mui/material/Grid";
import AboutImg from "../../asset/About.png";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import "./about.css";

const AboutsUs = () => {
  return (
    <>
      <Box>
        <Grid
          container
          className="mt-5 pt-lg-5 px-4 pe-md-3 px-lg-4 d-flex justify-content-center align-items-center"
        >
          <Grid item xs={12} sm={6} md={5} className="text-center mb-5 mb-md-0">
            <img src={AboutImg} alt="About image" />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h3" className="fw-medium mb-2">
              About us
            </Typography>
            <Typography variant="h5" className="fw-medium mb-3 mb-md-0 mb-lg-3">
              Our construction company had been founded 10 years, at every peak
              of building
            </Typography>
            <Typography
              variant="h6"
              className="fw-normal lh-base mt-3 mt-md-2 mt-lg-3"
            >
              Welcome to [Your Company Name], established in [Year], where we
              specialize in delivering high-quality construction services
              tailored to your needs. Our mission is to build lasting
              relationships with our clients through integrity and excellence.
              We offer a wide range of services, including residential,
              commercial, and renovation projects.
            </Typography>
          </Grid>
        </Grid>

        <Box className="container m-auto">
          <Typography variant="h3" className="mt-5 text-center text-blue">
            Our Process
          </Typography>
          <div className="mt-5 d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap gap-4">
            {/* card 1 */}
            <div
              className="light-blu rounded-5 p-4 text-center"
              style={{
                width: "260px",
                height: "270px",
                backgroundColor: " #9BBEFF",
              }}
            >
              <Typography className="badge text-bg-primary rounded-circle mb-2">
                1
              </Typography>
              <Typography
                variant="h4"
                className="light-blue text-center mb-2 fw-bold"
                style={{ color: " #4B4B4B" }}
              >
                Consultation
              </Typography>
              <Typography variant="h6" className="light-blue lh-sm">
                We take in your designs and access your home.This is a great
                time to ask questions
              </Typography>
            </div>

            {/* card 2 */}
            <div
              className="light-blu rounded-5 p-4 text-center"
              style={{
                width: "260px",
                height: "270px",
                backgroundColor: " #9BBEFF",
              }}
            >
              <Typography className="badge text-bg-primary rounded-circle mb-2">
                2
              </Typography>
              <Typography
                variant="h4"
                className="light-blue text-center mb-2 fw-bold"
                style={{ color: " #4B4B4B" }}
              >
                Design
              </Typography>
              <Typography variant="h6" className="light-blue lh-sm">
                We will review inspiration,discuss products ,materials and other
                options
              </Typography>
            </div>

            {/* card 3 */}
            <div
              className="light-blu rounded-5 p-4 text-center"
              style={{
                width: "260px",
                height: "270px",
                backgroundColor: " #9BBEFF",
              }}
            >
              <Typography className="badge text-bg-primary rounded-circle mb-2">
                3
              </Typography>
              <Typography
                variant="h4"
                className="light-blue text-center mb-2 fw-bold"
                style={{ color: " #4B4B4B" }}
              >
                Planning
              </Typography>
              <Typography variant="h6" className="light-blue lh-sm">
                Finalize documents and budgets. Construct timeline and schedule.
              </Typography>
            </div>

            {/* card 4 */}
            <div
              className="light-blu rounded-5 p-4 text-center"
              style={{
                width: "260px",
                height: "270px",
                backgroundColor: " #9BBEFF",
              }}
            >
              <Typography className="badge text-bg-primary rounded-circle mb-2">
                4
              </Typography>
              <Typography
                variant="h4"
                className="light-blue text-center mb-2 fw-bold"
                style={{ color: " #4B4B4B" }}
              >
                Construction
              </Typography>
              <Typography variant="h6" className="light-blue lh-sm">
                Project supervisor will be on site daily to ensure project meets
                specifications.
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default AboutsUs;
