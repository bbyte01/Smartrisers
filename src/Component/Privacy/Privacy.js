import React from "react";

import { Typography, Box, Paper, Container } from "@mui/material";
import HeaderTop from "../Homepage/HeaderTop/HeaderTop";
import Footer from "../Homepage/Footer/Footer";

function Privacypolicy() {
  return (
    <Box>
      <HeaderTop />
      <Container>
        <Paper
          sx={{
            m: "40px 0 ",
            padding: "40px 20px",
            textAlign: "center",
            boxShadow: "0px 0px 10px #ccc",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "30px",
            }}
          >
            <h4>Privacy Policy</h4>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              display: "block",
              margin: "30px",
              color: "#666",
            }}
          >
            <Typography variant="p" textAlign="left" 
              sx={{
                display: "block",
                fontSize: "20px",
                mt: "5px",
                fontWeight: "200",
              }}>
              <h4>Privacy Policy</h4>
            </Typography>
         This privacy policy applies to the Smartrisers app (hereby referred
            to as "Application") for mobile devices that was created by
            simpishine (hereby referred to as "Service Provider") as a Free
            service. This service is intended for use "AS IS".
            <Typography variant="p" textAlign="left">
              <h4>Information Collection and Use</h4>
            </Typography>
            The Application collects information when you download and use it.
            This information may include information such as Your device's
            Internet Protocol address (e.g. IP address) The pages of the
            Application that you visit, the time and date of your visit, the
            time spent on those pages The time spent on the Application The
            operating system you use on your mobile device The Application does
            not gather precise information about the location of your mobile
            device. The Service Provider may use the information you provided to
            contact you from time to time to provide you with important
            information, required notices and marketing promotions. For a better
            experience, while using the Application, the Service Provider may
            require you to provide us with certain personally identifiable
            information, including but not limited to simpishine07@gmail.com.
            The information that the Service Provider request will be retained
            by them and used as described in this privacy policy.
            <Typography variant="p" textAlign="left">
              <h4>Third Party Access</h4>
            </Typography>
            Only aggregated, anonymized data is periodically transmitted to
            external services to aid the Service Provider in improving the
            Application and their service. The Service Provider may share your
            information with third parties in the ways that are described in
            this privacy statement. Please note that the Application utilizes
            third-party services that have their own Privacy Policy about
            handling data. Below are the links to the Privacy Policy of the
            third-party service providers used by the Application:
            <Typography variant="p" textAlign="left">
              <h4>Google Play Services</h4>
            </Typography>
            The Service Provider may disclose User Provided and Automatically
            Collected Information: as required by law, such as to comply with a
            subpoena, or similar legal process; when they believe in good faith
            that disclosure is necessary to protect their rights, protect your
            safety or the safety of others, investigate fraud, or respond to a
            government request; with their trusted services providers who work
            on their behalf, do not have an independent use of the information
            we disclose to them, and have agreed to adhere to the rules set
            forth in this privacy statement.
            <Typography variant="p" textAlign="left">
              <h4>Opt-Out Rights</h4>
            </Typography>
            You can stop all collection of information by the Application easily
            by uninstalling it. You may use the standard uninstall processes as
            may be available as part of your mobile device or via the mobile
            application marketplace or network.
            <Typography variant="p" textAlign="left">
              <h4>Data Retention Policy</h4>
            </Typography>
           <p>The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like them to delete User Provided Data that you have provided
            via the Application, please contact them at simpishine07@gmail.com
            and they will respond in a reasonable time.</p> 
            <Typography variant="p" textAlign="left">
              <h4>Children</h4>
            </Typography>
            The Service Provider does not use the Application to knowingly
            solicit data from or market to children under the age of 13. The
            Application does not address anyone under the age of 13. The Service
            Provider does not knowingly collect personally identifiable
            information from children under 13 years of age. In the case the
            Service Provider discover that a child under 13 has provided
            personal information, the Service Provider will immediately delete
            this from their servers. If you are a parent or guardian and you are
            aware that your child has provided us with personal information,
            please contact the Service Provider (simpishine07@gmail.com) so that
            they will be able to take the necessary actions.
            <Typography variant="p" textAlign="left">
              <h4>Security</h4>
            </Typography>
            The Service Provider is concerned about safeguarding the
            confidentiality of your information. The Service Provider provides
            physical, electronic, and procedural safeguards to protect
            information the Service Provider processes and maintains.
            <Typography variant="p" textAlign="left">
              <h4>Changes</h4>
            </Typography>
            This Privacy Policy may be updated from time to time for any reason.
            The Service Provider will notify you of any changes to the Privacy
            Policy by updating this page with the new Privacy Policy. You are
            advised to consult this Privacy Policy regularly for any changes, as
            continued use is deemed approval of all changes. This privacy policy
            is effective as of 2024-07-30
            <Typography variant="p" textAlign="left">
              <h4>Your Consent</h4>
            </Typography>
            By using the Application, you are consenting to the processing of
            your information as set forth in this Privacy Policy now and as
            amended by us.
            <Typography variant="p" textAlign="left">
              <h4>Contact Us</h4>
            </Typography>
            If you have any questions regarding privacy while using the
            Application, or have questions about the practices, please contact
            the Service Provider via email at simpishine07@gmail.com. This
            privacy policy page was generated by App Privacy Policy Generator
          </Typography>
          <Box
            sx={{
              mt: "40px",
            }}
          ></Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
}
export default Privacypolicy;
