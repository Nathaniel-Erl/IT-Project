import QuestionType from "./pages/QuestionType";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createquestion" exact element={<QuestionType />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
