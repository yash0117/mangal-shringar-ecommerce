

const Footer = () => {
  return (
    <footer className="bg-[#FFF8E7] text-gray-700 border-t border-[#E8D7B0]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#B8860B] mb-4">
              Mangal Shringar
            </h2>

            <p className="text-sm leading-6 text-gray-600 mb-5">
              Mangal Shringar is a dedicated online store for beautiful
              traditional dresses, jewelry and accessories for Laddu Gopal Ji.
              We bring devotional elegance and traditional craftsmanship
              together to make every Shringar special.
            </p>

            <p className="text-sm text-gray-600 leading-6">
              ✨ Made with devotion, love and care.
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mangal_shringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-gray-700 hover:text-[#B8860B] transition duration-300"
            >
              <span className="text-lg">◎</span>
              Follow us on Instagram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/shop"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Shop
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/orders"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  My Orders
                </a>
              </li>

              <li>
                <a
                  href="/wishlist"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Wishlist
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Help & Support
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="hover:text-[#B8860B] transition duration-300"
                >
                  Shipping & Delivery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-600">

              <div>
                <p className="font-medium text-gray-800">
                  Email
                </p>
                <p className="mt-1">
                  mangalshringar2025@gmail.com
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Phone
                </p>
                <p className="mt-1">
                  +91 7042650122
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-800">
                  Location
                </p>
                <p className="mt-1">
                  India
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#E8D7B0]">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

            <p>
              © 2026 Mangal Shringar. All Rights Reserved.
            </p>

            <a
              href="https://www.instagram.com/mangal_shringar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B8860B] transition duration-300"
            >
              @mangal_shringar
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;