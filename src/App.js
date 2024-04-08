import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import SignUpForm from "./Components/Authentication/SignUpForm";
import SignInForm from "./Components/Authentication/SignInForm";
import Home from "./Components/Home/Home";
import Test from "./Components/Tests/Test";
import MockTest from "./Components/Tests/MockTest";

function App() {
  localStorage.setItem("JavaScore", 0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/test/:language" element={<MockTest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
