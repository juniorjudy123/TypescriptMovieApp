import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import movieapplogo from "../assets/movieapplogo.jpg"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
	const navigate = useNavigate()
	const handleHomeClick = () => {
		navigate("/browse")
	}
	return (
		<div className=" px-5  bg-gradient-to-b from-black w-full flex justify-between fixed top-0 left-0  z-20">
			<div className="flex">
				<img
					src={movieapplogo}
					className="w-24 rounded-full p-2 mx-8 my-4 shadow-sm transition-transform transform hover:scale-110 cursor-pointer "
					alt="movieapp-logo"
					onClick={handleHomeClick}
				></img>
				<ul className="flex space-x-7 ml-3  align items-center text-white">
					<li className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-300 hover:to-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-700/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 ">
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

			<ul className="flex space-x-8 ml-14  mr-8 items-center text-white">
				<li>
					<FontAwesomeIcon icon={faMagnifyingGlass} className="text-md" />
				</li>
				<li>
					<span className="material-symbols-outlined text-md text-gray-300">
						lists
					</span>
				</li>
				<li>
					<button className="button-2 px-2 py-2 m-1 border-1  rounded-lg bg-red-600 text-white font-medium  hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 text-sm  font-semibold">
						Sign Out
					</button>
				</li>
			</ul>
		</div>
	)
}

export default HeaderComponent
