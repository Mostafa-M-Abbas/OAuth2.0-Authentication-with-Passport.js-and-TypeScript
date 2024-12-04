OAuth2.0 Authentication with Passport.js and TypeScript

// Description
This project demonstrates how to integrate OAuth2.0 authentication into an Express application using Passport.js and TypeScript. The app supports Google and GitHub as authentication providers.

// Features
1 - OAuth2.0 authentication with Google and GitHub.
2 - TypeScript integration for type safety.
3 - Securely stores user information.
4 - Environment variable configuration for sensitive data.

// Installation
1 - Clone the repository:

git clone https://github.com/Mostafa-M-Abbas/OAuth2.0-Authentication-with-Passport.js-and-TypeScript.git
cd OAuth2.0-Authentication-with-Passport.js-and-TypeScript

2 - Install dependencies:

npm install
Set up environment variables: Create a .env file in the root directory and add:

// env
نسخ الكود
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

// Start the server:
نسخ الكو
npm run dev
