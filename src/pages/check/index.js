import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const CheckPage = () => {
    const navigate = useNavigate();
    const { user, loading } = useAuth();

    useEffect(() => {
        async function checkStatus() {
            // Show a loading indicator while waiting for the user
            if (loading) {
                return <div>Loading...</div>; // TODO: Replace this with your preferred loading indicator
            }

            if (!user) {
                // redirect to login page if user is not logged in
                navigate('/login', { replace: true });
            } else {
                const response = await fetch('/onboard/status', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${user.token}`
                    }
                });

                const { data } = await response.json();

                if (data.onboarded) {
                    // if the user is already onboarded, redirect to the homepage
                    navigate('/', { replace: true });
                } else {
                    // else, redirect to the onboard page
                    navigate('/onboard', { replace: true });
                }
            }
        }

        checkStatus();
    }, [firebase, history]);

    return (
        <div>
            <h1>Checking onboarding status...</h1>
            <Loader />
        </div>
    );
};

export default CheckPage;
