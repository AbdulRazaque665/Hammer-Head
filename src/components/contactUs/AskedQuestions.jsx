import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";

const AskedQuestions = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100%",
          width: "100%",
          background:
            "linear-gradient(to left, #1C64EA8F 30%, #F9FBFE8F 100%, #FFFFFF8F 90%)",
        }}
      >
        <Box className="container py-3">
          <Typography
            variant="h4"
            className="text-center fw-semibold pt-4"
            sx={{ color: "#1C64EA" }}
          >
            Frequently Asked Questions
          </Typography>

          {/* Accordion 1 */}
          <Accordion className="my-3 bg-transparent">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="fs-1" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="py-2 fs-5 fw-semibold"
            >
              What services do you offer?
            </AccordionSummary>
            <AccordionDetails className="fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion className=" my-3 bg-transparent">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="fs-1" />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="py-2 fs-5 fw-semibold"
            >
              How do I get a quote for my project?
            </AccordionSummary>
            <AccordionDetails className="fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>

          {/* Accordion 3 */}
          <Accordion className="my-3 bg-transparent">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="fs-1" />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="py-2 fs-5 fw-semibold"
            >
              What is your typical project timeline?
            </AccordionSummary>
            <AccordionDetails className="fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>

          {/* Accordion 4 */}
          <Accordion className="bg-transparent my-3">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="fs-1" />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="py-2 fs-5 fw-semibold"
            >
              How do you handle permits and inspections?
            </AccordionSummary>
            <AccordionDetails className="fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>
    </>
  );
};

export default AskedQuestions;
