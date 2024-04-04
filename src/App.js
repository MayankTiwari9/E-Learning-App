// App.js
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import SignUpForm from "./Components/Authentication/SignUpForm";
import SignInForm from "./Components/Authentication/SignInForm";
import TokenContext from "./store/token-context";
import Home from "./Components/Home/Home";

function App() {
  const tokenContext = useContext(TokenContext);
  const isLoggedIn = tokenContext.isLoggedIn;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
          <Route path="/auth" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
