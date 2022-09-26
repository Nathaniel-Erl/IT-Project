import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import CreateButton from "../components/Buttons/CreateButton";
import { useSelector } from "react-redux";

const Review = () => {
  const {quizId, questions} = useSelector(store => store.questions)
  
  return (
      <> 
        <NavBar title="Review" />
        {
          (questions && questions.length) ? (
            <Box flex={4} padding={2}>
              {
                questions.map(question => {
                  return <Question question={question}></Question>;
                })
              }
            </Box> 
          ) : ""
        }
        <CreateButton
          title="Add Question"
       ></CreateButton>
      </>) 
};

export default Review;
