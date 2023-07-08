import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SumsubWebSdk from '@sumsub/websdk-react';
import { useAuth } from 'pages/authentication/auth-forms/AuthProvider';

const OnboardPage = () => {
    const [token, setToken] = useState(null);
    const { user, loading } = useAuth();

    const fetchToken = async () => {
        try {
            const response = await fetch('http://localhost:8000/onboard/token', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                    'X-User-Uid': `${user.uid}`
                }
            });

            const data = await response.json();
            console.log('Onboard token:', data.token);

            setToken(data.token);
        } catch (error) {
            console.error('Failed to fetch Sumsub token:', error);
        }
    };

    useEffect(() => {
        if (!loading) {
            fetchToken();
        }
    }, [loading, user]);

    const accessTokenExpirationHandler = () => {
        // This function will be called when the access token expires
        console.log('Sumsub WebSDK Access Token Expired');
    };

    const errorHandler = (error) => {
        // This function will be called when an error occurs
        console.error('Sumsub WebSDK Error:', error);
    };

    const messageHandler = (message) => {
        // This function will be called with messages from the WebSDK
        console.log('Sumsub WebSDK Message:', message);
    };

    const config = {};

    const options = {};

    return (
        <div>
            <h1>Identity Verification</h1>
            {/* Conditionally render the Sumsub WebSDK */}
            {token ? (
                <SumsubWebSdk
                    accessToken={token}
                    expirationHandler={accessTokenExpirationHandler}
                    config={config}
                    options={options}
                    onMessage={messageHandler}
                    onError={errorHandler}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default OnboardPage;
