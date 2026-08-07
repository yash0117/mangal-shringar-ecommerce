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
      icon: <FaBoxOpen size={30} />,
    },

    {
      title: "Total Orders",
      value: stats.orders,
      icon: <FaShoppingCart size={30} />,
    },

    {
      title: "Total Customers",
      value: stats.customers,
      icon: <FaUsers size={30} />,
    },

    {
      title: "Revenue",
      value: `₹${stats.revenue}`,
      icon: <FaRupeeSign size={30} />,
    },
  ];



  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-[#6B4F2A] mb-8">
        Admin Dashboard
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between"
          >

            <div>

              <h2 className="text-gray-500">
                {card.title}
              </h2>

              <p className="text-3xl font-bold mt-2">
                {card.value}
              </p>

            </div>


            <div className="bg-[#C8A24A] text-white p-4 rounded-full">
              {card.icon}
            </div>


          </div>

        ))}

      </div>

    </div>
  );
};


export default AdminDashboard;