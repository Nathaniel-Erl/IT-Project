import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import CreateButton from "../components/Buttons/CreateButton";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";

const Review = () => {
  const quiz = useSelector((store) => store.questions);
  const subject = quiz && quiz.subject;
  const questions = quiz && quiz.questions;

  return (
    <>
      <NavBar title="Review" />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Box flex={6} padding={2}>
          {questions && questions.length ?
            questions.map((q, index) => {
              const { correctAnswer, incorrectAnswer, question, type } = q;
              return (
                <Question
                  key={index}
                  index={index + 1}
                  total={questions.length}
                  subject={subject}
                  question={question}
                  type={type}
                  correctAnswer={correctAnswer}
                  incorrectAnswer={incorrectAnswer}
                  questionId={q._id}
                  quizId={quiz._id}
                ></Question>
              )
            }): ""}
        </Box>
      </Stack>
      <CreateButton
        title="Add Question"
        link={"/createquestion"}
      ></CreateButton>
    </>
  );
};

export default Review;
