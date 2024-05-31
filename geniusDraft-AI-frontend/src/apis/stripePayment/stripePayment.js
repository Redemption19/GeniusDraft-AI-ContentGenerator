import axios from "axios";

// Handle Free Subscription
export const handleFreeSubscriptionAPI = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8090/api/v1/stripe/free-plan",
      {},
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error handling free subscription:", error);
    throw error;
  }
};

// Create Stripe Payment Intent
export const createStripePaymentIntentAPI = async (payment) => {
  try {
    console.log(payment);
    const response = await axios.post(
      "http://localhost:8090/api/v1/stripe/checkout",
      {
        amount: Number(payment?.amount),
        subscriptionPlan: payment?.plan,
      },
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw error;
  }
};

// Verify Payment
export const verifyPaymentAPI = async (paymentId) => {
  try {
    const response = await axios.post(
      `http://localhost:8090/api/v1/stripe/verify-payment/${paymentId}`,
      {},
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};
