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
        description={`The beasts ridiculed him: But you humans were born with empty hands and will pass away with nothing. Oh human, you want to pursue freedom but you also need to abide by your nature, you should not indulge in wild fantasies.

        Ren Zu said: I want freedom and to get rid of fate’s shackles. I will breathe freely and live on forever, I want eternal life!
        
        The fishes rebutted: But you humans are destined to have no relation with eternal life, you will die of old age and illnesses. Oh human, you want to pursue freedom but you also need to abide by your nature, you should not indulge in wild fantasies.
        
        Ren Zu was puzzled.
        
        Ren Zu was disgruntled.
        
        Ren Zu was irritated.
        
        Ren Zu became insane!
        
        How can you have such thoughts?
        
        Why can’t I have the same thoughts?
        
        Why can’t a human be together forever with their loved ones?
        
        Why can’t a human live life without worries and have endless wealth?
        
        Why can’t a human have eternal life?
        
        Because fate does not allow it?
        
        Because it does not allow, therefore I cannot do it?! I cannot even think about it?!
        
        On what basis?
        
        On what damned basis?
        
        On what basis am I not allowed to think about it?!
        
        On what basis is eternal life forbidden?!
        
        If such thoughts turn me insane.
        
        Then let me become a lunatic!
        
        If such pursuit makes me demonic.
        
        Then let me become a demon!!
        
        Fang Yuan looked at fate Gu and sneered coldly.
        
        He clenched his fist lightly.
        
        Crack.
        
        A soft sound echoed.
        
        Fate Gu was directly crushed into pieces.
        
        Rank nine fate Gu —
        
        Destroyed!`}
      ></QuizBlock>
      <Question></Question>
    </>
  );
}

export default Dashboard;
