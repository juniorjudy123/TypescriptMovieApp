import { useRef, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"
import { checkValidData } from "../utils/validation"
import bgimg from "../assets/login-bg.jpg"
import movieapplogo from "../assets/movieapplogo.jpg"
import googleGemini from "../assets/google gemini.png"
import { Navigate } from "react-router-dom"
const Loginpage = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isSignIn, setIsSignIn] = useState(true)
	const [errormessage, setErrorMessage] = useState<string | null | undefined>(
		undefined
	)

	const toggleSignInForm = () => {
		setIsSignIn(!isSignIn)
	}

	const email = useRef<HTMLInputElement | null>(null)
	const password = useRef<HTMLInputElement | null>(null)
	const name = useRef<HTMLInputElement | null>(null)

	const handleButtonClick = () => {
		const emailValue = email.current?.value
		const passwordValue = password.current?.value
		const nameValue = name.current?.value

		// Assuming checkValidData is a validation function
		const message = checkValidData(emailValue, passwordValue, nameValue)
		console.log(message)
		setErrorMessage(message)

		if (message) return

		if (!isSignIn) {
			// Sign Up
			if (emailValue && passwordValue) {
				createUserWithEmailAndPassword(auth, emailValue, passwordValue) // Pass passwordValue, not the ref
					.then((userCredential) => {
						const user = userCredential.user
						console.log("User signed up:", user)
					})
					.catch((error) => {
						console.log(error)
						const errorCode = error.code
						const errorMessage = error.message
						console.error("Error:", errorMessage)
						setErrorMessage(errorCode) // Set error message if signup fails
					})
			}
		} else {
			// Handle Sign In here (using Firebase signInWithEmailAndPassword or similar)
		}
	}

	const toggeExpand = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<img
				src={bgimg}
				alt="bg-img"
				className=" object-cover absolute w-full h-full mt-[-06px]"
			/>
			<div className="absolute inset-0 bg-black opacity-65"></div>

			<img
				src={movieapplogo}
				className="w-24 rounded-full p-1 mx-12 my-5 shadow-lg transition-transform transform hover:scale-110 cursor-pointer opacity-90 absolute z-20"
				alt="movieapp-logo"
			/>
			<div>
				<form
					onSubmit={(e) => e.preventDefault()}
					typeof="text"
					className="absolute w-3/12 bg-black bg-opacity-80 p-5 my-36 mx-auto right-0 left-0 text-white flex flex-col shadow-xl"
				>
					<div className="p-15 m-6">
						<h1 className="font-semibold text-3xl py-4">
							{isSignIn ? "Sign In" : "Sign Up"}
						</h1>
						{!isSignIn && (
							<input
								ref={name}
								type="text"
								placeholder="Full Name"
								className="p-3 my-3 w-full bg-gray-900 border border-slate-700 bg-opacity-85"
							/>
						)}
						<input
							type="text"
							ref={email}
							placeholder="Email Address"
							className="p-3 my-3 w-full bg-gray-900 bg-opacity-85 border border-slate-700"
						/>
						<input
							ref={password}
							type="password"
							placeholder="Password"
							className="p-3 my-3 w-full bg-gray-900 bg-opacity-85 border border-slate-700"
						/>
						<p className="text-red-700 font-semibold text-lg py-2">
							{errormessage}
						</p>
						<button
							className="bg-red-700 my-4 p-3 w-full rounded-lg"
							onClick={handleButtonClick}
						>
							{isSignIn ? "Login" : "Register"}
						</button>
						<p className="cursor-pointer my-3 p-2">
							{isSignIn ? (
								<>
									New to Prime Movies?
									<span
										onClick={toggleSignInForm}
										className="text-white font-bold cursor-pointer hover:underline"
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
										className="text-white font-bold cursor-pointer hover:underline"
									>
										Sign In
									</span>
								</>
							)}
						</p>
						<div className="py-1">
							<p className="text-sm text-gray-400 font-normal">
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.{" "}
								<span
									className="text-blue-400 py-2 cursor-pointer hover:underline"
									onClick={toggeExpand}
								>
									Learn more.
								</span>
							</p>

							{isExpanded && (
								<div className="mt-2 text-gray-400 text-sm">
									<p>
										The information collected by Google reCAPTCHA is subject to
										the Google Privacy Policy and Terms of Service, and is used
										for providing, maintaining, and improving the reCAPTCHA
										service and for general security purposes (it is not used
										for personalised advertising by Google).
									</p>
								</div>
							)}
							<div className="flex flex-row mt-2">
								<p className="text-sm font-semibold font-serif text-gray-400 pt-3 ">
									@Powered by Google Gemini
								</p>
								<img
									src={googleGemini}
									alt="gemini-img"
									className="w-12 h-8 shadow-lg bg-transparent animate-blink"
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Loginpage
