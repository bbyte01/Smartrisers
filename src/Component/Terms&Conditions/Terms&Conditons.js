import React from "react";

import { Typography, Box, Paper, Container } from "@mui/material";
import HeaderTop from "../../Component/Homepage/HeaderTop/HeaderTop"
import Footer from "../Homepage/Footer/Footer";
import "./Term.css";
function TermsCondition() {
  return (
    <Box>
    <HeaderTop/>
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
              fontSize: "40px",
            }}
          >
            <h4>Terms & Conditions</h4>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              display: "block",
              margin: "30px",
              color: "#666",
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                fontSize: "25px",
                m: "10px 0 30px 0",
                display: "block",
                //  borderBottom: "2px solid #000000",
                textAlign: "left",
                pb: "5px",
              }}
            >
              Terms & Conditions
            </Typography>
           
         
           
            </Typography>
            <Typography className="text" >
            These terms and conditions applies to the Smartrisers app (hereby referred to as "Application") for mobile devices that was created by simpishine (hereby referred to as "Service Provider") as a Free service.
            </Typography >
            <Typography
             className="text" 
            >
            Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.

            </Typography>
            <Typography
             className="text" 
            >
            The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.
            </Typography>
            <Typography
            className="text" 
            >
            The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.          
              </Typography>
              <Typography  className="text">
              Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:
              </Typography>
              <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                fontSize: "25px",
                m: "10px 0 30px 0",
                display: "block",
                //  borderBottom: "2px solid #000000",
                textAlign: "left",
                pb: "5px",
              }}
            >
            Google Play Services
            </Typography>
            <Typography  className="text">
            Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.              </Typography>
              <Typography  className="text">

              If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
              </Typography>
              <Typography  className="text">


              In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.

</Typography>
              <Typography  className="text">
              The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.

</Typography>
<Typography
              variant="p"
              sx={{
                fontWeight: "500",
                fontSize: "25px",
                m: "10px 0 30px 0",
                display: "block",
                //  borderBottom: "2px solid #000000",
                textAlign: "left",
                pb: "5px",
              }}
            >
            Changes to These Terms and Conditions
            </Typography>

            <Typography className="text" >
            The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.

            </Typography>
            
            <Typography className="text" >
            These terms and conditions are effective as of 2024-08-22
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: "500",
                fontSize: "25px",
                m: "10px 0 30px 0",
                display: "block",
                //  borderBottom: "2px solid #000000",
                textAlign: "left",
                pb: "5px",
              }}
            >
            Contact Us
            </Typography>
            <Typography className="text" >
            If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at simpishine07@gmail.com..            </Typography>
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
export default TermsCondition;
