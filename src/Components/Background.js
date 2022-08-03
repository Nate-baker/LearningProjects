import InfoBox from "./InfoBox";
export default function Background({ setUser }) {
  return (
    <div className="background">
      <InfoBox setUser={setUser} />
    </div>
  );
}
