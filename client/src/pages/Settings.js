import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Question from "../components/SignUp/SignUpForm";

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
            <Question title="Settings" button="Save Changes" />
          </Grid>
          <ProfileBlock></ProfileBlock>
        </Grid>
      </Box>
    </>
  );
}

export default Settings;
