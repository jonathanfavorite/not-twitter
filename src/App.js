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

const App = () => {
  const signedInContext = useContext(SignedInUserContext);

  // async function GetUserDetailsFromAPI() {
  //   const response = await fetch("http://127.0.0.1/not_twitter_api/api/user/?userID=57")
  //   .then(response => response.json())
  //   .then(data => {
  //     signedInContext.SetUser(data.response);
  //     console.log(signedInContext.user);
  //     signedInContext.handleSetUserLoaded(false);
  //   })
  //   .catch(err => {
  //     console.log(err); 
  //   });
  // }

  // function clearUsers() {
  //   signedInContext.SetUser(null);
  //   signedInContext.handleSetUserLoaded(false);
  // }

  // useEffect(() => {
  //   if(!signedInContext.user)
  //   {
  //     console.log("NOT LOGGED"); 
  //     GetUserDetailsFromAPI();
     
  //   }
  //   else
  //   {
  //     console.log("LOGGED IN");
  //     console.log(signedInContext.user);
  //     console.log(signedInContext.userLoaded);
  //   }
  // },[signedInContext.user]);

  return (
    <>
    
     <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <SignInWrapper>
                  {!signedInContext.userLoaded && <Loading />}
                  {signedInContext.userLoaded && <DashboardScreen />}
                </SignInWrapper>
              }
            />
            <Route path="/login/form" element={<LoginForm />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default function AppWrapper() {
  return (
<>

    <SignedInUserProvider>
      <App />
      </SignedInUserProvider>
</>
      );
      
}
