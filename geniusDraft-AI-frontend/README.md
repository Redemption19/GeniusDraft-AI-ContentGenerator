# GeniusDraft AI Frontend

This is the frontend application for the GeniusDraft AI project, a subscription-based SaaS AI content generator. The frontend is built using React.js and provides a user-friendly interface for interacting with the AI content generation services.

## Features

- **User Authentication:** Secure login and registration forms.
- **Dashboard:** User dashboard to manage content, view analytics, and handle subscriptions.
- **Content Editor:** Rich text editor for creating and editing content.
- **SEO Tools:** Integrated SEO tools for optimizing content.
- **Content Ideas Generator:** Interface to generate content ideas based on user input.
- **Subscription Management:** Interface for managing user subscriptions and payments.

## Technologies Used

- **Frontend Framework:** React.js
- **State Management:** React Query for asynchronous requests
- **Styling:** CSS Modules
- **Payment Integration:** Stripe
- **Rich Text Editor:** Draft.js or similar

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/geniusdraft-ai.git
    cd geniusdraft-ai/geniusDraft-AI-frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary configuration for your backend API and third-party services:

    ```plaintext
    REACT_APP_API_URL=your-backend-api-url
    REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
    ```

4. **Run the application:**

    ```sh
    npm start
    ```

## Contributing

We welcome contributions to the GeniusDraft AI frontend! If you have suggestions for improvements or would like to report issues, please create an issue or submit a pull request.

## License

GeniusDraft AI is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or support, please contact us at support@geniusdraft.ai.
