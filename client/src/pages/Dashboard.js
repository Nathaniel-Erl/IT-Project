import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import QuizBlock from "../components/QuizBlock/QuizBlock";
import DashBoardHeader from "../components/DashBoardHeader/DashBoardHeader";
import QuizForm from "../components/QuizForm/QuizForm";
import { StyledModal } from "../components/TypeBox/styles";

function Dashboard() {
  const [openQuizForm, setOpenQuizForm] = useState(false);
  const text1 = "Hong Ting"
  const text2 = `Ren Zu was puzzled.Ren Zu was disgruntled.
  Ren Zu was irritated.Ren Zu became insane!How can you have such thoughts?
  Why can’t I have the same thoughts?`;

  const dummy = ["1", "2", "3", "4"];
  
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
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {dummy.map(() => (
            <Grid item xs={12} sm={4} md={4}>
              <QuizBlock
                title={text1}
                numQuestions="2"
                description={text2}
              ></QuizBlock>
            </Grid>
          ))}
        </Grid>
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
