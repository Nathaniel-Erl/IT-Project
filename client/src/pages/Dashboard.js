import React from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import Question from "../components/Question/Question";
import QuizBlock from "../components/QuizBlock/QuizBlock";

function Dashboard() {
  return (
    <>
      <NavBar title="Dashboard" />
      <CreateButton link="/createquestion" title="Create Quiz"></CreateButton>
      <QuizBlock></QuizBlock>
      <Question></Question>
    </>
  );
}

export default Dashboard;
