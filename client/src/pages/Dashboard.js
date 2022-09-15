import { Box } from "@mui/system";
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
  return (
    <>
      <NavBar title="Dashboard" />
      <CreateButton link="/createquestion" title="Create Quiz"></CreateButton>
      <Box>
        <Box sx={{ display: "flex" }}>
          <QuizBlock
            title={text1}
            numQuestions="2"
            description={text2}
          ></QuizBlock>
          <QuizBlock
            title={text1}
            numQuestions="2"
            description={text2}
          ></QuizBlock>
          <QuizBlock
            title={text1}
            numQuestions="2"
            description={text2}
          ></QuizBlock>
        </Box>
        <ProfileBlock></ProfileBlock>
      </Box>
    </>
  );
}

export default Dashboard;
