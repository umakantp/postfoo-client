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
  PORTFOLIO_DETAIL: '/portfolios/[portfolioId]',
  PORTFOLIO_DETAIL_FUNDS: '/portfolios/[portfolioId]/funds',
  PORTFOLIO_DETAIL_STOCKS: '/portfolios/[portfolioId]/stocks',
  PORTFOLIO_DETAIL_SCHEMES: '/portfolios/[portfolioId]/schemes',
  PORTFOLIO_DETAIL_INSURANCES: '/portfolios/[portfolioId]/insurances',
  PORTFOLIO_DETAIL_RE: '/portfolios/[portfolioId]/real-estates',
  PORTFOLIO_DETAIL_PERSONAL: '/portfolios/[portfolioId]/personal',
  PORTFOLIO_CREATE: '/portfolios/create',
}

// This is list of routes which are not protected. So we don't check for auth.
export const PUBLIC_ROUTES = [
  routes.HOME,
]

export type Route = keyof typeof routes

// Default names for the honeypot fields.
// Same as in, postfoo-server:src/utils/honeypot.ts.
export const HONEYPOT_DEFAULT_NAME_FIELD_NAME = 'name__confirm'
export const HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME = 'from__confirm'
