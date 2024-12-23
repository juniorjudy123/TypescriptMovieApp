import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import movieapplogo from "../assets/movieapplogo.jpg"
import { HeaderParameterTypes } from "../types/MovieDetailType"
import useSearchMovies from "../hooks/useSearchMovies"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import avatar from "../assets/netflix avatar.jpg"
import SearchBarComponent from "./SearchBarComponent"

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
					<li>
						<Link to="/subscription" className="font-sans text-sm">
							Subscriptions
						</Link>
					</li>
					<li className="pl-4 text-xl">|</li>

					<li>
						<SearchBarComponent />
					</li>
				</ul>
			</div>

			<ul className="flex space-x-4 ml-10 mr-20 items-center text-white">
				<li>
					<Link className="font-sans text-md p-1 m-2">children</Link>
				</li>
				<li className="p-1 m-2 flex ">
					<FontAwesomeIcon
						icon={faBell}
						className="cursor-pointer hover:animate-ringing"
					/>
					<h2 className="-mt-3 font-sans">3</h2>
				</li>

				{/* Dropdown Button */}
				<li>
					<img
						src={avatar}
						alt="avatar-img"
						onClick={toggleDropdown}
						className="w-10 h-10 rounded-full border-2 border-gray-500 transition-transform transform hover:scale-110 cursor-pointer opacity-90"
					></img>
				</li>
				<li>
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
											className="z-10 -m-3 my-2 p-3 bg-gray-700 divide-y divide-gray-200  shadow-xl w-44 dark:bg-gray-700"
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
