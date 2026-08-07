import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getMyOrders } from "../api/orderApi";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await getMyOrders();
      setOrders(res.data.orders);
    } catch (error) {
      console.error(error);
      alert("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#6B4F2A] mb-8">
          My Orders
        </h1>

        {loading ? (
          <h2 className="text-center text-xl">
            Loading Orders...
          </h2>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <h2 className="text-2xl font-semibold">
              No Orders Yet
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't placed any orders.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow p-6"
              >

                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h2 className="font-bold">
                      Order ID
                    </h2>

                    <p className="text-gray-500 text-sm">
                      {order._id}
                    </p>
                  </div>

                  <span className="bg-yellow-100 px-4 py-2 rounded-full font-semibold">
                    {order.orderStatus}
                  </span>
                </div>

                {order.products.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between border-b py-3"
                  >
                    <div>
                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty : {item.quantity}
                      </p>
                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>
                  </div>
                ))}

                <div className="flex justify-between mt-5 text-lg font-bold">
                  <span>Total</span>

                  <span className="text-[#C8A24A]">
                    ₹{order.totalAmount}
                  </span>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </MainLayout>
  );
};

export default MyOrders;