import React from "react";
import { useState } from "react";
import { signIn, createUser } from "./Auth";

export default function AccountInfo() {
  const [userData, setUserData] = useState({});

  function changeUserData(el) {
    setUserData({
      ...userData,
      [el.target.id]: el.target.value
    });
  }

  function signUserIn() {
    signIn(userData);
  }
  function createNewUser() {
    createUser(userData);
  }

  return (
    <div className="account-info">
      <input
        id="username"
        type="text"
        placeholder="username"
        onChange={changeUserData}
      ></input>
      <input
        id="email"
        type="email"
        placeholder="email"
        onChange={changeUserData}
      ></input>
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={changeUserData}
      ></input>
      <button id="create-account" onClick={createNewUser}>
        Create Account
      </button>
      <button id="login-account" onClick={signUserIn}>
        Already have an account? Login Here
      </button>
    </div>
  );
}
