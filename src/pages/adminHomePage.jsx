import { Link, Route, Routes } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa"; // Dashboard, Users, Products, Orders
import AdminProductPage from "./admin/adminProductPage";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-300 w-full h-screen flex">
            {/* Sidebar */}
            <div className="bg-teal-500 w-[20%] h-screen flex flex-col items-start py-10 px-5 space-y-6">
                <Link
                    to="/admin/dashboard"
                    className="flex items-center gap-3 text-white hover:bg-teal-600 px-4 py-2 rounded-lg transition duration-200"
                >
                    <FaTachometerAlt size={20} /> Dashboard
                </Link>

                <Link
                    to="/admin/users"
                    className="flex items-center gap-3 text-white hover:bg-teal-600 px-4 py-2 rounded-lg transition duration-200"
                >
                    <FaUsers size={20} /> Users
                </Link>

                <Link
                    to="/admin/products"
                    className="flex items-center gap-3 text-white hover:bg-teal-600 px-4 py-2 rounded-lg transition duration-200"
                >
                    <FaBoxOpen size={20} /> Products
                </Link>

                <Link
                    to="/admin/orders"
                    className="flex items-center gap-3 text-white hover:bg-teal-600 px-4 py-2 rounded-lg transition duration-200"
                >
                    <FaShoppingCart size={20} /> Orders
                </Link>
            </div>

            {/* Main Content */}
            <div className="bg-yellow-100 h-screen w-[80%]">
                <Routes path="/*">
                    <Route path="/dashboard" element={<h5>dashboard</h5>} />
                    <Route path="/users" element={<h5>users</h5>} />
                    <Route path="/products" element={AdminProductPage} />
                    <Route path="/orders" element={<h5>orders</h5>} />




                </Routes>
            </div>
        </div>
    );
}
