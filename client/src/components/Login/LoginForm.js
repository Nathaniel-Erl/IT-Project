import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Form, SABox } from './styles';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../actions/auth";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(logIn(loginData, navigate))
    }

    return (
      <SABox>
        <Form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap="0.5rem">
            <TextField
              id="outlined-multiline-static"
              required
              type="email"
              label="E-mail"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <TextField
              id="outlined-multiline-static"
              required
              type="password"
              label="Password"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <hr style={{ marginTop: "10px" }} />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="error"
            style={{ padding: "0.5rem 5rem" }}
            sx={{ fontSize: { xs: "10px", md: "12px" } }}
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
            sx={{ fontSize: { xs: "10px", md: "12px" } }}
          >
            Create new account
          </Button>
        </Form>
      </SABox>
    );
}

export default LoginForm