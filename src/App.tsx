import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Submissions from './pages/Submissions';

import Layout from './components/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/submissions" />} />
        
        <Route element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route path="/submissions" element={<Submissions />} />
          
        </Route>
        
        <Route path="*" element={<Navigate to="/submissions" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;