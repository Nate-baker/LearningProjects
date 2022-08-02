export default function AccountInfo() {
  return (
    <div className="account-info">
      <input type="text" placeholder="username"></input>
      <input htmlFor="email" type="email" placeholder="email"></input>
      <input type="password" placeholder="password"></input>
      <button>Create Account</button>
    </div>
  );
}
