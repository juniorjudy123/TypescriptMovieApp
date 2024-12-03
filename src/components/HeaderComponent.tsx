import movieapplogo from "../assets/movieapplogo.jpg"

const HeaderComponent = () => {
	return (
		<div className=" px-8 py-1 bg-gradient-to-b from-black w-full flex justify-between absolute z-10">
			<div className="flex">
				<img
					src={movieapplogo}
					className="w-24 rounded-full p-2 mx-10 my-4 shadow-sm transition-transform transform hover:scale-110 cursor-pointer "
					alt="movieapp-logo"
				></img>
				<ul className="flex space-x-10 ml-16  align items-center text-white">
					<li>Home</li>
					<li>Movies</li>
					<li>TV shows</li>
					<li className="pl-4 ">|</li>
					<li>
						<button className="button-2 px-2 py-2 m-1 border-1  rounded-full bg-gray-700 text-white font-medium  hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 text-sm ">
							Subscriptions
						</button>
					</li>
				</ul>
			</div>

			<ul className="flex space-x-10 ml-16 align items-center text-white">
				<li>search</li>
				<li>My stuff</li>
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
