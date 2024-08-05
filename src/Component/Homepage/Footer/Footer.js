import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Logo from "../../../Assest/Images/Logo.png";
import FooterBackground from "../../../Assest/Images/footer_banner.png";

function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${FooterBackground})`,
        backgroundSize: "cover",
        height: "700px",
      }}
    >
      <Box
        sx={{
          background: "#000000",
          //  backgroundImage :'linear-gradient(#2b3b59, white)',
          //backgroundImage :'linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%)',
          padding: "50px 0",
          position: "absolute",
          bottom: "0",
          width: "97%",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          left: "50%",
          right: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <img src={Logo} alt="My Indian Company" width="40%" />
              {/* <Typography
              variant="p"
              sx={{
                color: "#fff",
                display: "block",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Helpful Links
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: "#fff",
                mt: "10px",
              }}
            >
              Categories
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: "#fff",
                mt: "10px",
              }}
            >
              Reviews
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: "block",
                color: "#fff",
                mt: "10px",
              }}
            >
              Listing
            </Typography> */}
              {/* <a href ="/contact-us" style={{ textDecoration : "none"}}>
              <Typography
                variant="p"
                sx={{
                  display: "block",
                  color: "#fff",
                  mt: "10px",
                }}
              >
                Contact Us
              </Typography>
              </a> */}
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="p"
                sx={{
                  color: "#fff",
                  display: "block",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                Helpful Links
              </Typography>
              <a href="/#about" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    color: "#fff",
                    mt: "10px",
                  }}
                >
                  About Us
                </Typography>
              </a>
              <a href="/awards-us" style={{ textDecoration: "none" }}></a>
              <a href="/Privacy-page" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    color: "#fff",
                    mt: "10px",
                  }}
                >
                  Privacy Policy
                </Typography>
              </a>
              <a href="/Term & Conditon" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    color: "#fff",
                    mt: "10px",
                  }}
                >
               Terms & Conditions
                </Typography>
              </a>
              <a href="/#contact" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  sx={{
                    display: "block",
                    color: "#fff",
                    mt: "10px",
                  }}
                >
                  Contact Us
                </Typography>
              </a>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="p"
                sx={{
                  color: "#fff",
                  display: "block",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                Contact Us
              </Typography>
              {/* <Typography
              variant="p"
              sx={{
                display: "block",
                color: "#fff",
                mt: "10px",
              }}
            >
              Address : B 299 & 300,Palam Extension, Road, Ramphal Chowk Rd,
              Sector 7 Dwarka, NEW DELHI - 110075
            </Typography> */}

              {/* <Typography
              variant="p"
              sx={{
                display: "block",
                color: "#fff",
                mt: "10px",
              }}
            >
              9811984442 , 0110298736
            </Typography> */}
              <Typography
                variant="p"
                sx={{
                  display: "block",
                  color: "#fff",
                }}
              >
                info@smartraisers.com
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="p"
                sx={{
                  color: "#fff",
                  display: "block",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                Follow us on
              </Typography>
              <Box mt="10px">
                <FacebookIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                  }}
                />
              </Box>
              <Box mt="10px">
                <InstagramIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                  }}
                />
              </Box>
              <Box mt="10px">
                <TwitterIcon
                  fontSize="large"
                  sx={{
                    color: "#fff",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Divider
            sx={{
              backgroundColor: "#fff",
              mt: "20px",
            }}
          />
          <Typography
            variant="p"
            sx={{
              display: "block",
              mt: "20px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Copyright &copy; 2024
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
