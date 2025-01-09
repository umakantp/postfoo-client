export const routes = {
  // Public routes
  HOME: '/',
  TERMS_OF_SERVICE: '/content/terms-of-service',
  PRIVACY_POLICY: '/content/privacy-policy',
  COOKIE_POLICY: '/content/cookie-policy',
  PRICING: '/pricing',

  // Auth routes but not protected
  SIGN_IN: '/auth/sign-in',
  SIGN_OUT: '/auth/sign-out',
  SIGN_UP: '/auth/sign-up',
  VERIFY_ACCOUNT: '/auth/verify-account',
  FORGOT_PASSWORD: '/auth/forgot-password',

  // Auth routes protected
  ACCOUNT_PROFILE: '/account/profile',
  ACCOUNT_SUBSCRIPTION: '/account/subscription',
  // Generally a list route, but we should default/first portfolio instead.
  PORTFOLIOS: '/portfolios',
  // Same as above, but specific to a portfolio.
  PORTFOLIO_DETAIL: '/portfolios/:portfolioId',
  PORTFOLIO_CREATE: '/portfolios/create',
}

// This is list of routes which are not protected. So we don't check for auth.
export const PUBLIC_ROUTES = [
  routes.HOME,
]

export type Route = keyof typeof routes

