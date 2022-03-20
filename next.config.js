module.exports = {
  images: {
    domains: [
      "fakestoreapi.com",
      "localhost",
      "shopify-seller-backend.herokuapp.com",
      "*.com",
      "lh3.googleusercontent.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
