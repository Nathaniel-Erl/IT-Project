import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Form, SABox } from "./styles";

const SignUpForm = ({ setOpen, title, button }) => {
  return (
    <SABox>
      <Form>
        <Typography variant="h5" color="black" align="left">
          {title}
        </Typography>
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Box display="flex" flexDirection="row" gap="0.5rem">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              autoComplete="off"
            />
            <TextField
              id="outlined-multiline-static"
              label="Last Name"
              variant="outlined"
              autoComplete="off"
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            label="Username"
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            id="outlined-multiline-static"
            label="E-mail"
            variant="outlined"
            autoComplete="off"
          />
          <hr style={{ marginTop: "10px" }} />
          <TextField
            id="outlined-multiline-static"
            label="Password"
            variant="outlined"
            autoComplete="off"
          />
          <TextField
            id="outlined-multiline-static"
            label="Re-enter Password"
            variant="outlined"
            autoComplete="off"
          />
          <hr style={{ marginTop: "10px" }} />
        </Box>
        <Button
          variant="contained"
          color="error"
          style={{ padding: "0.5rem 5rem" }}
        >
          {button}
        </Button>
      </Form>
    </SABox>
  );
};

export default SignUpForm;
