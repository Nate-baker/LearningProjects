import React from "react";
import { useState } from "react";
import { signIn, createUser } from "./Auth";

export default function AccountInfo({ setUser }) {
  const [userData, setUserData] = useState({});
  const [inputType, setInputType] = useState("createAccount");

  function changeUserData(el) {
    setUserData({
      ...userData,
      [el.target.id]: el.target.value
    });
  }

  function setLoginPage() {
    if (inputType === "createAccount") setInputType("login");
    else setInputType("createAccount");
  }

  function signUserIn() {
    signIn(userData, setUser);
  }
  function createNewUser() {
    createUser(userData, setUser);
  }

  return (
    <div>
      {inputType === "createAccount" ? (
        <h1 className="title">Create Account</h1>
      ) : (
        <h1 className="title">Login</h1>
      )}
      <div className="account-info">
        {inputType === "createAccount" ? (
          <input
            id="username"
            type="text"
            placeholder="username"
            onChange={changeUserData}
          ></input>
        ) : (
          ""
        )}
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
        {inputType === "createAccount" ? (
          <div>
            <button id="create-account" onClick={createNewUser}>
              Create Account
            </button>
            <button id="login-account" onClick={setLoginPage}>
              Already have an account? Login Here
            </button>
          </div>
        ) : (
          <div>
            <button id="login-account" onClick={signUserIn}>
              Log In
            </button>
            <button id="create-account" onClick={setLoginPage}>
              Need to create account? Click here!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
