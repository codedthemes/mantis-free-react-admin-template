import { Navigate } from 'react-router-dom';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    // Show a loading indicator while waiting for the user
    if (loading) {
        return <div>Loading...</div>; // TODO: Replace this with your preferred loading indicator
    }

    // Once loaded, either show the children or navigate to login
    return user ? children : <Navigate to="/login" replace />;
}
