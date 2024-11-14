# Lovecraftian E-Commerce Tech Journal

This journal tracks the progress of the **Lovecraftian E-Commerce** project, documenting key decisions, challenges faced, and technical details about the development process.

## Table of Contents

1. [Project Initialization](#project-initialization)
2. [Backend Setup](#backend-setup)
3. [Frontend Development](#frontend-development)
4. [Database Schema Design](#database-schema-design)
5. [Challenges](#challenges)
6. [Technologies Chosen](#technologies-chosen)
7. [Future Improvements](#future-improvements)

---

## Project Initialization

**Date**: 2024-11-01  
The project started with the goal of creating a marketplace where Lovecraftian squid aliens sell human cities as products. We decided to use a full-stack architecture with **React** for the frontend and **Node.js**/**Express** for the backend.

I initialized two main folders: `frontend` and `backend`. The backend was set up with Node.js and Express, while the frontend started with a React boilerplate. Database management will be handled by **Prisma** with PostgreSQL as the database.

---

## Backend Setup

**Date**: 2024-11-02  
Set up the basic backend structure, including:

- **Express.js** server setup
- Created the basic routes for user authentication (`authRoutes`) and city-related operations (`cityRoutes`).
- Installed and configured **Prisma** ORM to handle database operations.

**Key Decisions**:

- Chose **JWT** for user authentication to manage sessions securely. The token is stored on the client-side (in local storage) and sent with every request requiring authentication.
- **Prisma** was selected over **Sequelize** because of its ease of integration with PostgreSQL and type-safe database queries.

---

## Frontend Development

**Date**: 2024-11-05  
Started working on the frontend with React:

- Implemented basic routing with **React Router**.
- Set up state management with **Redux** to handle the global state of user authentication, cart items, and cities data.
- Designed the basic structure of the homepage and city cards.

**Challenges**:

- Figuring out the best way to handle async data fetching from the backend (cities, reviews, etc.) and syncing it with the frontend state using Redux.
- Overcame issues with responsive design by using **Bootstrap** components.

---

## Database Schema Design

**Date**: 2024-11-07  
The database schema was designed to model cities, reviews, users, and orders.

- **Cities**: Each city has a name, description, price, and category.
- **Users**: Users have credentials for authentication and are associated with their orders.
- **Orders**: Each order is linked to a user and a city. It includes information about the quantity and status of the order.
- **Reviews**: Each review is associated with a city and user, including a rating and comment.

I ran the first set of migrations using Prisma to generate the database schema.

---

## Challenges

- **Authentication**: One of the challenges was ensuring proper JWT authentication and managing access control for various users (e.g., users vs. admin). Solved this by implementing a middleware that checks the validity of the JWT token.
- **Handling Asynchronous Data**: Initially struggled with making sure API calls to the backend were properly reflected in the UI. This was solved using **Redux Thunk** for managing asynchronous actions and **React Query** for data fetching.

---

## Technologies Chosen

- **Node.js / Express** for the backend because of its performance and scalability.
- **React** for the frontend as it's efficient for building dynamic single-page applications.
- **Prisma ORM** to interact with PostgreSQL.
- **JWT** for secure user authentication.
- **Redux** for state management to handle global state efficiently.
- **Bootstrap** for rapid frontend development and responsive layouts.

---

## Future Improvements

- **Search Functionality**: Adding more advanced search capabilities on the frontend to filter cities by multiple criteria such as price range and category.
- **Payment Gateway**: Integrating a payment system (like Stripe) for real purchases instead of just cart functionality.
- **Admin Dashboard**: Enhancing the admin dashboard to allow for more sophisticated city and user management features.
- **UI Enhancements**: Improving the UI design to make the user experience more immersive and themed to the Lovecraftian setting.

---
