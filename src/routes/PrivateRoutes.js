import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

export default function PrivateRoute() {
    const { currentUser } = useAuth();

    return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
}
