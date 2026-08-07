import { useEffect, useState } from "react";
import {
  getOrders,
  updateOrderStatus,
} from "../../api/orderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await getOrders();
      setOrders(res.data.orders);
    } catch (error) {
      console.error("Fetch Orders Error:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);

      // Refresh orders after update
      fetchOrders();

    } catch (error) {
      console.error("Update Status Error:", error);
      alert("Failed to update status");
    }
  };


  return (
    <div>

      <h1 className="text-3xl font-bold text-[#6B4F2A] mb-6">
        Orders List
      </h1>


      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">


          <thead className="bg-[#6B4F2A] text-white">

            <tr>

              <th className="p-3">
                Customer
              </th>

              <th className="p-3">
                Phone
              </th>

              <th className="p-3">
                Products
              </th>

              <th className="p-3">
                Amount
              </th>

              <th className="p-3">
                Payment
              </th>

              <th className="p-3">
                Status
              </th>

            </tr>

          </thead>



          <tbody>

            {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b text-center"
              >


                <td className="p-3">
                  {order.fullName}
                </td>



                <td>
                  {order.phone}
                </td>



                <td>

                  {order.products.map((item) => (

                    <p key={item._id}>
                      {item.title} × {item.quantity}
                    </p>

                  ))}

                </td>



                <td>
                  ₹{order.totalAmount}
                </td>



                <td>
                  {order.paymentMethod}
                </td>



                <td>

                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleStatusChange(
                        order._id,
                        e.target.value
                      )
                    }
                    className="border rounded-lg p-2"
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Shipped">
                      Shipped
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </td>


              </tr>

            ))}


          </tbody>


        </table>


      </div>


    </div>
  );
};


export default Orders;