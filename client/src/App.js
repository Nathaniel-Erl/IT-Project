import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import QuizForm from "./components/QuizForm/QuizForm";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Base from "./pages/Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/questions" exact element={<Review />} />
        <Route path="/quizform" exact element={<QuizForm />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/" exact element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
