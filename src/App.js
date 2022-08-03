import React from "react";
import { Component } from "react";
import "./styles.css";
import CreateAccountPage from "./Components/Pages/CreateAccountPage";

export default function App() {
  const [user, setUser] = React.useState({});

  return (
    <div className="App">
      {user && user.username ? <h1>Logged In</h1> : <CreateAccountPage />}
    </div>
  );
}
