import './App.css';
import { Login } from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainRoute from './routes/mainRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
