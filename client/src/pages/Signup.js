import { Box, Fab } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import Question from '../components/SignUp/SignUpQuestions'

const Signup = () => {
  return (
    <>
      <Box flex={4} padding={2}>
       <Question />
      </Box>
    </>
  );
}

export default Signup