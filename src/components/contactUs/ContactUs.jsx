import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ContactImg from "../../asset/contact-background.png";
import AskedQuestions from "./AskedQuestions";

const ContactUs = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleCloseDialog = () => {
    setShowDialog(false);

    setUserDetail({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [userError, setUserError] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailEr: false,
    phoneErr: false,
    serviceErr: false,
    messageErr: false,
  });

  const formHandler = (e) => {
    e.preventDefault();

    const Errors = {
      firstNameErr: userDetail.firstName === "",
      lastNameErr: userDetail.lastName === "",
      emailEr: userDetail.email === "",
      phoneErr: userDetail.phone === "",
      serviceErr: userDetail.service === "",
      messageErr: userDetail.message === "",
    };

    setUserError(Errors);

    const hasNoErrors = !Object.values(Errors).includes(true);
    if (hasNoErrors) {
      setShowDialog(true);
    }
  };

  useEffect(() => {
    if (userDetail.firstName !== "")
      setUserError((prev) => ({ ...prev, firstNameErr: false }));
    if (userDetail.lastName !== "")
      setUserError((prev) => ({ ...prev, lastNameErr: false }));
    if (userDetail.email !== "")
      setUserError((prev) => ({ ...prev, emailEr: false }));
    if (userDetail.phone !== "")
      setUserError((prev) => ({ ...prev, phoneErr: false }));
    if (userDetail.service !== "")
      setUserError((prev) => ({ ...prev, serviceErr: false }));
    if (userDetail.message !== "")
      setUserError((prev) => ({ ...prev, messageErr: false }));
  }, [userDetail]);

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
          <form onSubmit={formHandler}>
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
                        value={userDetail.firstName}
                        fullWidth
                        className="bg-white rounded-3"
                        placeholder="First Name"
                        variant="outlined"
                        style={{
                          border: userError.firstNameErr && "1px solid red",
                        }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            firstName: e.target.value,
                          })
                        }
                      />
                      {userError.firstNameErr && (
                        <span className="text-danger">
                          Please enter your first name.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={userDetail.lastName}
                        className="bg-white rounded-3"
                        fullWidth
                        placeholder="Last Name"
                        variant="outlined"
                        style={{
                          border: userError.lastNameErr && "1px solid red",
                        }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            lastName: e.target.value,
                          })
                        }
                      />
                      {userError.lastNameErr && (
                        <span className="text-danger">
                          Please enter your last name.
                        </span>
                      )}
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} className="my-2">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={userDetail.email}
                        fullWidth
                        className="bg-white rounded-3"
                        placeholder="Your Email"
                        variant="outlined"
                        style={{ border: userError.emailEr && "1px solid red" }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            email: e.target.value,
                          })
                        }
                      />
                      {userError.emailEr && (
                        <span className="text-danger">
                          Please enter a valid email address.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        value={userDetail.phone}
                        fullWidth
                        className="bg-white rounded-3"
                        placeholder="Phone"
                        variant="outlined"
                        style={{
                          border: userError.phoneErr && "1px solid red",
                        }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            phone: e.target.value,
                          })
                        }
                      />
                      {userError.phoneErr && (
                        <span className="text-danger">
                          Enter your phone number.
                        </span>
                      )}
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} className="my-2">
                    <Grid item xs={12}>
                      <TextField
                        value={userDetail.service}
                        fullWidth
                        className="bg-white rounded-3"
                        placeholder="Service you need"
                        variant="outlined"
                        style={{
                          border: userError.serviceErr && "1px solid red",
                        }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            service: e.target.value,
                          })
                        }
                      />
                      {userError.serviceErr && (
                        <span className="text-danger">
                          Please enter the service you need.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} className="my-2">
                    <Grid item xs={12}>
                      <TextField
                        value={userDetail.message}
                        fullWidth
                        className="bg-white rounded-3"
                        placeholder="Message"
                        multiline
                        rows={4}
                        style={{
                          border: userError.messageErr && "1px solid red",
                        }}
                        onChange={(e) =>
                          setUserDetail({
                            ...userDetail,
                            message: e.target.value,
                          })
                        }
                      />
                      {userError.messageErr && (
                        <span className="text-danger">
                          Please enter your message.
                        </span>
                      )}
                    </Grid>
                  </Grid>

                  <button
                    className="border-0 text-white text-capitalize rounded-3 fs-5 fw-semibold py-1 px-4 mt-4"
                    style={{ backgroundColor: "#1C64EA" }}
                    type="submit"
                  >
                    Send
                  </button>
                  <Dialog open={showDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Submission Successful</DialogTitle>
                    <DialogContent>
                      <Typography>
                        Your message has been sent successfully!
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseDialog} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <AskedQuestions />
    </div>
  );
};

export default ContactUs;
