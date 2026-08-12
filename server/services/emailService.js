import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendOrderEmail = async (order, customerEmail) => {
  try {
    await transporter.sendMail({
      from: `"Mangal Shringar" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: "🛍️ Mangal Shringar - Order Confirmation",

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">

          <h2 style="color: #6B4F2A;">
            Mangal Shringar
          </h2>

          <p>
            Dear ${order.fullName},
          </p>

          <p>
            Thank you for your order! ❤️
          </p>

          <h3>Order Details</h3>

          <p>
            <strong>Total Amount:</strong>
            ₹${order.totalAmount}
          </p>

          <p>
            <strong>Payment:</strong>
            ${order.paymentMethod}
          </p>

          <p>
            <strong>Order Status:</strong>
            ${order.orderStatus}
          </p>

          <h3>Delivery Address</h3>

          <p>
            ${order.address}<br/>
            ${order.city}, ${order.state}<br/>
            PIN: ${order.pincode}
          </p>

          <hr/>

          <p style="color: #777;">
            Thank you for shopping with Mangal Shringar.
          </p>

          <p>
            Prem Se, Shringar Unke Liye ❤️
          </p>

        </div>
      `,
    });

    console.log("✅ Order email sent successfully");

  } catch (error) {
    console.error("❌ Email Error:", error);
  }
};