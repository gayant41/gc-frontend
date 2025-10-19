import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider.jsx";

export default function ProductOverview() {

    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState('loading');

    useEffect(
        () => {
            axios.get('http://localhost:3000/api/products/' + productId).then((res) => {
                console.log(res.data)
                console.log(res.data)              // ✅ See full product response
                console.log(res.data.product.image)


                if (res.data.product == null) {
                    setStatus("not found")
                }
                if (res.data.product != null) {
                    setStatus("found")
                    setProduct(res.data.product)
                }
            })

        }
        , [productId])

    return (
        <div className="w-full h-full flex items-center justify-center">
            {
                status == "loading" && (
                    < div>
                        <div className=" animate-spin rounded-full h-25 w-25 border-b-2 border-b-black "></div>
                    </div >
                )
            }
            {
                status === "not found" && (
                    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
                        <h1 className="text-4xl font-bold text-gray-800">Product Not Found</h1>
                        <p className="text-gray-500 text-lg">
                            The product you’re looking for doesn’t exist or may have been removed.
                        </p>
                        <button
                            onClick={() => window.history.back()}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Go Back
                        </button>
                    </div>
                )
            }
            {
                status === "found" && (
                    <div className="flex flex-row w-full h-full p-10 bg-[#FCF9EA] items-center justify-center">
                        {/* Image Section */}
                        <div className="w-[35%] flex items-center justify-center">
                            <ImageSlider images={product.image} />
                        </div>

                        {/* Product Details Section */}
                        <div className="w-[65%] h-full text-left pl-10 not-first:flex flex-col justify-center space-y-2 ">
                            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                                {product.productName}
                            </h1>

                            <p className="text-lg text-gray-500 italic">
                                {product.altName.join(" | ")}
                            </p>

                            <p className="text-2xl font-semibold text-green-700">
                                {(product.price > product.lastPrice) &&
                                    <span className="line-through text-red-500">RS.{product.price}</span>
                                }
                                <span className="ml-2">RS.{product.lastPrice}</span>
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>


                        </div>
                    </div>
                )
            }


        </div >
    )
}