import { useRef, useState } from "react"
import bgimg from "../assets/login-bg.jpg"
import { checkValidData } from "../utils/validation"
import HeaderComponent from "../components/HeaderComponent"

const Loginpage = () => {
	const [isSignIn, setIsSignIn] = useState(true)
	const [errormessage, setErrorMessage] = useState()
	const toggleSignInForm = () => {
		setIsSignIn(!isSignIn)
	}
	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const handleButtonClick = () => {
		const emailValue = email.current.value
		const passwordValue = password.current.value
		const nameValue = name.current.value
		const message = checkValidData(emailValue, passwordValue, nameValue)
		console.log(message)
		setErrorMessage(message)
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
					onSubmit={(e) => e.preventDefault()}
					typeof="text"
					className=" absolute w-3/12 bg-black bg-opacity-80 p-7 my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md"
				>
					<h1 className="font-semibold text-3xl py-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							ref={name}
							type="text"
							placeholder="Full Name"
							className="p-3 my-2 rounded-sm w-full bg-gray-700"
						/>
					)}
					<input
						type="text"
						ref={email}
						placeholder="Email Address"
						className="p-3 my-2 rounded-sm w-full bg-gray-700"
					/>
					<input
						ref={password}
						type="password"
						placeholder="Password"
						className="p-3 my-2 rounded-sm w-full  bg-gray-700"
					/>
					<p className="text-red-700 font-semibold text-lg py-2">
						{errormessage}
					</p>
					<button
						className="bg-red-700  my-4 p-2 w-full"
						onClick={handleButtonClick}
					>
						{isSignIn ? "Login" : "Register"}
					</button>
					<p className="cursor-pointer my-4 p-2">
						{isSignIn ? (
							<>
								New to netflix?
								<span
									onClick={toggleSignInForm}
									className="text-blue-500 cursor-pointer"
								>
									{" "}
									Sign up now
								</span>
							</>
						) : (
							<>
								Already Registered.
								<span
									onClick={toggleSignInForm}
									className="text-blue-500 cursor-pointer"
								>
									{" "}
									Sign In
								</span>
							</>
						)}
					</p>
					{/* <p>Use a sign-in code</p> */}
				</form>
			</div>
		</div>
	)
}

export default Loginpage
