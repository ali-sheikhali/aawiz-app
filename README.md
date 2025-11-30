## Getting Started
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## local host
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## vercel
open [https://aawiz-app-azure.vercel.app/]


## Next.js 16 Project – TypeScript, TailwindCSS, Parallel Routes
This project is a modern and structured application built with Next.js 16, TypeScript, and TailwindCSS.
It demonstrates usage of Parallel Routes, Server Components, Client Components, form validation, dynamic metadata, and theme management.

## Features
Next.js 16 (App Router)
TypeScript with strict typing
TailwindCSS for styling
Parallel Routes for:
Home
Dashboard
Login (with a layout that hides the Navbar)
Dark / Light Theme using next-themes
Form Validation with:
react-hook-form
zod
Toast Notifications using react-hot-toast
Shadcn/UI components for User Detail
Reusable Components:
Button
FormInput
FormInputWrapper
SEO Optimization using:
Metadata API
generateMetadata
Data Fetching with native fetch (recommended by Next.js)
SSR usage + passing data into a Client Component wrapped with Suspense


## Login Page
react-hook-form for form management
zod for validation
react-hot-toast for success/error messages after submission
Reusable components:
FormInput
FormInputWrapper
This page also has its own layout using Parallel Routes, allowing the layout to hide the navbar.


## Dashboard Page
Fetches server-side data using fetch() (recommended by Next.js)
Passes the fetched data to a Client Component (UserList)
Uses React Suspense for loading states
Contains metadata for SEO
Displays each user with a reusable Button component


## User Detail Page
Uses generateMetadata to create dynamic metadata for each user
Uses shadcn/ui components to display detailed user information
Includes its own metadata for SEO purposes

## Technologies Used
Next.js 16
TypeScript
TailwindCSS
next-themes
react-hook-form
zod
react-hot-toast
shadcn/ui
React Suspense