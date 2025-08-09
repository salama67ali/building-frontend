import { useAuth } from '../lib/auth-context';

export default function Header() {
  const { token, logout } = useAuth();

  return (
    <header>
      <h1>Building Permissions System</h1>
      {token && <button onClick={logout}>Logout</button>}
    </header>
  );
}
