# **App Name**: Cultiva Agro

## Core Features:

*   **Project Marketplace:** Browse, filter, and search for agricultural investment opportunities. Each project will have a detailed page with information about the project, the company behind it, financial projections, and risk analysis.
*   **User Dashboard:** After logging in, users can view their investment portfolio, track the performance of their investments, and see upcoming payment schedules.
*   **Company Profiles:** Detailed profiles of the agricultural companies seeking funding. This will include their history, team, and track record.
*   **Investment Flow:** A secure and streamlined process for users to invest in projects.
*   **Admin Panel:** A backend system for admins to manage projects, users, and content on the platform.

## Tech Stack:

*   **Framework:** Next.js (React)
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui
*   **Authentication:** NextAuth.js
*   **Database:** PostgreSQL (using Vercel Postgres)
*   **ORM:** Drizzle ORM
*   **Charts:** Recharts

## Pages:

*   `/` - Landing Page / Homepage
*   `/marketplace` - Project Marketplace
*   `/project/[id]` - Detailed Project Page
*   `/company/[id]` - Detailed Company Page
*   `/dashboard` - User Dashboard
*   `/login` - Login Page
*   `/signup` - Signup Page

## Data Models (Schemas):

*   **User:** id, name, email, password, image, createdAt
*   **Project:** id, title, description, companyId, targetAmount, amountRaised, closingDate, expectedROI, riskRating, images
*   **Investment:** id, userId, projectId, amount, investmentDate
*   **Company:** id, name, description, logo, website, location, foundingYear

## Roadmap (Future Features):

*   Secondary market for trading investments.
*   Social features (comments, Q&A on projects).
*   More detailed analytics and reporting for investors.
*   Integration with digital wallets.
