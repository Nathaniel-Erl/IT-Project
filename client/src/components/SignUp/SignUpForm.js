import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Form, SABox } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/auth";

const SignUpForm = ({ user, title, button, link }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userData, navigate))
  }

  return (
    <SABox>
      <Form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" color="black" align="left">
            {title}
          </Typography>
          <IconButton component={Link} to={link}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Box display="flex" flexDirection="row" gap="0.5rem">
            <TextField
              id="outlined-basic"
              value={user ? user.result.firstName : userData.firstName}
              required
              label="First Name"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
            <TextField
              id="outlined-multiline-static"
              value={user ? user.result.lastName : userData.lastName}
              required
              label="Last Name"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
          </Box>
          <TextField
            id="outlined-multiline-static"
            value={user ? user.result.userName : userData.userName}
            required
            label="Username"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
          <TextField
            id="outlined-multiline-static"
            value={user ? user.result.email : userData.email}
            required
            type="email"
            label="E-mail"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <hr style={{ marginTop: "10px" }} />
          <TextField
            id="outlined-multiline-static"
            required
            type="password"
            label={user ? "New password" : "Password"}
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <TextField
            id="outlined-multiline-static"
            required
            type= "password"
            label="Re-enter Password"
            variant="outlined"
            autoComplete="off"
            onChange={(e) =>
              setUserData({ ...userData, confirmedPassword: e.target.value })
            }
          />
          <hr style={{ marginTop: "10px" }} />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="success"
          style={{ padding: "0.5rem 5rem", backgroundcolor: "red" }}
        >
          {button}
        </Button>
      </Form>
    </SABox>
  );
};

export default SignUpForm;
