import { Link, Route, Routes } from "react-router-dom";
import Header from "../components/header.jsx";
import ProductOverview from "./home/productOverview.jsx";



export default function HomePage() {
    return (

        <div className="bg-[#FCF9EA] w-full h-screen">
            <Header />

            < div className="w-full h-[calc(100vh-80px)]">
                <Routes  >

                    <Route path="/" element={<h1>Home Page</h1>} />

                    <Route path="productInfo/:id" element={<ProductOverview />} />

                </Routes>
            </div>
        </div>
    )
}