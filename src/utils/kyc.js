import SNSMobileSDK from '@sumsub/react-native-mobilesdk-module';

// front end docs: https://developers.sumsub.com/msdk/plugins/react-native.html#dismission
// back end docs: https://developers.sumsub.com/api-reference/#access-tokens-for-sdks
// https://github.com/SumSubstance/AppTokenUsageExamples/tree/master/Python

// 1. user login --> get firebase uid (and access token, unrelated)
// 2. send the uid to backend
// 3. on backend, send the uid to sumsub and get a sumsub token
// 4. send the sumsub token to the ui as a response
// 5. on the UI, send the user to sumsub website (or embed it?)
// 6. periodically query sumsub to get the application status

let launchSNSMobileSDK = () => {

    // From your backend get an access token for the applicant to be verified.
    // The token must be generated with `levelName` and `userId`,
    // where `levelName` is the name of a level configured in your dashboard.
    //
    // The sdk will work in the production or in the sandbox environment
    // depend on which one the `accessToken` has been generated on.
    //
    let accessToken = "your_access_token";

    let snsMobileSDK = SNSMobileSDK.init(accessToken, () => {
        // this is a token expiration handler, will be called if the provided token is invalid or got expired
        // call your backend to fetch a new access token (this is just an example)
        return fetch('http://example.org/', {
            method: 'GET',
        }).then(resp => {
            // return a fresh token from here
            return 'new_access_token'
        })
        })
        .withHandlers({ // Optional callbacks you can use to get notified of the corresponding events
        onStatusChanged: (event) => {
            console.log("onStatusChanged: [" + event.prevStatus + "] => [" + event.newStatus + "]");
        },
        onLog: (event) => {
            console.log("onLog: [Idensic] " + event.message);
        }
        })
        .withDebug(true)
        .withLocale('en') // Optional, for cases when you need to override the system locale
        .build();

    snsMobileSDK.launch().then(result => {
        // example `result` --> {
        //     "success": false,
        //     "status": "Failed",
        //     "errorType": "Unauthorized",
        //     "errorMsg": "Unauthorized access with accessToken=[your access token]"
        //   }
        console.log("SumSub SDK State: " + JSON.stringify(result))
    }).catch(err => {
        console.log("SumSub SDK Error: " + JSON.stringify(err))
    });
}

<Button onPress={launchSNSMobileSDK} title="Launch SumSub SDK" />
// Normally the user closes the sdk himself, but if you need to do it programmatically, here is the helper:
snsMobileSDK.dismiss() 
snsMobileSDK.withStrings({
    "sns_oops_network_title": "Oops! Seems like the network is down.",
    "sns_oops_network_html": "Please check your internet connection and try again.",
    "sns_oops_action_retry": "Try again",
})
snsMobileSDK.withHandlers({
    // possible events: https://developers.sumsub.com/msdk/plugins/react-native.html#events
    onEvent: (event) => {
        // {
        //     "eventType": "StepInitiated",
        //     "payload": {
        //         "idDocSetType": "IDENTITY"
        //     }
        // }
        console.log("onEvent: " + JSON.stringify(event));
    }
})