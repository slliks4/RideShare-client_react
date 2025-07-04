# Authentication Module Documentation

This document describes the design, implementation, and future roadmap for the authentication system.

---

## Overview

The Auth module centralizes all user authentication logic in one place. It consists of:

* AuthProvider & Context: React Context + Reducer that holds global auth state and actions.
* useAuth Hook: Consumer hook exposing login, logout, and token refresh methods.
* Extensibility: Designed to scale to additional features (e.g. sign‑up flows, OAuth2, third‑party providers).

This separation keeps code lean in component files and moves longer explanations here.

---

## Components

### 1. AuthProvider

* Role: Wraps the app, provides auth state and methods via Context.
* Key responsibilities:

  * Initialize state (`isAuthenticated`, `token`, `roles`, `permissions`).
  * Perform auto‑login on mount by attempting token refresh.
  * Expose actions: `login()`, `logout()`, `verifyOrRefreshToken()`.
  * Maintain UI flags: `isLoading`, `error`.

### 2. authReducer

* Purpose: Manage transitions for login, refresh, and logout in a single reducer.
* Actions:

  * LOGIN: Set `isAuthenticated` to `true` and store new access token, roles, permissions.
  * REFRESH: Update access token without affecting roles/permissions.
  * LOGOUT: Clear all auth data.

### 3. Auth Context & `useAuthContext`

* Provides global access to auth state and dispatch.
* `useAuthContext` warns if consumed outside of `AuthProvider` and throws an error.

### 4. useAuth Hook

* Role: Simplified consumer interface.
* Exposes:

  * State: `isAuthenticated`, `token`, `roles`, `permissions`, `isLoading`, `error`.
  * Methods: `login(credentials)`, `logout()`, `verifyOrRefreshToken()`.

---

## Sign‑Up & Third‑Party Integration (Future)

The same Context/Hook architecture will accommodate additional auth features:

* Sign‑Up Flow: Implement `useSignUp` hook and `/signup/` endpoints under the same `AuthProvider`.
* OAuth2/OpenID Connect: Add `useOAuth` or extend `useAuth` to handle code‑exchange, PKCE, and social logins via backend endpoints.
* Multi‑Factor Authentication (MFA): Integrate steps for TOTP/SMS verification before finalizing login.

All new flows live under the same Context, with new reducer actions and UI flags as needed.

---

## Security & Production Roadmap

Before shipping to production, implement the following:

1. Secure Refresh Tokens

   * Store refresh tokens in HttpOnly, Secure, SameSite cookies instead of `localStorage`.
   * Remove all JS access to refresh token.

2. Roles & Permissions

   * Retrieve real `roles` and `permissions` from backend login or user‑info endpoints.
   * Enforce frontend checks against these lists.

3. Token Rotation & Revocation

   * Maintain a revocation list to invalidate tokens on logout or suspected compromise.

4. CORS & CSRF Hardening

   * Lock CORS to approved origins; enable CSRF protection for cookie flows.

5. Error Monitoring & Rate Limiting

   * Integrate logging/monitoring for failed auth attempts and spikes in 401 errors.
   * Apply throttling or captchas to login endpoints.

6. Testing

   * Unit tests for `authReducer` and service helpers.
   * Integration tests simulating login, refresh, logout flows in React Testing Library.

---

## Sign-Up Feature

The Sign-Up feature handles user registration, duplicate-name resolution, and immediate login upon successful account creation.

### Location

* Hook: `features/signup/useSignUp.js`
* Page component: `features/signup/SignUpPage.jsx`
* Modal component: `features/signup/NameExistsModal.jsx`

### Hook Logic (`useSignUp`)

1. State management

   * `pending`: boolean to disable UI during async operations
   * `error`: captures any signup or login errors
   * `modal`: `{ open: boolean, data: object }` to handle “name exists” suggestions

2. Flow (`submit(formData, skipCheck)`)

   * Sends a POST to `/register/` using `useFetch.post`.
   * If response status is `'warning'` and `skipCheck` is false, opens the modal with suggested recovery data and exits.
   * Otherwise, invokes `login({ email, password })` from `useAuth`, reusing existing auth logic.
   * Errors from either step are caught, set to `error`, and re-thrown for consumers to handle.
   * `pending` is set to `true` before starting and reset to `false` in a `finally` block.

3. Modal Handling

   * `NameExistsModal.jsx` displays masked contact info when a duplicate user is detected.
   * Provides “Yes, recover” and “No, create anyway” actions, integrating with navigation or `submit(formData, true)`.

### Reasoning

* Decoupling: Signup is separate from core auth context to keep `AuthContext` focused on session state.
* Reuse: Leverages `useAuth` for login, avoiding duplicate token-handling logic.
* Simplicity: Single `pending` and `error` flags avoid multi-state complexity.
* Scalability: Dedicated feature folder allows further extension (social signup, invite flows) without bloating auth core.

### Next Steps

* Migrate `pending`/`error` and modal state into reducer if feature complexity grows.
* Add form validation and accessibility enhancements.
* Write unit tests for `useSignUp` reducer logic and modal interactions.

