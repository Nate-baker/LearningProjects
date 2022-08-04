export default function LoginPage({ user }) {
  return (
    <div>
      <h1>{JSON.stringify(user, null, 2)}</h1>
    </div>
  );
}
