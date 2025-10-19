import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function EditProductForm() {


    const location = useLocation()
    const product = location.state.product
    const altNames = product.altName.join(",")


    const [productId, setProductId] = useState(product.productId);
    const [productName, setProductName] = useState(product.productName);
    const [alternativeName, setAlternativeName] = useState(altNames);
    const [imageUrls, setImageUrls] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [price, setPrice] = useState(product.price);
    const [lastPrice, setLastPrice] = useState(product.lastPrice);
    const [stock, setStock] = useState(product.stock);
    const [description, setDescription] = useState(product.description);
    const navigate = useNavigate()




    async function handlesubmit(e) {
        e.preventDefault();
        const altName = alternativeName.split(",")

        console.log(productId, productName, alternativeName, imageUrls, price, lastPrice, stock, description)


        const filesArray = Array.from(imageFiles);

        // Upload all images
        const uploadPromises = filesArray.map(file => uploadMediaToSupabase(file));
        const imgUrls = await Promise.all(uploadPromises);

        console.log("✅ Uploaded image URLs:", imgUrls);






        const productData = {
            productId: productId,
            productName: productName,
            altName: altName,
            image: imgUrls,
            price: price,
            lastPrice: lastPrice,
            stock: stock,
            description: description
        }


        try {


            const token = localStorage.getItem('token')
            await axios.put(`http://localhost:3000/api/products/${productId}`, productData, { headers: { Authorization: `Bearer ${token}` } })
            toast.success("Product Updated Successfully")

            navigate("/admin/products")




        } catch (err) {
            console.error("Update error:", err);
            toast.error(err.response?.data?.message || "Failed to update product");
        }

    }





    return (
        <div className="p-1 max-w-md mx-auto ">
            <h4 className="text-2xl font-bold mb-1 ">Edit Product</h4>

            <form className="flex flex-col gap-1 bg-white shadow-md rounded-lg p-6">
                {/* Product Id */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Product ID</label>
                    <input
                        disabled
                        type="text"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter product ID"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                </div>

                {/* Product Name */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Product Name</label>
                    <input
                        type="text"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Alternative Name</label>
                    <input
                        type="text"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter product name"
                        value={alternativeName}
                        onChange={(e) => setAlternativeName(e.target.value)}
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Image </label>
                    <input
                        type="file"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        onChange={(e) => setImageFiles(e.target.files)}
                        multiple
                    />
                </div>

                {/* Price */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Price</label>
                    <input
                        type="number"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                {/* Last Price */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Last Price</label>
                    <input
                        type="number"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter last price"
                        value={lastPrice}
                        onChange={(e) => setLastPrice(e.target.value)}
                    />
                </div>

                {/* Stock */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Stock</label>
                    <input
                        type="number"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter stock"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Description</label>
                    <textarea
                        rows="3"
                        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={handlesubmit}
                >
                    Update
                </button>
            </form>
        </div>
    );

}

