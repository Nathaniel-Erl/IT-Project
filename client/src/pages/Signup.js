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
              sx={{ width: { xs: "200px", sm: "300px", lg: "400px" } }}
            />
          <Typography
              color="#666666"
              align="center"
              sx={{ fontSize: { xs: "12px", sm: "15px", lg: "19px" } }}
          >
            Quiz yourself and your friends!
          </Typography>
        </LogoText>
        <Box>
          <SignUpForm title="Sign up" button="Sign Up" link="/api"/>
        </Box>
      </MainContainer>
    </>
  );
};

export default Signup;
