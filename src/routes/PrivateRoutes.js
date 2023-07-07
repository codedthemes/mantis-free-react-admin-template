import { Navigate } from 'react-router-dom';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    const userId = user ? user.uid : null;

    // Show a loading indicator while waiting for the user
    if (loading) {
        return <div>Loading...</div>; // TODO: Replace this with your preferred loading indicator
    }

    // If the user is not logged in, redirect to the login page
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Once loaded, either show the children or navigate to login
    return children;
}
