# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `pnpm dev` - Runs the full stack (Vite dev server + Express backend)
- **Build**: `pnpm build` - Builds both frontend (Vite) and backend (esbuild)
- **Production**: `pnpm start` - Runs the built production server
- **Type Checking**: `pnpm check` - Runs TypeScript type checking
- **Formatting**: `pnpm format` - Runs Prettier on all files
- **Testing**: `pnpm test` - Runs Vitest test suite
- **Database Migrations**: `pnpm db:push` - Generates and applies Drizzle ORM migrations

## Architecture Overview

This is a full-stack application with the following structure:

- **Frontend**: React 19 app using Vite, Radix UI components, and Tailwind CSS with custom animations
- **Backend**: Express server using tRPC for API routes, with Drizzle ORM for MySQL database interactions
- **Server**: Located in `server/_core/index.ts` with middleware and route definitions
- **Database**: MySQL via Drizzle ORM with migrations managed through Drizzle Kit
- **Styling**: Tailwind CSS with `tailwindcss-animate` for motion utilities
- **State Management**: React Query for data fetching and caching
- **Auth**: JOSE library for JWT handling (implementation in server/auth)

Key patterns:
- Full tRPC stack for API communications
- Radix UI for all component primitives
- Drizzle ORM with MySQL for database operations
- Vite + tsx for development workflow
- Test coverage through Vitest

## Development Notes

- Server code is TypeScript (module type)
- Frontend and backend are built together in the `build` process
- Database migrations are separate from application code via Drizzle Kit
- Type checking should be run before committing (pnpm check)
- All styling is managed through Tailwind classes (no CSS modules)
- The `wouter` router is used for client-side routing