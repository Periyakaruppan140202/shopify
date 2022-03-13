const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const url = "https://shopify-seller-backend.herokuapp.com/image/";
  const { items, email } = req.body;
  const transformedItems = items.map((item) => {
    // console.log(url + item.image);
    return {
      // description: item.description,
      quantity: item.qty,
      price_data: {
        currency: "inr",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [url + item.image],
        },
      },
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1KaKxzSE4aKrpNuukfsKIqWF"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => url + item.image)),
    },
  });
  // console.log(JSON.stringify(items.map((item) => url + item.image)));
  res.status(200).json({ id: session.id });
};
