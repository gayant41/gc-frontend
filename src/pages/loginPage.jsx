import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login() {
        axios.post('http://localhost:3000/api/users/login', {
            email: email,
            password: password
        }).then((res) => {
            console.log(res)
            if (res.data.user == null) {
                toast.error(res.data.message)
                return
            }
            toast.success("Login Success")
            localStorage.setItem('token', res.data.token)
            if (res.data.user.type == 'admin') {

                window.location.href = '/admin/dashboard'

            } else {
                window.location.href = '/'
            }

        })
        console.log(email, password)
    }



    return (


        < div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" >
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Welcome Back 👋
                </h1>
                <p className="text-center text-gray-500 mb-8">
                    Please login to your account
                </p>

                <form className="space-y-5">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" defaultValue={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none" defaultValue={password} onChange={(e) =>
                                setPassword(e.target.value)

                            }
                        />
                    </div>

                    {/* Remember Me + Forgot Password */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox text-indigo-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-semibold transition duration-300" onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <a href="#" className="text-indigo-500 font-semibold hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div >
    );
}
