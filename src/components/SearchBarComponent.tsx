const SearchBarComponent = () => {
	return (
		<div className="absolute -mt-6  ml-36 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
			<div className="inline-flex flex-col justify-center relative text-gray-500 w-full">
				<div className="relative w-2/3">
					<input
						type="text"
						className="w-full p-4 pl-12 rounded-lg border-gray-600 bg-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent text-lg opacity-90"
						placeholder="Search for movies..."
					/>
					<svg
						className="w-7 h-7 absolute left-3 top-4 text-gray-300"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}

export default SearchBarComponent
