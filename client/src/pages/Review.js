import { Box, Fab } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Question from '../components/Question/Question'
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <>
      <NavBar title="Review" />
      <Box flex={4} padding={2}>
        <Question />
        <Question />
        <Question />
      </Box>
      <Fab
        component={Link}
        to="/createquestion"
        variant="extended"
        size="medium"
        color="error"
        aria-label="add"
        sx={{
          borderRadius: 1,
          position: "fixed",
          bottom: 20,
          right: { xs: "calc(50% - 175px)", md: 30 },
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        Add Question
      </Fab>
    </>
  );
}

export default Review