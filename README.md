# User Authentication System

## Overview

This project is a user authentication system built with a focus on functionality, security, and scalability. It includes both frontend and backend implementations to handle user registration, login, and protected routes.

---

Live demo: [https://user-authentication-system-wanderon.netlify.app](https://user-authentication-system-wanderon.netlify.app)
## Frontend

### Technologies Used:

- **React**: For building the user interface.
- **React Router**: For managing navigation and protected routes.
- **Ant Design**: For pre-styled components and a consistent UI.

### Key Features:

1. **Login and Registration Forms**:
   - Designed with Ant Design components.
   - Includes form validation for user inputs.
2. **Protected Routes**:
   - Implemented using a `PrivateRoute` component.
   - Ensures only authenticated users can access certain pages (e.g., Holiday Tours). This feature was added as an enhancement to improve security and user experience.
3. **State Management**:
   - Utilizes `useState` for managing form toggles (login/register).
4. **Responsive Design**:
   - Styled with CSS to ensure a user-friendly experience across devices.

### Why This Approach?

- **Ant Design** was chosen for its pre-built components, reducing development time.
- **React Router** simplifies route management and ensures scalability for future pages.
- **LocalStorage** is used for token storage for simplicity in this demo. For production, secure cookies are recommended.

---

## Backend

### Technologies Used:

- **Node.js**: For building the server-side logic.
- **Express.js**: For handling API routes.
- **SQLite**: As the database for storing user data.
- **bcrypt**: For hashing passwords securely.
- **jsonwebtoken (JWT)**: For generating and validating authentication tokens.

### Key Features:

1. **User Registration**:
   - Validates inputs (username, email, password).
   - Hashes passwords using `bcrypt` before storing them in the database.
2. **User Login**:
   - Validates credentials.
   - Generates a JWT token for authenticated users.
3. **Error Handling**:
   - Provides meaningful error messages for invalid inputs or server issues.
4. **Input Sanitization**:
   - Ensures all user inputs are sanitized to prevent injection attacks.

### Why SQLite?

- **Lightweight**: Ideal for small-scale applications and demos.
- **Zero Configuration**: Easy to set up and use without additional dependencies.
- **Scalability**: Can be replaced with a more robust database (e.g., PostgreSQL) for production.

### Why This Approach?

- **bcrypt** ensures passwords are securely hashed, protecting user data.
- **JWT** provides a stateless authentication mechanism, making it scalable.
- **Express Validator** simplifies input validation and ensures clean data.

---

## Security Considerations

- **Password Hashing**: All passwords are hashed before storage.
- **Token Validation**: JWT tokens are validated for protected routes.
- **Input Sanitization**: Prevents injection attacks by sanitizing inputs.

---

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the Backend**:
   ```bash
   cd server
   npm start
   ```
3. **Start the Frontend**:
   ```bash
   cd ..
   npm start
   ```

---

## Future Improvements

- **Database Migration**: Replace SQLite with PostgreSQL for production.
- **Secure Cookies**: Use HTTP-only cookies for token storage.
- **Unit Tests**: Add tests for both frontend and backend.

---

## Conclusion

This project demonstrates a secure and scalable user authentication system. It is designed to be a starting point for more complex applications.
# user-authentication-system
