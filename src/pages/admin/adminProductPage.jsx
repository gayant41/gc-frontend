import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
    const [products, setProduct] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!productsLoaded) {
            axios.get("http://localhost:3000/api/products").then((res) => {
                console.log(res.data);
                setProduct(res.data.list); // ensure it's an array
                setProductsLoaded(true);
            });

        }
    }, [productsLoaded]);

    return (
        <div className="p-6 relative">
            <Link to="/admin/products/addproduct" className="absolute bottom-0 right-4 rounded-full bg-teal-500 px-2 py-2 text-white hover:bg-teal-600 " ><FaPlus size={20} /></Link>
            <h3 className="text-2xl font-bold mb-4">Admin Product Page</h3>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="min-w-full table-auto text-sm text-left text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-4 py-3">Product ID</th>
                            <th className="px-4 py-3">Product Name</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Last Price</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition duration-150"
                                >
                                    <td className="px-4 py-3">{product.productId}</td>
                                    <td className="px-4 py-3 font-medium text-gray-900">
                                        {product.productName}
                                    </td>
                                    <td className="px-4 py-3 text-green-600 font-semibold">
                                        Rs. {product.price}
                                    </td>
                                    <td className="px-4 py-3 text-red-500 line-through">
                                        Rs. {product.lastPrice}
                                    </td>
                                    <td className="px-4 py-3">{product.stock}</td>
                                    <td className="px-4 py-3 max-w-xs truncate">
                                        {product.description}
                                    </td>
                                    <td className="px-4 py-3 flex justify-center gap-3 text-lg">
                                        <button className="text-red-500 hover:text-red-700" onClick={() => {

                                            axios.delete(`http://localhost:3000/api/products/${product.productId}`,
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`,
                                                    },
                                                }
                                            ).then((res) => {
                                                toast.success(res.data.message)
                                                setProductsLoaded(false);

                                            })
                                        }}>
                                            <FaTrash />
                                        </button>
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <FaPencil />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="text-center py-6 text-gray-500 italic"
                                >
                                    No products available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
