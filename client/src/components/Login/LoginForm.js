import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react'
import { Form, SABox } from '../SignUp/styles.js';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/auth";

const LoginForm = () => {
    const [open, setOpen] = useState(false)
    const auth = useSelector(store => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(logIn(loginData, navigate))
      
      // wrong credentials
      if (auth.authData === null) {
        setOpen(true)
      } 
      else {
        setOpen(false);
      }
    }

    return (
      <SABox>
        <Form onSubmit={handleSubmit} >
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={open}
            sx={{position:'relative', top: '0', left:'0'}}
          >
            <Alert variant="filled" severity="error">
              Please re-enter your credentials
            </Alert>
          </Snackbar>

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
            to={"/api/signup"}
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