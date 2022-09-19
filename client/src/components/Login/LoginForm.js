import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import { Form, SABox } from './styles';

const ShortAnswer = ({ setOpen }) => {

    return (
      <SABox>
        <Form>

          <Box display="flex" flexDirection="column" gap="0.5rem">
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
            <hr style={{ marginTop: "10px"}} />
          </Box>
          <Button
            variant="contained"
            color="error"
            style={{ padding: "0.5rem 5rem"}}
          >
            Log In
          </Button>
          <hr style={{ marginTop: "30px"}} />
          <Button
            variant="contained"
            color="error"
            style={{ padding: "0.5rem 5rem"}}
          >
            Create new account
          </Button>
        </Form>
      </SABox>
    );
}

export default ShortAnswer