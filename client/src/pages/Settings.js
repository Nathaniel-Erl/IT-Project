import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/SignUp/SignUpForm";
import SignOutButton from "../components/Buttons/SignOutButton";

function Settings() {
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
            <Question title="Settings" button="Save Changes" link="../dashboard" />
          </Grid>
        </Grid>
      </Box>
      <SignOutButton title="Log Out" link="/login"></SignOutButton>
    </>
  );
}

export default Settings;
