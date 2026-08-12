import { useEffect, useState } from "react";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

import { getProducts } from "../../api/productApi";
import { getOrders } from "../../api/orderApi";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    customers: 0,
    revenue: 0,
  });

  const fetchDashboardData = async () => {
    try {
      const productRes = await getProducts();
      const orderRes = await getOrders();

      const products = productRes.data;
      const orders = orderRes.data.orders;

      const customers = [
        ...new Set(
          orders.map((order) => order.phone)
        ),
      ];

      const revenue = orders.reduce(
        (total, order) =>
          total + order.totalAmount,
        0
      );

      setStats({
        products: products.length,
        orders: orders.length,
        customers: customers.length,
        revenue,
      });
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const cards = [
    {
      title: "Total Products",
      value: stats.products,
      icon: <FaBoxOpen size={24} />,
    },
    {
      title: "Total Orders",
      value: stats.orders,
      icon: <FaShoppingCart size={24} />,
    },
    {
      title: "Total Customers",
      value: stats.customers,
      icon: <FaUsers size={24} />,
    },
    {
      title: "Revenue",
      value: `₹${stats.revenue}`,
      icon: <FaRupeeSign size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B4F2A] mb-6 sm:mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 sm:p-5 md:p-6 flex items-center justify-between"
          >

            <div className="min-w-0">

              <h2 className="text-sm sm:text-base text-gray-500">
                {card.title}
              </h2>

              <p className="text-2xl sm:text-3xl font-bold mt-2 break-words">
                {card.value}
              </p>

            </div>

            <div className="flex-shrink-0 bg-[#C8A24A] text-white p-3 sm:p-4 rounded-full">
              {card.icon}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminDashboard;