// components/ProtectedComponent.tsx
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to sign-in page if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // Redirect to login page
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>; // You can show a loading spinner while session is loading
  }

  if (status === "authenticated") {
    return <>{children}</>; // Render the children (protected component) if authenticated
  }

  return null; // If unauthenticated, return nothing (or redirect)
};

export default ProtectedComponent;
