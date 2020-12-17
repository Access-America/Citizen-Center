/* eslint-disable */
import * as msal from '@azure/msal-browser'
import { msalConfig, loginRequest } from './authConfig'
import { b2cPolicies } from './policies'

// Create the main auth instance
// configuration parameters are located at authConfig.js
const auth = new msal.PublicClientApplication(msalConfig)

let accountId = ''
let username = ''

export function selectAccount() {
    /**
     * See here for more info on account retrieval:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */

    const currentAccounts = auth.getAllAccounts()

    if (!currentAccounts || currentAccounts.length < 1) {
    } else if (currentAccounts.length > 1) {
        // Add your account choosing logic here
        console.warn('Multiple accounts detected.')
    } else if (currentAccounts.length === 1) {
        accountId = currentAccounts[0].homeAccountId
        username = currentAccounts[0].username
    }
}

selectAccount()

function handleResponse(response) {
    console.log(response)
    /**
     * To see the full list of response object properties, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#response
     */

    if (response !== null) {
        accountId = response.account.homeAccountId
        username = response.account.username
        console.log(
            `Welcome, ${response.idTokenClaims.given_name}. Your token is ${response.idToken}`
        )
    } else {
        selectAccount()
    }
}

export function signIn() {
    /**
     * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
     */

    auth.loginPopup(loginRequest)
        .then(handleResponse)
        .catch((error) => {
            console.error(error)

            // Error handling
            if (error.errorMessage) {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
                if (error.errorMessage.includes('AADB2C90118')) {
                    auth.loginPopup(
                        b2cPolicies.authorities.forgotPassword
                    ).then((response) => {
                        console.log(response)
                        window.alert(
                            'Password has been reset successfully. \nPlease sign-in with your new password.'
                        )
                    })
                }
            }
        })
}

export function signOut() {
    /**
     * You can pass a custom request object below. This will override the initial configuration. For more information, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md#request
     */

    // Choose which account to logout from by passing a username.
    const logoutRequest = {
        account: auth.getAccountByHomeId(accountId),
    }

    auth.logout(logoutRequest)
}

export function getTokenPopup(request) {
    /**
     * See here for more information on account retrieval:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */

    request.account = auth.getAccountByHomeId(accountId)

    return auth.acquireTokenSilent(request).catch((error) => {
        console.warn(error)
        console.warn(
            'silent token acquisition fails. acquiring token using popup'
        )
        if (error instanceof msal.InteractionRequiredAuthError) {
            // fallback to interaction when silent call fails
            return auth
                .acquireTokenPopup(request)
                .then((response) => {
                    console.log(response)
                    return response
                })
                .catch((error) => {
                    console.error(error)
                })
        } else {
            console.warn(error)
        }
    })
}

export function passTokenToApi() {
    getTokenPopup(tokenRequest).then((response) => {
        if (response) {
            console.log('access_token acquired at: ' + new Date().toString())
            try {
                callApi(apiConfig.webApi, response.accessToken)
            } catch (error) {
                console.warn(error)
            }
        }
    })
}

export function editProfile() {
    auth.loginPopup(b2cPolicies.authorities.editProfile).then((response) => {
        console.log(response)
    })
}
