import React, { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { useSelector } from "react-redux"
// import useMovies from "../hooks/useMovies"
import { useParams } from "react-router-dom"
import { API_options } from "../utils/constants"
import MovieCardComponent from "../components/MovieCardComponent"

// Mock movie data
// const movies = [
// 	{ id: 1, title: "Avengers: Endgame", genre: "action" },
// 	{ id: 2, title: "The Hangover", genre: "comedy" },
// 	{ id: 3, title: "Titanic", genre: "romance" },
// 	{ id: 4, title: "The Conjuring", genre: "horror" },
// 	{ id: 5, title: "Forrest Gump", genre: "drama" },
// 	{ id: 6, title: "Deadpool", genre: "action" },
// 	{ id: 7, title: "Jumanji", genre: "comedy" },
// 	{ id: 8, title: "The Notebook", genre: "romance" },
// 	{ id: 9, title: "The Shining", genre: "horror" },
// 	{ id: 10, title: "Inception", genre: "action" },
// 	{ id: 11, title: "The Matrix", genre: "action" },
// 	{ id: 12, title: "Jaws", genre: "horror" },
// 	{ id: 13, title: "The Godfather", genre: "drama" },
// 	{ id: 14, title: "Pulp Fiction", genre: "drama" },
// 	{ id: 15, title: "The Dark Knight", genre: "action" },
// 	{ id: 16, title: "Shrek", genre: "comedy" },
// 	{ id: 17, title: "Casablanca", genre: "drama" },
// 	{ id: 18, title: "The Lion King", genre: "drama" },
// 	{ id: 19, title: "Star Wars", genre: "action" },
// 	{ id: 20, title: "Jurassic Park", genre: "action" },
// ]

function App() {
	const [selectContent, setSelectContent] = useState("all") // to work
	const [selectedGenre, setSelectedGenre] = useState("all")
	const [allMovies, setAllMovies] = useState([])
	const [totalPage, setTotalPage] = useState(0)

	const [page, setPage] = useState(1)
	const params = useParams()
	const url = `https://api.themoviedb.org/3/movie/${params?.category}?language=en-US&page=${page}`

	const getMoviesCategoryWise = async () => {
		try {
			const res = await fetch(url, API_options)
			const data = await res.json()
			console.log("Allmovies", data.results)
			setAllMovies(data.results)
			setTotalPage(data.total_pages)
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		getMoviesCategoryWise()
	}, [page])

	// Filter movies based on the selected genre
	// const filteredMovies =
	// 	selectedGenre === "all"
	// 		? allMovies
	// 		: allMovies.filter((movie) => movie.genre === selectedGenre)

	// Calculate the total number of pages
	const totalPages = Math.ceil(totalPage / 10)

	console.log("totalPages", totalPages)

	// Handle page change

	const handleNextPage = () => {
		setPage(page + 1)
	}
	const handlePrevPage = () => {
		setPage(page - 1)
	}

	const handleNumberClick = (selectedPage: any) => {
		setPage(selectedPage)
	}

	return (
		<div className="min-h-screen flex bg-black ">
			<HeaderComponent />
			{/* Sidebar (Filter) */}
			<div className="w-1/6 p-10 shadow-lg  bg-black mt-20 ">
				<h2 className="text-2xl font-semibold text-gray-100  ">Genre</h2>
				<select
					id="genre-select"
					className="mt-4 w-full p-3 bg-gray-600  text-gray-100 rounded-md"
					onChange={(e) => setSelectedGenre(e.target.value)}
				>
					<option value="all">All</option>
					<option value="action">Action</option>
					<option value="comedy">Comedy</option>
					<option value="drama">Drama</option>
					<option value="horror">Horror</option>
					<option value="romance">Romance</option>
				</select>
				<h2 className="text-2xl font-semibold  text-gray-100  mt-12">
					Content{" "}
				</h2>
				<select
					id="genre-select"
					className="mt-4 w-full p-3  bg-gray-600  text-gray-100 rounded-md"
					onChange={(e) => setSelectContent(e.target.value)}
				>
					<option value="movies">Movies</option>
					<option value="tv">TV</option>
				</select>
				<h2 className="text-2xl font-semibold  text-gray-100  mt-12">
					Ratings{" "}
				</h2>
				<select
					id="genre-select"
					className="mt-4 w-full p-3  bg-gray-600  text-gray-100 rounded-md"
					onChange={(e) => setSelectedGenre(e.target.value)}
				>
					<option value="all">All</option>
					<option value="8+">8+</option>
					<option value="7+">7+</option>
				</select>
			</div>

			{/* Separator Line */}
			<div className="border-l border-black "></div>

			{/* Movie List Section */}
			<div className="flex-1 p-16 mt-10 ">
				<h1 className="text-4xl  text-white font-semibold  mb-8 text-center">
					All Movies
				</h1>
				{/* Movie Cards */}
				<div className="display flex flex-row flex-wrap">
					{allMovies &&
						allMovies?.map(({ id, poster_path }) => (
							<MovieCardComponent key={id} id={id} poster_path={poster_path} />
						))}
				</div>
				//pagination
				<div className="flex justify-center mr-20 py-8 ">
					<nav aria-label="Page navigation example p-2">
						<ul className="inline-flex -space-x-px text-sm p-2">
							{/* Prev Button - Disabled if on the first page */}
							<li>
								<a
									href="#"
									onClick={handlePrevPage}
									className={`flex items-center justify-center px-3 h-10 ms-0 leading-tight ${
										page === 1
											? "text-gray-500 bg-white cursor-not-allowed rounded-s-lg"
											: "text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
									} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
									aria-label="Previous"
								>
									Prev
								</a>
							</li>

							{/* Show Ellipsis if there are more pages before */}
							{page > 10 && (
								<li>
									<a
										href="#"
										onClick={() => handleNumberClick(1)}
										className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										1
									</a>
								</li>
							)}

							{page > 4 && (
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										...
									</a>
								</li>
							)}

							{/* Page Numbers */}
							{[...Array(totalPages)].map((_, i) => {
								const pageNumber = i + 1
								return (
									pageNumber >= page - 2 &&
									pageNumber <= page + 2 && (
										<li key={i}>
											<a
												href="#"
												onClick={() => handleNumberClick(pageNumber)}
												className={`flex items-center justify-center px-3 h-10 leading-tight ${
													page === pageNumber
														? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
														: "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
												}`}
											>
												{pageNumber}
											</a>
										</li>
									)
								)
							})}

							{/* Show Ellipsis if there are more pages after */}
							{page < totalPages - 3 && (
								<li>
									<a
										href="#"
										className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										...
									</a>
								</li>
							)}

							{page < totalPages - 2 && (
								<li>
									<a
										href="#"
										onClick={() => handleNumberClick(totalPages)}
										className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>
										{totalPages}
									</a>
								</li>
							)}

							{/* Next Button - Disabled if on the last page */}
							<li>
								<a
									href="#"
									onClick={handleNextPage}
									className={`flex items-center justify-center px-3 h-10 leading-tight ${
										page === totalPages
											? "text-gray-500 cursor-not-allowed"
											: "text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
									} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
									aria-label="Next"
								>
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default App
