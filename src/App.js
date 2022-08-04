import React from "react";
import { Component } from "react";
import "./styles.css";
import CreateAccountPage from "./Pages/CreateAccountPage";
import LoginPage from "./Pages/LoginPage";

export default function App() {
  const [user, setUser] = React.useState({});

  return (
    <div className="App">
      {user && user.username ? (
        <LoginPage user={user} />
      ) : (
        <CreateAccountPage setUser={setUser} />
      )}
    </div>
  );
}
