import { Grid, Input } from "@mui/material";
import React from "react";
import CreateButton from "../components/CreateButton/CreateButton";
import NavBar from "../components/NavBar/NavBar";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import QuizBlock from "../components/QuizBlock/QuizBlock";

function Dashboard() {
  const text1 = `“Hong Ting, master taught you, Heavenly Court cultivated you, what you enjoyed were the fruits of the 
  dedication and sacrifice of our predecessors from ancient times until now!" “So, come back, Hong Ting!” “Follow the arrangements of Fate.”
  Red Lotus: “…”`;
  const text2 = `Ren Zu was puzzled.Ren Zu was disgruntled.
  Ren Zu was irritated.Ren Zu became insane!How can you have such thoughts?Why can’t I have the same thoughts?Why can’t 
  a human be together forever with their loved ones?Why can’t a human live life without worries and have endless wealth? 
  Why can’t a human have eternal life?`;
  const dummy = ["1", "2", "3", "4"];
  return (
    <>
      <NavBar title="Dashboard" />
      <CreateButton link="/createquestion" title="Create Quiz"></CreateButton>
      {/* contains everything */}
      <Grid container>
        {/* contains quizes */}
        <Grid item xs={9}>
          <Grid container>
            <Grid item>Your Quizzes</Grid>
            <Grid item>
              <Input></Input>
            </Grid>
          </Grid>
          {/* to format quizes */}
          <Grid container>
            {dummy.map((dummy) => (
              <Grid item xs={4}>
                <QuizBlock
                  title={text1}
                  numQuestions="2"
                  description={text2}
                ></QuizBlock>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Profile block */}
        <Grid item xs={3}>
          <ProfileBlock></ProfileBlock>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
