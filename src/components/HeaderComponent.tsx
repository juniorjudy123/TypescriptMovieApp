import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import movieapplogo from "../assets/movieapplogo.jpg"
import { HeaderParameterTypes } from "../types/MovieDetailType"
import useSearchMovies from "../hooks/useSearchMovies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import avatar from "../assets/netflix avatar.jpg"

const HeaderComponent = ({
	setSearchQuery,
	setIsSearch,
}: HeaderParameterTypes) => {
	const navigate = useNavigate()
	const [isOpen, setIsOpen] = useState(false)
	const [isDoubleToggleOpen, setIsDoubleToggleOpen] = useState(false)
	const [query, setQuery] = useState("")

	const handleHomeClick = () => {
		navigate("/browse")
	}

	// Toggle dropdown visibility
	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}
	const toggleDoubleDropdown = () => {
		setIsDoubleToggleOpen(!isDoubleToggleOpen)
	}

	useSearchMovies(query)

	return (
		<div className="px-3 bg-gradient-to-b from-black w-full flex justify-between fixed top-0 left-0 z-20">
			<div className="flex">
				<img
					src={movieapplogo}
					className="w-24 rounded-full p-2 mx-8 my-2 shadow-sm transition-transform transform hover:scale-110 cursor-pointer opacity-80"
					alt="movieapp-logo"
					onClick={handleHomeClick}
				/>
				<ul className="flex space-x-7 ml-3 align items-center text-white">
					<li className="text-white bg-gradient-to-b from-gray-100 via-gray-700 to-gray-700 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-300 hover:to-gray-300 hover:text-black focus:ring- focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-700/80  rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 opacity-70">
						<Link to="/browse"> Home</Link>
					</li>
					<li className=" font-sans text-sm">Movies</li>
					<li className="font-sans text-sm">TV shows</li>
					<li className="pl-4 text-xl">|</li>
					<li>
						<Link className="font-sans text-sm">Subscriptions</Link>
					</li>
				</ul>
			</div>

			<ul className="flex space-x-4 ml-10 mr-20 items-center text-white">
				<li>
					<div className="relative flex justify-center overflow-hidden bg-gradient-to-brp-6 mr-4">
						<div className="relative rounded-3xl pt-1 pb-1 shadow-2xl ring-1 ring-gray-300/5 sm:mx-auto sm:max-w-xl sm:px-10">
							<div className="mx-auto max-w-md">
								<form action="" className="relative mx-auto w-max">
									<input
										type="search"
										onChange={(e) => setQuery(e.target.value)}
										placeholder="Search for movies..."
										className="peer p-1 cursor-pointer relative z-10 h-10 w-8 rounded-full border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-gray-200 focus:pl-16 focus:pr-4 focus:shadow-lg focus:ring-2 focus:ring-white"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="absolute inset-y-0 my-auto h-10 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-gray-200 peer-focus:stroke-gray-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										/>
									</svg>
								</form>
							</div>
						</div>
					</div>
				</li>
				<li>
					<Link className="font-sans text-md p-1 m-2">children</Link>
				</li>
				<li className="p-1 m-2">
					<FontAwesomeIcon icon={faBell} />
				</li>

				{/* Dropdown Button */}
				<li>
					<img
						src={avatar}
						alt="avatar-img"
						onClick={toggleDropdown}
						className="w-12 h-12 rounded-full border-2 border-gray-500 transition-transform transform hover:scale-110 cursor-pointer opacity-80"
					></img>
				</li>
				<li>
					{/* <button
						onClick={toggleDropdown} // Add toggle logic here
						className="text-white  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-lg  shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-700/80 transition-all duration-300 opacity-80"
					>
						nimmy
						<svg
							className="w-2.5 h-2.5 ms-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button> */}

					{/* Dropdown Menu */}
					{isOpen && (
						<div
							id="multi-dropdown"
							className="z-10 absolute right-0 top-14 mx-2 my-2 p-3
							 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
						>
							<ul
								className=" text-sm text-gray-100 dark:text-gray-200 "
								aria-labelledby="multiLevelDropdownButton"
							>
								<li>
									<a
										href="#"
										className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Account
									</a>
								</li>
								<li>
									<button
										onClick={toggleDoubleDropdown}
										id="doubleDropdownButton"
										data-dropdown-toggle="doubleDropdown"
										data-dropdown-placement="right-start"
										type="button"
										className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100  hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Manage Profile
										<svg
											className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
									</button>
									{isDoubleToggleOpen && (
										<div
											id="doubleDropdown"
											className="z-10   bg-gray-700 divide-y divide-gray-200  shadow-xl w-44 dark:bg-gray-700"
										>
											<ul
												className=" text-sm text-gray-100 dark:text-gray-200"
												aria-labelledby="doubleDropdownButton"
											>
												<li>
													<a
														href="#"
														className="block px-4 py-2  hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														view Profile
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block px-4 py-2  hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
													>
														favourites
													</a>
												</li>
											</ul>
										</div>
									)}
								</li>
								<li>
									<a
										href="#"
										className="block px-4 py-2  hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										help
									</a>
								</li>
								<li className="border-t border-gray-500 border-solid"></li>
								<li>
									<a
										href="#"
										className="block px-4 py-2  hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>
										Sign out
									</a>
								</li>
							</ul>
						</div>
					)}
				</li>
			</ul>
		</div>
	)
}

export default HeaderComponent
