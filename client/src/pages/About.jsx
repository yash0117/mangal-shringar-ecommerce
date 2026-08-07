import MainLayout from "../layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6B4F2A]">
            About Mangal Shringar
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Mangal Shringar is dedicated to providing beautiful Laddu Gopal Ji
            dresses, jewellery, and devotional accessories crafted with love
            and devotion. Our aim is to offer premium quality products that
            enhance your spiritual celebrations and daily worship.
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white shadow rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#6B4F2A] mb-4">
            Our Story
          </h2>

          <p className="text-gray-700 leading-8">
            Mangal Shringar was started with the vision of making beautiful
            Laddu Gopal Ji Shringar products easily available online. Every
            product is selected carefully to maintain quality, tradition, and
            elegance. We believe devotion deserves the finest offerings.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#6B4F2A] mb-3">
              Premium Quality
            </h3>

            <p className="text-gray-600">
              Carefully selected products made with quality materials and fine
              craftsmanship.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#6B4F2A] mb-3">
              Trusted Service
            </h3>

            <p className="text-gray-600">
              Simple ordering process, secure shopping experience, and reliable
              customer support.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#6B4F2A] mb-3">
              Fast Delivery
            </h3>

            <p className="text-gray-600">
              We strive to deliver every order safely and on time across India.
            </p>
          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default About;