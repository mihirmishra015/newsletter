# Newsletter Subscription App

This is a simple newsletter subscription application built with React for the frontend and Express.js for the backend. It allows users to subscribe to a newsletter using their email address.

## Features

- Single-page React application with a subscription form
- Express.js backend API for handling subscriptions
- Integration with Brevo (formerly Sendinblue) for managing contacts
- Cross-Origin Resource Sharing (CORS) enabled for local development
- Environment variable support for secure API key management

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- npm (Node Package Manager) installed
- A Brevo account and API key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/newsletter-subscription-app.git
   cd newsletter-subscription-app
   ```

2. Install the dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   npm install

   # Install the Brevo SDK
   npm install sib-api-v3-sdk

   # Navigate to the frontend directory and install dependencies
   cd frontend
   npm install
   ```

3. Create a `.env` file in the root directory and add your Brevo API key:
   ```
   BREVO_API_V3_KEY=your_brevo_api_key_here
   ```

## Usage

1. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:8000`.

2. In a separate terminal, start the React frontend:
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on `http://localhost:3000`.

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Configuration

- The backend server runs on port 8000 by default. You can change this in `index.js`.
- The frontend is configured to connect to `http://localhost:8000` for API requests. If you change the backend port, update the API URL in `App.js`.
- CORS is configured to allow requests from `http://localhost:3000`. Adjust this in `index.js` if needed.

## Project Structure

```
newsletter-subscription-app/
├── backend/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   └── ...
│   └── package.json
└── README.md
```

### Backend (index.js)

The backend is built with Express.js and handles the subscription logic. It uses the Brevo API to add new contacts.

Key features:
- Express server setup
- CORS configuration
- Brevo API integration
- POST endpoint for handling subscriptions

### Frontend (App.js)

The frontend is a React application that provides a user interface for newsletter subscription.

Key features:
- React hooks for state management
- Form for email input
- API call to backend for subscription
- Response handling and user feedback

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).
