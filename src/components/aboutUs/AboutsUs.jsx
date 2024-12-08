import React from "react";
import AboutImg from "../../asset/About.png";
import { Box, Typography } from "@mui/material";
import "./about.css";

const AboutsUs = () => {
  return (
    <>
      <Box className="background-1 bg-img" sx={{paddingBottom:"120px",paddingTop:"50px",}}>
        <div className="container-fluid">
        <div
          className="row pt-lg-5 px-4 pe-md-3 px-lg-4 d-flex justify-content-center align-items-center flex-column-reverse flex-md-row flex-lg-row"
        >
          <div className=" mb-5 mb-md-0 mt-5 col-12  col-sm-12 col-md-6 col-lg-4 text-center text-md-start text-lg-start about-ani-left">
            <img src={AboutImg} alt="About image" className="img-fluid" />
          </div>

          <div className="mt-3 col-12 col-sm-12 col-md-6 col-lg-7 about-ani-right">
            <Typography variant="h3" className="fw-medium mb-2">
              About us
            </Typography>
            <Typography variant="h4" className="fw-medium mb-3 mb-md-0 mb-lg-3 my-4">
              Our construction company had been founded 10 years, at every peak
              of building
            </Typography>
            <Typography
              variant="h5"
              className="fw-normal lh-base mt-4 mt-md-2 mt-lg-3 mb-3"
            >
              Welcome to HammerHead, established in 2015, where we
              specialize in delivering high-quality construction services
              tailored to your needs. Our mission is to build lasting
              relationships with our clients through integrity and excellence.
              We offer a wide range of services, including residential,
              commercial, and renovation projects.
            </Typography>
          </div>
        </div>
        </div>

        <Box className="container m-auto">
          <Typography variant="h3" className="mt-5 text-center text-blue">
            Our Process
          </Typography>
          <div className="mt-5 row justify-content-center align-items-center gap-4 ">
            {/* card 1 */}
            <div
              className="light-blu rounded-5 p-4 text-center col-6 col-md-4 col-lg-3 our-ani-cards"
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
              className="light-blu rounded-5 p-4 text-center  col-6 col-md-4 col-lg-3 our-ani-cards"
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
              className="light-blu rounded-5 p-4 text-center  col-6 col-md-4 col-lg-3 our-ani-cards"
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
              className="light-blu rounded-5 p-4 text-center  col-6 col-md-4 col-lg-3 our-ani-cards"
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
