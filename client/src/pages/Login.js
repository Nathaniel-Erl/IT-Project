import { Box, Typography } from '@mui/material'
import React from 'react'
import Question from '../components/Login/SignUpQuestions'
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
            sx={{ display: { xs: "none", sm: "block" } }}
          />
          <Typography
                variant="h5"
                color="#666666"
                align="center"
                marginRight="auto"
              >
                Quiz yourself and your friends!
          </Typography>
        </LogoText>
        <Box flex={4} padding={2}>
        <Question />
        </Box>
      </MainContainer>
    </>
  );
}

export default Signup