# GeniusDraft AI Backend

This is the backend service for the GeniusDraft AI project, a subscription-based SaaS AI content generator. The backend is built using Node.js and handles the business logic, database interactions, and integration with third-party services.

## Features

- **User Authentication:** Secure login and registration using JWT.
- **Content Generation API:** Endpoints to generate content using the Gemini API.
- **Subscription Management:** Integrates with Stripe for handling subscriptions and payments.
- **Database Management:** Stores user data, content, and subscription details in MongoDB.
- **SEO Tools Integration:** Provides SEO suggestions and optimizations.
- **Content Ideas Generator:** Generates content ideas based on user input.

## Technologies Used

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB
- **API Integration:** Gemini API for AI content generation
- **Payment Gateway:** Stripe
- **Environment Management:** dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running
- Stripe account for payment processing

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/geniusdraft-ai.git
    cd geniusdraft-ai/geniusDraft-AI-backend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary configuration for your database, API keys, and third-party services:

    ```plaintext
    PORT=3000
    MONGODB_URI=your-mongodb-uri
    GEMINI_API_KEY=your-gemini-api-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    JWT_SECRET=your-jwt-secret
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

## API Documentation

The API documentation is available in the `docs` directory and can be accessed at `/api-docs` when the server is running.

## Contributing

We welcome contributions to the GeniusDraft AI backend! If you have suggestions for improvements or would like to report issues, please create an issue or submit a pull request.

## License

GeniusDraft AI is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or support, please contact us at support@geniusdraft.ai.
