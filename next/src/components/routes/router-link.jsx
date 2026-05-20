'use client';

/**
 * Client-only wrapper for Next.js `Link`.
 *
 * Why this file exists:
 * - Next.js 16 enforces a strict separation between Server and Client Components.
 * - MUI components (e.g. Button, Link, MenuItem) require `NextLink` to be
 *   imported from a Client Component.
 * - Importing `next/link` directly inside Server Components causes build
 *   or prerender errors.
 *
 * Usage:
 * ```ts
 * import { NextLink } from 'components/NextLink';
 * ```
 *
 * Reference:
 * https://mui.com/material-ui/integrations/nextjs/#next-js-v16-client-component-restriction
 */
import NextLink from 'next/link';

export { NextLink };
