import React from "react";
import NavBar from "../components/NavBar/NavBar";
import QuizBlockButton from "../components/QuizBlockButton/QuizBlockButton";
import * as colors from "../static/Colors.js";

/**
 *
 * @returns laning page just here for testing placeholder
 */
function Base() {
  return (
    <>
      <NavBar></NavBar>
      <QuizBlockButton
        text={"Review"}
        link={"/questions"}
        color={colors.BLUE}
      ></QuizBlockButton>
      <QuizBlockButton
        text={"QuestionType"}
        link={"/createquestion"}
        color={colors.BLUE}
      ></QuizBlockButton>
      <QuizBlockButton
        text={"QuizForm"}
        link={"/quizform"}
        color={colors.BLUE}
      ></QuizBlockButton>
      <QuizBlockButton
        text={"Signup"}
        link={"/signup"}
        color={colors.BLUE}
      ></QuizBlockButton>
      <QuizBlockButton
        text={"Dashboard"}
        link={"/dashboard"}
        color={colors.BLUE}
      ></QuizBlockButton>
      <QuizBlockButton
        text={"Settings"}
        link={"/settings"}
        color={colors.BLUE}
      ></QuizBlockButton>
    </>
  );
}

export default Base;
