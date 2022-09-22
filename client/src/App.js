import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import useImage from "./hooks/useImage";

function App() {
  const key = process.env.REACT_APP_ACCESS_KEY;
  // handle user not providing image
  const { response } = useImage(
    `https://api.unsplash.com/search/photos?page=1&query=quiz&client_id=${key}`
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
        <Route path="/questions" exact element={<Review />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" exact element={<Dashboard images={response} />} />
        <Route path="/settings" exact element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
