import { Box, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import logo from "../images/logo.svg";
import { Logo, MainContainer, LogoText } from "../components/Login/styles.js"

const Login = () => {
  return (
    <>
      <MainContainer>
        <LogoText>
          <Logo
            src={logo}
            alt="quizy"
            sx={{ width: { xs: "200px", sm: "300px", lg: "40vw" } }}
          />
          <Typography
                color="#666666"
                align="center"
              >
                Quiz yourself and your friends!
          </Typography>
        </LogoText>
        <Box>
        <LoginForm/>
        </Box>
      </MainContainer>
    </>
  );
}

export default Login