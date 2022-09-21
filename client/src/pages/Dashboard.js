import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateButton from "../components/Buttons/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import DashBoardHeader from "../components/DashBoardHeader/DashBoardHeader";
import QuizForm from "../components/QuizForm/QuizForm";
import { StyledModal } from "../components/TypeBox/styles";
import { useDispatch } from 'react-redux'
import { filterQuiz, getQuizzes } from "../actions/quizzes";
import Quizzes from "../components/Quizzes/Quizzes";

function Dashboard() {
  const [openQuizForm, setOpenQuizForm] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState(null);
   const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchValue) {
      dispatch(filterQuiz(searchValue))
    } else {
      dispatch(getQuizzes());
    }
  }, [currentQuizId, searchValue, dispatch])
  
  return (
    <>
      <NavBar title="Dashboard" />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding={{ xs: 5, md: 8 }}
        gap={3}
      >
        {/* title and search bar */}
        <DashBoardHeader searchValue={ searchValue } setSearchValue={setSearchValue} />
        {/* to format quizes */}
        <Quizzes
          currentQuizId={currentQuizId}
          setCurrentQuizId={setCurrentQuizId}
          setOpenQuizForm={setOpenQuizForm}
        />
      </Box>

      <Button onClick={() => setOpenQuizForm(true)}>
        <CreateButton title="Add Quiz" link=""></CreateButton>
      </Button>

      <StyledModal
        open={openQuizForm}
        onClose={() => setOpenQuizForm(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <QuizForm
          currentQuizId={currentQuizId}
          setCurrentQuizId={setCurrentQuizId}
          setOpenQuizForm={setOpenQuizForm}
        />
      </StyledModal>
    </>
  );
}

export default Dashboard;
