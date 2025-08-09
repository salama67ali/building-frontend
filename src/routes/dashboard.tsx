import { useAuth } from '../lib/auth-context';

export default function Dashboard() {
  const { token } = useAuth();

  if (!token) {
    return <div>Please login to access the dashboard.</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Your dashboard content */}
    </div>
  );
}
