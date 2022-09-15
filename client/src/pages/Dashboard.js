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
      <QuizBlock
        title={"Physics"}
        numQuestions="2"
        description={`His actions simply came from his inner heart. 
        I am always me. I am Feng Jiu Ge. For all eternity!`}
      ></QuizBlock>
      <QuizBlock
        title={"Physics"}
        numQuestions="2"
        description={`“Hong Ting, master taught you, Heavenly Court cultivated you, 
        what you enjoyed were the fruits of the dedication and sacrifice of our 
        predecessors from ancient times until now!”

“So, come back, Hong Ting!”

“Follow the arrangements of Fate.”

Red Lotus: “…”`}
      ></QuizBlock>
      <QuizBlock
        title={`“I want to believe that in the future, I will not be alone, a group 
        of people will attempt to destroy Fate.”

“Master, you cannot stop it, Heavenly Court cannot stop it, because you cannot stop 
people from thinking with their free will!”`}
        numQuestions="2"
        description={"hello!!"}
      ></QuizBlock>
      <Question></Question>
    </>
  );
}

export default Dashboard;
