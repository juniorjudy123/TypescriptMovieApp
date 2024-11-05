import logo from "../assets/logo3.jpg"

const NavBarComponent = () => {
	return (
		<div className="bg-black min-h-screen text-white text-sm">
			<nav className="h-16 p-3 flex align items-center">
				<div className="flex align items-center">
					<img
						className="w-16 h-auto rounded-full shadow-lg transition-transform transform hover:scale-110"
						src={logo}
						alt="movie-logo"
					></img>
					<ul className="flex space-x-8 ml-16 align items-center">
						<li>Home</li>
						<li>Movies</li>
						<li>TV Shows</li>
						<li>
							<button className="button-2 px-2 py-2 m-1 border-1  rounded-full bg-gray-600 text-white font-medium  hover:bg-white hover:text-black hover:scale-105 active:scale-95 active:bg-[#0048d5] transition-all duration-200 text-sm ">
								Subscriptions
							</button>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex space-x-8 ml-16">
						<li>search</li>
						<li>menu</li>
						<li>My stuff</li>
						<li>profile</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavBarComponent
