import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import CreateButton from "../components/CreateButton/CreateButton";

const Review = () => {
  return (
    <>
      <NavBar title="Review" />
      <Box flex={4} padding={2}>
        <Question question={"What is the power house of the cell ?"} />
        <Question />
        <Question />
      </Box>
      <CreateButton title="Add Question" link="/createquestion"></CreateButton>
    </>
  );
};

export default Review;
