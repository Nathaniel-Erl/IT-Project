import { Button, Grid } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { StyledAppBar } from "../components/NavBar/styles";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import * as colors from "../static/Colors";
import * as font_sizes from "../static/FontSizes";

function Profile() {
  return (
    <>
      <NavBar title="Profile" />

      <Grid container>
        <Grid item xs={9}>
          <ProfileBlock></ProfileBlock>
        </Grid>
        <Grid item xs={3}>
          <StyledAppBar sx={{ top: 64, minHeight: 600 }}>
            <Grid
              container
              direction="column"
              justifyContent="end"
              alignItems="center"
              display={"flex"}
              sx={{ top: 64, minHeight: 600 }}
            >
              <Grid item>
                <Button
                  sx={{
                    margin: 2,
                    fontSize: font_sizes.FONT_M,
                    color: colors.WHITE,
                    backgroundColor: colors.BLUE,
                  }}
                  onClick={() => {
                    alert("not implemented yet");
                  }}
                >
                  Account Settings
                </Button>
              </Grid>
              <Grid>
                <Button
                  sx={{
                    margin: 2,
                    fontSize: font_sizes.FONT_M,
                    color: colors.WHITE,
                    backgroundColor: colors.RED,
                  }}
                  onClick={() => {
                    alert("not implemented yet");
                  }}
                >
                  Log Out
                </Button>
              </Grid>
            </Grid>
          </StyledAppBar>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
