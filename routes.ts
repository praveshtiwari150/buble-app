/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [

]

export const authRoutes = [
    "/sign-in",
    "/sign-up"
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /
 * @type {string[]}
 */


/**
 * The prefix for api authentication routes
 * Routes that start with this prefix are used for api authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT ="/"
