export const routes: Record<string, string> = {
  // Public routes
  HOME: '/',
  TERMS_OF_SERVICE: '/content/terms-of-service',
  PRIVACY_POLICY: '/content/privacy-policy',

  // Auth routes but not protected
  SIGN_IN: '/auth/sign-in',
  SIGN_OUT: '/auth/sign-out',
  SIGN_UP: '/auth/sign-up',
  VERIFY_ACCOUNT: '/auth/verify-account',
  FORGOT_PASSWORD: '/auth/forgot-password',

  // Auth routes protected
  ACCOUNT_PROFILE: '/account/profile',
}

// This is list of routes which are not protected. So we don't check for auth.
export const PUBLIC_ROUTES = [
  routes.HOME,
]


