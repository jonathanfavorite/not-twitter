import './App.scss';
import DashboardScreen from './components/specific/Dashboard/DashboardScreen';
import { SignedInUserProvider } from './contexts/SignedInUserDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/specific/Login/LoginScreen';

function App() {
  return (
    <>
    <BrowserRouter>
    <SignedInUserProvider>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      
        
        </SignedInUserProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
