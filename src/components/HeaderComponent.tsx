import movieapplogo from "../assets/movieapplogo.jpg"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { HeaderParameterTypes } from "../types/MovieDetailType"

const HeaderComponent = ({
	setSearchQuery,
	setIsSearch,
}: HeaderParameterTypes) => {
	const navigate = useNavigate()
	const handleHomeClick = () => {
		navigate("/browse")
	}
	const handleSearchChange = (e) => {
		const query = e.target.value
		setSearchQuery(query)
		setIsSearch(query.length > 0)
	}
	return (
		<div className=" px-5  bg-gradient-to-b from-black w-full flex justify-between fixed top-0 left-0  z-20">
			<div className="flex">
				<img
					src={movieapplogo}
					className="w-24 rounded-full p-2 mx-8 my-4 shadow-sm transition-transform transform hover:scale-110 cursor-pointer opacity-80 "
					alt="movieapp-logo"
					onClick={handleHomeClick}
				></img>
				<ul className="flex space-x-7 ml-3  align items-center text-white">
					<li className="text-white bg-gradient-to-b from-gray-100 via-gray-600 to-gray-700 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-300 hover:to-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-700/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 opacity-70">
						<Link to="/browse"> Home</Link>
					</li>
					<li className=" font-medium font-sans text-sm ">Movies</li>
					<li className=" font-medium font-sans text-sm">TV shows</li>
					<li className="pl-4 text-xl ">|</li>
					<li>
						<Link className="font-sans text-base font-medium">
							Subscriptions
						</Link>
					</li>
				</ul>
			</div>

			<ul className="flex space-x-4 ml-10 mr-20 items-center text-white ">
				<li>
					<div className="relative flex  justify-center overflow-hidden bg-gradient-to-brp-6  mr-6">
						<div className="  relative rounded-3xl pt-1 pb-1 shadow-2xl ring-1 ring-gray-300/5 sm:mx-auto sm:max-w-xl sm:px-10 ">
							<div className="mx-auto max-w-md">
								<form action="" className="relative mx-auto w-max">
									<input
										type="search"
										onChange={handleSearchChange}
										placeholder="Search for movies..."
										className="peer p-1 cursor-pointer relative z-10 h-10 w-8 rounded-full border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-gray-200 focus:pl-16 focus:pr-4  focus:shadow-lg focus:ring-2 focus:ring-white"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="absolute  inset-y-0 my-auto h-10 w-12 border-r border-transparent stroke-white  px-3.5 peer-focus:border-gray-200 peer-focus:stroke-gray-200"
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
				{/* <li>
					<span className="material-symbols-outlined text-md text-gray-300 ">
						lists
					</span>
				</li> */}
				<li>
					<button className="button-2 px-2 py-2 m-1 border-1  rounded-lg bg-red-600 text-white   hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 text-sm  font-semibold">
						Sign Out
					</button>
				</li>
			</ul>
		</div>
	)
}

export default HeaderComponent
