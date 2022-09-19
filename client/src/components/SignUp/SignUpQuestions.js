import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Form, SABox } from './styles';
import CloseIcon from "@mui/icons-material/Close";

const ShortAnswer = ({ setOpen }) => {

    return (
      <SABox>
        <Form>

          <hr style={{ marginTop: "-3rem" }} />

          <Box display="flex" flexDirection="column" gap="2rem">
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
          </Box>
          <Button
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Form>
      </SABox>
    );
}

export default ShortAnswer