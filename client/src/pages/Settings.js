import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/Settings/SettingsForm.js";
import SignOutButton from "../components/Buttons/SignOutButton.js";
import { MainContainer } from "../components/Settings/styles.js";

function Settings() {
  return (
    <>
      <NavBar title="Settings" />
      {/* contains everything */}
      <MainContainer>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid>
            <Grid item xs={6}>
              <SignUpForm title="Settings" button="Save Changes" link="../dashboard" />
            </Grid>
          </Grid>
        </Box>
      </MainContainer>
      <SignOutButton title="Log Out" link="/login"></SignOutButton>
    </>
  );
}

export default Settings;
