import QuestionType from './pages/QuestionType'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Navigate,
} from 'react-router-dom'
import Review from './pages/Review'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/createquestion' exact element={<QuestionType />} />
        <Route path='/quiz/:quizId' exact element={<Review />} />
        <Route
          path='/createquestion'
          exact
          element={
            <PrivateRoute>
              <QuestionType />
            </PrivateRoute>
          }
        />
        <Route
          path='/quiz/:quizId'
          exact
          element={
            <PrivateRoute>
              <Review />
            </PrivateRoute>
          }
        />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/quiz' exact element={<Dashboard />} />
        <Route path='/settings' exact element={<Settings />} />
        <Route
          path='/quiz'
          exact
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/settings'
          exact
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

// Check if user is logged-in
// If not, redirect to "/login"
const PrivateRoute = ({ children }) => {
  const authed = localStorage.getItem('profile')

  return authed ? children : <Navigate to='/' />
}

// Check if user is logged-in
// If not, redirect to "/login"
const PrivateRoute = ({ children }) => {
  const authed = localStorage.getItem('profile')

  return authed ? children : <Navigate to='/' />
}

export default App
