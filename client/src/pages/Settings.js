import { Button, Card, Fab, Grid, Input } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import CreateQuizButton from "../components/CreateQuizButton/CreateQuizButton";
import NavBar from "../components/NavBar/NavBar";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import QuizBlock from "../components/QuizBlock/QuizBlock";
import * as font_sizes from "../static/FontSizes";
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
            <Card>
              <Grid container>
                {dummy.map((title) => (
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="center"
                    padding={3}
                  >
                    {title}
                    <Input></Input>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
          <ProfileBlock></ProfileBlock>
        </Grid>
      </Box>
    </>
  );
}

export default Settings;
