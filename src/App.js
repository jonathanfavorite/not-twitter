import "./App.scss";
import react, { useContext, useEffect, useState } from "react";
import DashboardScreen from "./components/specific/Dashboard/DashboardScreen";
import { SignedInUserProvider } from "./contexts/SignedInUserDetailsContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/specific/Login/LoginScreen";
import SignInWrapper from "./auth/SignInWrapper";
import { SignedInUserContext } from "./contexts/SignedInUserDetailsContext";
import Loading from "./components/global/Loading/Loading";
import LoginForm from "./components/specific/Login/login-screen/login-form/LoginForm";
import LogoutFunction from "./auth/LogoutFunction";


const App = () => {
  const signedInContext = useContext(SignedInUserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(signedInContext.user);

  return (
    <>
     <BrowserRouter>
          <Routes>
           <Route
              path="/"
              element={<>
                <SignInWrapper>
                  <DashboardScreen />
                </SignInWrapper>
                </>
              }
            />
            <Route path="/login/form" element={<LoginForm />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/logout" element={<LogoutFunction />} />
            <Route path='/Dashboard' element={<DashboardScreen />} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default function AppWrapper() {

  useEffect(() => {

  },[]);

  return (
<>

    <SignedInUserProvider>
      <App />
      </SignedInUserProvider>
</>
      );
      
}
