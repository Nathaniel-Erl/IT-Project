import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import CreateButton from "../components/Buttons/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Review = () => {
  const { quizId, questions } = useSelector((store) => store.questions);

  const dispatch = useDispatch();

  return (
    <>
      <NavBar title="Review" />
      {questions && questions.length ? (
        <Box flex={4} padding={2}>
          {questions.map((question) => {
            return <Question question={question}></Question>;
          })}
        </Box>
      ) : (
        ""
      )}
      <CreateButton
        title="Add Question"
        link={`/createquestion/${quizId}`}
      ></CreateButton>
    </>
  );
};

export default Review;
