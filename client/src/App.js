import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import QuizForm from "./components/QuizForm/QuizForm";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
import Base from "./pages/Base";
import Settings from "./pages/Settings";
>>>>>>> fc0d314ee6d0a9a9b10a3d4c93fa0fd424ce2b14

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/questions" exact element={<Review />} />
        <Route path="/quizform" exact element={<QuizForm />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
<<<<<<< HEAD
        <Route path="/profile" exact element={<Profile />} />
=======
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/" exact element={<Base />} />
>>>>>>> fc0d314ee6d0a9a9b10a3d4c93fa0fd424ce2b14
      </Routes>
    </BrowserRouter>
  );
}

export default App;
