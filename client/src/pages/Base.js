import { Button } from "@mui/material";
import React from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import QuizBlock from "../components/QuizBlock/QuizBlock";
import QuizBlockButton from "../components/QuizBlockButton/QuizBlockButton";
import { Link } from "react-router-dom";

/**
 *
 * @returns laning page just here for testing placeholder
 */
function Base() {
  return (
    <>
      <NavBar></NavBar>

      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/questions"
      >
        Review
      </Button>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/createquestion"
      >
        Question type
      </Button>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/quizform"
      >
        Quiz form
      </Button>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/signup"
      >
        Sign up
      </Button>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/dashboard"
      >
        Dashboard
      </Button>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: "#26ABFF",
        }}
        component={Link}
        to="/profile"
      >
        Profile
      </Button>
    </>
  );
}

export default Base;
