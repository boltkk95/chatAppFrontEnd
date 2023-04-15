import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home'
import LogIn from './features/LogIn/LogIn';
import Chat from './Pages/Chat/Chat'
import ProtectedRoute from './Routes/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
      )
}


export default App;
