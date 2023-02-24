import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import ChatPage from './views/ChatPage';
import TempSignOut from './views/TempSignOut';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={ <LoginPage /> } />
          <Route exact path="/" element={ <ChatPage /> } />
          <Route exact path="/signOut" element={ <TempSignOut /> } />
          <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
