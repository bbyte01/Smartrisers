import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Slide,
  Snackbar,
} from "@mui/material";
import { TextField } from "formik-mui";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Contact() {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitFormData = () => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      url: `https://backend.smartrisers.com/api/enquiry`,
      data: {
        email: email,
        message: message,
      },
    };
    axios(requestOptions)
    .then(() => {
      handleOpen();
      setLoading(false);
   
      setEmail("");
    
      setMessage("");
    })
    .catch((error) => {
      setLoading(false);
      console.log("error", error);
    });
};
  

const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const initialValues = {
    email,
    message,
  };

  return (
    <Box
        id="contact"
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            textAlign: "center",
            fontWeight: 500,
            fontSize: "30px",
          }}
        >
          <h3>Can We help you ?</h3>
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Smart Risers/Submit a request
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            textAlign: "left",
            fontSize: "30px",
          }}
        >
          <h5>Submit a request</h5>
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography
              variant="p"
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                display: "block",
                margin: "30px",
                color: "#666",
              }}
            >
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Enter valid email")
                    .required("Required"),

                  message: Yup.string().required("Required"),
                })}
                onSubmit={submitFormData}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field
                      component={TextField}
                      name="email"
                      value={email}
                      error={!!errors.email && touched.email}
                      helperText={
                        errors.email && touched.email ? errors.email : ""
                      }
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth
                      size="small"
                      label="Email"
                      placeholder="Enter email"
                      sx={{
                        mb: "20px",
                      }}
                    />
                    <Typography>
                      <p>
                        Please, enter the email address where you wish to
                        receive our answer. If you are a registered user of
                        Smart Risers, please include the email address you used
                        when you registered if possible to help us locate your
                        account as soon as possible
                      </p>
                    </Typography>
                    <Field
                      component={TextField}
                      multiline
                      rows={5}
                      name="message"
                      value={message}
                      error={!!errors.message && touched.message}
                      helperText={
                        errors.message && touched.message ? errors.message : ""
                      }
                      onChange={(e) => setMessage(e.target.value)}
                      fullWidth
                      size="small"
                      label="Message"
                      placeholder="Enter Message"
                      sx={{
                        mb: "20px",
                      }}
                    />
                    <Typography>
                      <p>
                        Please enter the details of your request and, if you
                        have any questions regarding our Terms of use, please
                        include specific samples of the usage you wish to give
                        our resouces. If you’re reporting a problem, make sure
                        to include as much information as possible. Please
                        include any screenshots or videos of issues since this
                        will also help us resolve problems much sooner. Once
                        your request is submitted, a member of our support staff
                        will respond as soon as possible.
                      </p>
                    </Typography>
                    <Typography>
                      <p>
                        <h4>Basic information on Data Protection:</h4> Smart
                        Risers Company will process your data to respond to your
                        questions, suggestions or complaints submitted, based on
                        the consent given by clicking the "Send" button. Your
                        data will not be disclosed to third parties and will be
                        transferred outside the EU under the terms of the
                        privacy policy. You can find out how to exercise your
                        rights, revoke your consent and more information in the
                        Privacy Policy
                      </p>
                    </Typography>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <CircularProgress size={18} /> : "Submit"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handleClose}
        autoHideDuration={5000}
        TransitionComponent={SlideTransition}
        message="You Information saved successfully. Our team will reach you with in 24 hours."
      />
    </Box>
  );
}

export default Contact;
