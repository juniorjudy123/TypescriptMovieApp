import React from "react"
import bgimg from "../assets/login-bg.jpg"
import HeaderComponent from "../components/HeaderComponent"

const Loginpage = () => {
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
					className=" absolute w-3/12 bg-black bg-opacity-60 p-8 my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md"
				>
					<h1 className="font-bold text-3xl p-4">Sign In</h1>
					<input
						type="text"
						placeholder="Email Address"
						className="p-2 my-2 rounded-sm w-full bg-gray-700"
					/>
					<input
						type="email"
						placeholder="Password"
						className="p-2 my-2 rounded-sm w-full  bg-gray-700"
					/>
					<button className="bg-red-600  rounded-xl my-2 p-2 w-full">
						Sign In
					</button>
					<button className="bg-opacity-50 bg-black w-full rounded-xl my-2 p-2 ">
						Use a sign-in code
					</button>
				</form>
			</div>
		</div>
	)
}

export default Loginpage
