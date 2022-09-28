import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/createquestion" exact element={<QuestionType />} />
        <Route path="/api/quiz/:quizId" exact element={<Review />} />
        <Route path="/api/signup" exact element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="api/quiz" exact element={<Dashboard />} />
        <Route path="api/settings" exact element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
