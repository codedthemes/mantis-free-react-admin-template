import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const CheckPage = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
        async function checkStatus() {
            // Check if the user is loaded
            if (loading) {
                return; // Don't do anything if the user is not yet loaded
            }

            if (!user) {
                // redirect to login page if user is not logged in
                navigate('/login', { replace: true });
            } else {
                const response = await fetch('http://localhost:8000/onboard/status', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`,
                        'X-User-Uid': `${user.uid}`
                    }
                });

                const data = await response.json();

                if (data && data['reviewStatus'] && data['reviewStatus'] !== 'init') {
                    // if the user is already onboarded, redirect to the homepage
                    navigate('/', { replace: true });
                } else {
                    // else, redirect to the onboard page
                    navigate('/onboard', { replace: true });
                }
            }
        }

        checkStatus();
    }, [loading, user, navigate]); // Add loading, user, and navigate as dependencies

    return <div>{loading ? <Loader /> : <h1>Checking onboarding status...</h1>}</div>;
};

export default CheckPage;
