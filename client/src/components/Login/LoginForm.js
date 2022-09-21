import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Form, SABox } from './styles';

const LoginForm = () => {

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
            <hr style={{ marginTop: "10px" }} />
          </Box>
          <Button
            component={Link}
            to={"/quiz"}
            variant="contained"
            color="error"
            style={{ padding: "0.5rem 5rem" }}
            sx={{ fontSize: { xs: "10px", md: "12px"} }}
          >
            Log In
          </Button>
          <hr style={{ marginTop: "30px" }} />
          <Button
            component={Link}
            to={"/signup"}
            variant="contained"
            color="success"
            style={{ padding: "0.5rem 5rem" }}
            sx={{ fontSize: { xs: "10px", md: "12px"} }}
          >
            Create new account
          </Button>
        </Form>
      </SABox>
    );
}

export default LoginForm