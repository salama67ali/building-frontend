import { AuthProvider } from '../../lib/auth-context';

export function TanStackRootProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
