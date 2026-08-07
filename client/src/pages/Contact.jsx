import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6B4F2A]">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. If you have any questions about our
            products or your order, feel free to contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#6B4F2A] mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold">📍 Address</h3>
                <p>Ghaziabad Road, Greater Noida, India</p>
              </div>

              <div>
                <h3 className="font-semibold">📞 Phone</h3>
                <p>+91 7042650122</p>
              </div>

              <div>
                <h3 className="font-semibold">📧 Email</h3>
                <p>mangalshringar2025@gmail.com</p>
              </div>

              <div>
                <h3 className="font-semibold">🕒 Working Hours</h3>
                <p>Monday - Saturday</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#6B4F2A] mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C8A24A]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C8A24A]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C8A24A]"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#C8A24A]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#C8A24A] text-white py-3 rounded-lg hover:bg-[#b28d3f] transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default Contact;