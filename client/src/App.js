import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import QuizForm from "./components/QuizForm/QuizForm";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/questions" exact element={<Review />} />
        <Route path="/quizform" exact element={<QuizForm />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" exact element={<Dashboard />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
