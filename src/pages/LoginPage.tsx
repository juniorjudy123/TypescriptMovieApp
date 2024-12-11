import { useState } from "react"
import bgimg from "../assets/login-bg.jpg"
import HeaderComponent from "../components/HeaderComponent"

const Loginpage = () => {
	const [isSignIn, setIsSignIn] = useState(true)
	const toggleSignInForm = () => {
		setIsSignIn(!isSignIn)
	}
	return (
		<div className="relative w-full h-screen overflow-hidden   ">
			<img
				src={bgimg}
				alt="bg-img"
				className=" object-cover absolute w-full h-full  "
			></img>
			<div className="absolute inset-0 bg-black opacity-65"></div>
			<HeaderComponent />
			<div>
				<form
					typeof="text"
					className=" absolute w-3/12 bg-black bg-opacity-80 p-7 my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md"
				>
					<h1 className="font-semibold text-3xl py-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							type="text"
							placeholder="Full Name"
							className="p-3 my-2 rounded-sm w-full bg-gray-700"
						/>
					)}
					<input
						type="text"
						placeholder="Email Address"
						className="p-3 my-2 rounded-sm w-full bg-gray-700"
					/>
					<input
						type="email"
						placeholder="Password"
						className="p-3 my-2 rounded-sm w-full  bg-gray-700"
					/>
					<button className="bg-red-700  my-4 p-2 w-full">
						{isSignIn ? "Login" : "Register"}
					</button>
					<p onClick={toggleSignInForm} className="cursor-pointer my-4 p-2">
						{isSignIn
							? "New to netflix? signup now"
							: "Already Registered.Sign In now"}
					</p>
					{/* <p>Use a sign-in code</p> */}
				</form>
			</div>
		</div>
	)
}

export default Loginpage
