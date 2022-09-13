import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import QuizForm from "./components/QuizForm/QuizForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/questions" exact element={<Review/>} />
        <Route path="/" exact element={<QuizForm/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
