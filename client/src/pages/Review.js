import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import CreateButton from "../components/Buttons/CreateButton";
import { useDispatch } from "react-redux";
import { getAllQuestion } from "../actions/questions";
import Questions from "../components/Questions/Questions";

const Review = () => {
  const [question, setQuestion] = useState(false);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestion());
  }, [dispatch]);

  return (
    <>
      <NavBar title="Review" />
      <Box flex={4} padding={2}>
        <Questions></Questions>
      </Box>
      <CreateButton title="Add Question" link="/createquestion"></CreateButton>
    </>
  );
};

export default Review;
