export default function AccountInfo() {
  return (
    <div className="account-info">
      <input type="text" placeholder="username"></input>
      <input htmlFor="email" type="email" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <button id="create-account">Create Account</button>
      <button id="login-account">Already have an account? Login Here</button>
    </div>
  );
}
