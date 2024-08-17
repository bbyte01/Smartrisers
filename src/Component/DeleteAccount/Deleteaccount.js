import React from "react";
import { Container, Paper, Typography,Box } from "@mui/material";
import HeaderTop from "../Homepage/HeaderTop/HeaderTop";
import Footer from "../Homepage/Footer/Footer";

function DeleteAccount() {
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
            The "Delete Account" feature in an app allows users to permanently
            remove their account and all associated data from the system.
            Implementing this feature involves several critical steps to ensure
            that the process is secure, irreversible, and compliant with legal
            and ethical standards.
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            1. User Interface for Account Deletion
            <Typography variant="h6" sx={{}}>
              Confirmation Dialog:
            </Typography>
            <Typography align="left">
              When a user initiates the account deletion process, they should be
              presented with a confirmation dialog. This dialog should clearly
              state the consequences of account deletion, emphasizing that the
              action is irreversible and will result in the loss of all user
              data. Example:
              <Typography>
                A dialog box with the title "Delete Account" and the message
                "Are you sure you want to delete your account? This action
                cannot be undone." The user is then given the option to cancel
                or proceed with the deletion.
              </Typography>
            </Typography>
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            2. Backend API Call for Account Deletion
            <Typography variant="h6" sx={{}}>
              API Endpoint:
            </Typography>
            <Typography>
              A dedicated API endpoint is required on the server to handle
              account deletion requests. This endpoint should be secured and
              accessible only to authenticated users. Request:
            </Typography>
            <Typography>
              The app sends a POST or DELETE request to the API endpoint with
              the user's credentials or a unique identifier (e.g., user_id).
              This request should include authentication tokens to verify the
              user's identity.
            </Typography>
            <Typography>Response Handling:</Typography>
            <Typography>
              The server processes the request and returns a response indicating
              whether the deletion was successful or if there was an error
              (e.g., server error, user not found). The app should handle this
              response appropriately, showing success or failure messages to the
              user.
            </Typography>
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            3. Data Cleanup and Logout
            <Typography variant="h6" sx={{}}>
              Local Data Cleanup:
            </Typography>
            <Typography>
              Once the account is successfully deleted on the server, the app
              should clear any locally stored data related to the user. This
              includes user preferences, cached data, and session tokens stored
              in local storage (e.g., SharedPreferences in Android or
              UserDefaults in iOS).
            </Typography>
            <Typography>User Logout:</Typography>
            <Typography>
              After clearing local data, the user should be logged out of the
              app. The app should redirect the user to the login screen or an
              introductory screen, signaling that the account deletion process
              is complete.
            </Typography>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            4. Post-Deletion User Experience
            <Typography variant="h6" sx={{}}>
              Redirect and Messaging:
            </Typography>
            <Typography>
              After account deletion, the user should be redirected to a neutral
              screen (e.g., login or welcome screen) with a message confirming
              that the account has been deleted. This reassures the user that
              the process was completed successfully.
            </Typography>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            5. Backend Considerations
            <Typography variant="h6" sx={{}}>
              Soft Deletion vs. Hard Deletion:
            </Typography>
            <Typography>
              Soft Deletion: The account is marked as deleted in the database,
              but the data is retained for a specific period (e.g., 30 days)
              before permanent deletion. This allows for recovery in case of
              accidental deletion.
            </Typography>
            <Typography>
              Hard Deletion: The account and all associated data are immediately
              and permanently removed from the system.
            </Typography>
            <Typography>Data Retention Policies:</Typography>
            <Typography>
              Comply with legal requirements regarding data retention and
              deletion. For instance, in some jurisdictions, users have the
              right to request the deletion of their data under laws like the
              GDPR (General Data Protection Regulation).
            </Typography>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            6. Security Considerations
            <Typography variant="h6" sx={{}}>
              Authentication and Authorization:
            </Typography>
            <Typography>
              Ensure that only the authenticated user can request the deletion
              of their account. The API should verify the user's identity before
              proceeding with deletion.
            </Typography>
            <Typography>Rate Limiting:</Typography>
            <Typography>
              Implement rate limiting to prevent abuse of the account deletion
              endpoint, protecting against automated deletion requests.
            </Typography>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "25px",
              m: "10px 0 30px 0",
              display: "block",
              //   borderBottom: " #000000",
              textAlign: "left",
              pb: "5px",
            }}
          >
            7. Legal and Ethical Considerations
            <Typography variant="h6" sx={{}}>
              Compliance with Laws:
            </Typography>
            <Typography>
              Ensure that the account deletion process complies with relevant
              data protection laws and regulations. Provide users with clear
              information about what will happen to their data once their
              account is deleted.
            </Typography>
            <Typography>User Consent:</Typography>
            <Typography>
              Make sure that users clearly understand that by deleting their
              account, they are consenting to the removal of all their data from
              your systems.
            </Typography>
            <Typography>Summary:</Typography>
            <Typography>
              The account deletion process in an app is a multi-step procedure
              involving the user interface, backend API calls, data cleanup, and
              user logout. The process should be secure, transparent, and
              compliant with legal standards, ensuring that users can delete
              their accounts and associated data safely and irreversibly.
            </Typography>
          </Typography>
        </Paper>
      </Container>
      <Footer/>
    </Box>
  );
}

export default DeleteAccount;
