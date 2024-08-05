import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image1d from "../../../Assest/Images/about.png";

function About() {
  return (
    <Box
      sx={{
        m: "30px",
      }}
      id="about"
    >
      <Container>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              //   width: "100%",
              height: "2px",
              background: "#000",
              bottom: "0px",
            }}
          />
        </Box>

        <Grid container spacing={10}>
          <Grid item md={6} sm={12} xs={10}>
            <img src={Image1d} alt="About" width="120%" height="80%" />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Typography
              variant="p"
              sx={{
                fontWeight: "800",
                fontSize: "25px",
                m: "20px 0 30px 0",
                display: "block",
                borderBottom: "1px solid #ccc",
                textAlign: "center",
                pb: "5px",
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="p"
              sx={{
                display: "block",
                fontSize: "10px",
                mt: "5px",
                fontWeight: "200",
              }}
            >
              <Typography>
                Welcome to Smart Risers, the ultimate entertainment destination
                where creativity knows no bounds! At Smart Risers, we believe
                that everyone has a unique story to tell, and we provide the
                perfect platform to showcase your talent, share your passions,
                and connect with a global community of creators and viewers.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "25px",
                  m: "10px 0 30px 0",
                  //   display: "block",
                  borderBottom: "2px solid #000000",
                  textAlign: "left",
                  pb: "5px",
                }}
              >
                Our Mission
              </Typography>
              <Typography>
                Our mission is to empower individuals to express themselves
                freely and authentically. We aim to create a space where people
                from all walks of life can come together to create, share, and
                enjoy entertaining content. Whether you're a budding artist, a
                seasoned performer, or someone who just loves to watch amazing
                videos, Smart Risers is the place for you.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "25px",
                  m: "10px 0 30px 0",
                  //   display: "block",
                  borderBottom: "2px solid #000000",
                  textAlign: "left",
                  pb: "5px",
                }}
              >
                What We Offer
              </Typography>
              <Typography>
                Vibrant Community: Join a dynamic and inclusive community of
                creators and viewers. Make new friends, collaborate with fellow
                creators, and be inspired by diverse content from around the
                world.
              </Typography>

              <Typography>
                {" "}
                Creative Tools: With our easy-to-use editing tools, special
                effects, and filters, you can bring your ideas to life and
                create stunning videos effortlessly.
              </Typography>

              <Typography>
                Discover Content: Explore trending videos, discover new talent,
                and stay entertained with endless content tailored to your
                interests.
              </Typography>
              <Typography>
                Engagement: Interact with your favorite creators, leave
                comments, share videos, and join challenges to showcase your
                skills and creativity.
              </Typography>

              <Typography>
                Monetization: For those looking to take their content to the
                next level, we offer opportunities to monetize your videos and
                turn your passion into a rewarding career.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "25px",
                  m: "10px 0 30px 0",
                  //   display: "block",
                  borderBottom: "2px solid #000000",
                  textAlign: "left",
                  pb: "5px",
                }}
              >
                Our Vision
              </Typography>
              <Typography>
                We envision a world where everyone has the opportunity to share
                their voice and be seen. By fostering a supportive and
                innovative platform, we aim to become the go-to app for
                entertainment, creativity, and community building.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "25px",
                  m: "10px 0 30px 0",
                  //   display: "block",
                  borderBottom: "2px solid #000000",
                  textAlign: "left",
                  pb: "5px",
                }}
              >
                Join Us
              </Typography>

              <Typography>
                Download Smart Risers today and start your journey of
                creativity, fun, and connection. Together, let's light up the
                world with our stories and make every moment memorable!
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "500",
                  fontSize: "25px",
                  m: "10px 0 30px 0",
                  //   display: "block",
                  borderBottom: "2px solid #000000",
                  textAlign: "left",
                  pb: "5px",
                }}
              >
                Contact Us
              </Typography>
              <Typography>
                We love hearing from our users! If you have any questions,
                feedback, or suggestions, feel free to reach out to us at
                info@Smart Risers.com. Follow us on social media for the latest
                updates, tips, and featured content.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;