import { NavLink, Outlet } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlus,
  FaShoppingBag,
  FaHome,
} from "react-icons/fa";

const AdminLayout = () => {
  const menu = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },
    {
      name: "Add Product",
      path: "/admin/add-product",
      icon: <FaPlus />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FaShoppingBag />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#6B4F2A] text-white">
        <div className="text-2xl font-bold p-6 border-b border-[#8B6A3A]">
          Mangal Shringar
        </div>

        <nav className="mt-6">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-4 transition ${
                  isActive
                    ? "bg-[#C8A24A]"
                    : "hover:bg-[#8B6A3A]"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/"
            className="flex items-center gap-3 px-6 py-4 hover:bg-[#8B6A3A]"
          >
            <FaHome />
            Back to Website
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;