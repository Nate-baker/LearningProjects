import AccountInfo from "./AccountInfo";
export default function InfoBox({ setUser }) {
  return (
    <div className="info-box">
      <AccountInfo setUser={setUser} />
    </div>
  );
}
