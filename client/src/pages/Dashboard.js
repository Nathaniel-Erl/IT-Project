import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CreateButton from "../components/Buttons/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import DashBoardHeader from "../components/DashBoardHeader/DashBoardHeader";
import QuizForm from "../components/QuizForm/QuizForm";
import { StyledModal } from "../components/TypeBox/styles";
import { useDispatch } from 'react-redux'
import { getQuizzes } from "../actions/quizzes";
import Quizzes from "../components/Quizzes/Quizzes";

function Dashboard() {
  const [openQuizForm, setOpenQuizForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuizzes())
  }, [dispatch])
  
  
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
        <DashBoardHeader />
        {/* to format quizes */}
        <Quizzes />
        
        <Button onClick={() => setOpenQuizForm(true)}>
          <CreateButton title="Add Quiz" link=""></CreateButton>
        </Button>
      </Box>

      <StyledModal
        open={openQuizForm}
        onClose={() => setOpenQuizForm(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <QuizForm setOpen={ setOpenQuizForm } />
      </StyledModal>
    </>
  );
}

export default Dashboard;
