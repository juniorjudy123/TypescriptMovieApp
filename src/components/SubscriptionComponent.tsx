import movieapplogo from "../assets/movieapplogo.jpg"
import FooterComponent from "./FooterComponent"
const SubscriptionComponent = () => {
	return (
		<div className="">
			<section className="bg-black  ">
				<div className="p-12 mx-auto max-w-screen-xl  min-h-screen lg:py-16 lg:px-6 bg-gray-00 w-[95%] ">
					<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
						<h2 className="mb-4 text-4xl tracking-tight font-bold text-white dark:text-white">
							Choose the plan that's right for you
						</h2>

						<p className="mb-2 font-light text-gray-300 sm:text-xl dark:text-gray-400">
							Unlimited movies and TV shows. Watch all you want ad-free
						</p>
						<p className="mb-5 font-light text-gray-300 sm:text-xl dark:text-gray-400">
							Change or cancel your plan any time.
						</p>
					</div>
					<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
						<div className="flex flex-col p-6 mx-auto max-w-lg  text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700  rounded-lg  text-center transition-transform transform hover:scale-110 cursor-pointer hover:border border-slate-100 ">
							{/* <img
								src={movieapplogo}
								className="w-24 rounded-full p-2  transition-transform transform hover:scale-110 cursor-pointer opacity-90"
								alt="movieapp-logo"
							/> */}
							<h3 className="mb-4 text-2xl font-semibold">Basic</h3>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
								Affordable. Endless Entertainment.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-bold">₹300</span>
								<span className="text-gray-500 dark:text-gray-400">/month</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>watch on your laptop and TV</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>watch on your mobile and Tablet</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										screens you can watch on at the same time:{" "}
										<span className="font-semibold"> 1 </span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-gray-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
							>
								Choose Plan
							</a>
						</div>
						<div className="flex flex-col p-6 mx-auto max-w-lg  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800  rounded-lg   text-center  hover:border border-slate-100 transition-transform transform hover:scale-110 cursor-pointer">
							<h3 className="mb-4 text-2xl font-semibold">Standard</h3>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
								Enjoy Your Movies in HD, Anytime, Anywhere
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">₹500</span>
								<span className="text-gray-300 dark:text-gray-400">/month</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>HD available</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>4k + HDR available</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Watch on your laptop and TV</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										<span>watch on your mobile and Tablet</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Screens you can watch on at the same time:
										<span className="font-semibold"> 2</span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
							>
								Choose Plan
							</a>
						</div>
						<div className="flex flex-col p-6 mx-auto max-w-lg  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  text-center transition-transform transform hover:scale-110 cursor-pointer hover:border  border-slate-100 ">
							<h3 className="mb-4 text-2xl font-semibold">Premium</h3>
							<p className="font-light text-gray-300 sm:text-lg dark:text-gray-400">
								For the Movie Enthusiast – Everything You Want, Everywhere You
								Go
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">₹799</span>
								<span className="text-gray-300 dark:text-gray-500">/month</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>HD available</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>4k + HDR available</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>Watch on your laptop and TV</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										<span>watch on your mobile and Tablet</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span>
										Screens you can watch on at the same time:
										<span className="font-semibold"> 4</span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
							>
								Choose Plan
							</a>
						</div>
					</div>
				</div>
			</section>
			<FooterComponent />
		</div>
	)
}

export default SubscriptionComponent
