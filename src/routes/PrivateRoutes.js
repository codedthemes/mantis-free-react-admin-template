import { Navigate } from 'react-router-dom';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    console.log(currentUser);

    return currentUser ? children : <Navigate to="/login" replace />;
}
