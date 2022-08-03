import AccountInfo from "./AccountInfo";
export default function InfoBox({ setUser }) {
  return (
    <div className="info-box">
      <h1 className="title">Create Account</h1>
      <AccountInfo setUser={setUser} />
    </div>
  );
}
