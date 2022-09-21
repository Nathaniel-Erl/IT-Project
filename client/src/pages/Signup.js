import { Box, Typography } from "@mui/material";
import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import logo from "../images/logo.svg";
import { Logo, MainContainer, LogoText } from "../components/SignUp/styles.js";

const Signup = () => {
  return (
    <>
      <MainContainer>
        <LogoText>
          <Logo
            src={logo}
            alt="quizy"
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
          <SignUpForm title="Sign up" button="Sign Up" link="../login"/>
        </Box>
      </MainContainer>
    </>
  );
};

export default Signup;
