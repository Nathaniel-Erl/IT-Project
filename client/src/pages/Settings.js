import { Grid, Fab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUp/SignUpForm";
import SignOutButton from "../components/Buttons/SignOutButton";

// First name, Last name,
function Settings() {
  const dummy = ["First Name", "Last Name", "Username", "Email"];
  return (
    <>
      <NavBar title="Settings" />
      {/* contains everything */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container display="flex" justifyContent="center" padding={3}>
          <Grid item xs={6}>
            <SignUpForm title="Settings" button="Save Changes" link="../dashboard" />
          </Grid>
        </Grid>
      </Box>
      <SignOutButton title="Log Out" link="/login"></SignOutButton>
    </>
  );
}

export default Settings;
