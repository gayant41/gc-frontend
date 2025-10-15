import { Link } from "react-router-dom"
export default function Header() {
    return (
        <header className="bg-[#FFA4A4] w-full h-[80px] flex items-center justify-center relative ">

            <img src="/logo.png" className="h-18 rounded-full absolute left-[25px] w-18 ">
            </img>

            <div className=" w-[30%] h-full flex items-center justify-evenly   text-[#ffffff] font-semibold text-[15px]">
                <Link to="/" className=" hover:text-gray-600 transition duration-200 font-bold text-">Home</Link>
                <Link to="/products" className="font-bold text-white hover:text-gray-600 transition duration-200">Products</Link>
                <Link to="/about" className="text-white hover:text-gray-600 transition duration-200">About</Link>
                <Link to="/contact" className="text-white hover:text-gray-600 transition duration-200">Contact</Link>
            </div>


        </header>

    )
}