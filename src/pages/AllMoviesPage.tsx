// import React, { useState, useEffect } from "react"
// import { useSelector } from "react-redux"
// import { useLocation } from "react-router-dom"
// import MovieCardComponent from "../components/MovieCardComponent"
// import useFetchMoviesBycategory from "../hooks/useFetchMoviesBycategory"
// import Pagination from "../components/PaginationComponent"

// const AllMoviesPage = () => {
// 	const location = useLocation()
// 	const queryParams = new URLSearchParams(location.search)
// 	const category = queryParams.get("category") // Get category from URL

// 	const [currentPage, setCurrentPage] = useState(1)

// 	// Dynamically build url
// 	const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${currentPage}`

// 	// Call the hook for fetching movies by category
// 	const { error, loading } = useFetchMoviesBycategory({
// 		category,
// 		page: currentPage,
// 		url: url,
// 	})

// 	// Fetch the movies from the Redux store based on category
// 	const movies = useSelector((state) => state.Allmovies[`${category}Movies`])

// 	const handlePageChange = (page) => {
// 		setCurrentPage(page)
// 	}

// 	// Loading and error handling
// 	if (loading) {
// 		return <div>Loading...</div>
// 	}

// 	if (error) {
// 		return <div>Error: {error}</div>
// 	}

// 	return (
// 		<div className="px-5">
// 			<h1 className="text-2xl font-bold text-white">{category} Movies</h1>
// 			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
// 				{movies?.movies?.map((movie) => (
// 					<MovieCardComponent
// 						key={movie.id}
// 						id={movie.id}
// 						poster_path={movie.poster_path}
// 					/>
// 				))}
// 			</div>

// 			{/* Pagination Component */}
// 			<Pagination
// 				currentPage={currentPage}
// 				totalPages={movies?.total_pages || 1} // Default to 1 if not available
// 				onPageChange={handlePageChange}
// 			/>
// 		</div>
// 	)
// }

// export default AllMoviesPage

import React, { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { useSelector } from "react-redux"
// import useMovies from "../hooks/useMovies"
import { useParams } from "react-router-dom"
import { API_options } from "../utils/constants"

// Mock movie data
const movies = [
	{ id: 1, title: "Avengers: Endgame", genre: "action" },
	{ id: 2, title: "The Hangover", genre: "comedy" },
	{ id: 3, title: "Titanic", genre: "romance" },
	{ id: 4, title: "The Conjuring", genre: "horror" },
	{ id: 5, title: "Forrest Gump", genre: "drama" },
	{ id: 6, title: "Deadpool", genre: "action" },
	{ id: 7, title: "Jumanji", genre: "comedy" },
	{ id: 8, title: "The Notebook", genre: "romance" },
	{ id: 9, title: "The Shining", genre: "horror" },
	{ id: 10, title: "Inception", genre: "action" },
	{ id: 11, title: "The Matrix", genre: "action" },
	{ id: 12, title: "Jaws", genre: "horror" },
	{ id: 13, title: "The Godfather", genre: "drama" },
	{ id: 14, title: "Pulp Fiction", genre: "drama" },
	{ id: 15, title: "The Dark Knight", genre: "action" },
	{ id: 16, title: "Shrek", genre: "comedy" },
	{ id: 17, title: "Casablanca", genre: "drama" },
	{ id: 18, title: "The Lion King", genre: "drama" },
	{ id: 19, title: "Star Wars", genre: "action" },
	{ id: 20, title: "Jurassic Park", genre: "action" },
]

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
			console.log(data)
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
	const filteredMovies =
		selectedGenre === "all"
			? movies
			: movies.filter((movie) => movie.genre === selectedGenre)

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
			<div className="flex-1 p-10 mt-10 ">
				<h1 className="text-4xl  text-white font-semibold  mb-8 text-center">
					All Movies
				</h1>
				{/* Movie Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
					{allMovies &&
						allMovies?.map((movie) => (
							<div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
								<h2 className="text-2xl font-bold text-gray-800">
									{movie?.title}
								</h2>
								<p className="text-sm text-gray-600 capitalize">
									{movie?.genre}
								</p>
							</div>
						))}
				</div>

				{/* <div className="mt-52 flex justify-center mr-9">
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						className="px-4 py-2 mx-1 bg-gray-300 text-gray-800 rounded-2xl hover:bg-gray-400 disabled:opacity-50"
						disabled={currentPage === 1}
					>
						Prev
					</button>
					<span className=" flex text-gray-500 text-2xl m-2 justify-center ">
						|
					</span>

					{/* Page Numbers */}
				{/* {Array.from({ length: Math.min(totalPages, 10) }, (_, index) => (
						<button
							key={index + 1}
							onClick={() => handlePageChange(index + 1)}
							className={`px-4 py-2 mx-1 ${
								currentPage === index + 1
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-gray-800"
							} rounded-xl hover:bg-gray-300`}
						>
							{index + 1}
						</button>
					))}
					<span className=" flex text-gray-500 text-2xl m-2 ">|</span>

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						className="px-4 py-2 mx-1 rounded-2xl bg-gray-300 text-gray-800  hover:bg-gray-400 disabled:opacity-50"
						disabled={currentPage === totalPages}
					>
						Next
					</button>
				</div>  */}
				<ul className="flex flex-wrap list-none justify-center gap-5 my-10 font-bold text-white">
					{page > 1 && (
						<li onClick={handlePrevPage} className="cursor-pointer">
							Prev
						</li>
					)}
					{[...Array(Math.ceil(totalPage))].map((_, i) => (
						<li
							key={i}
							onClick={() => handleNumberClick(i + 1)}
							className={`cursor-pointer ${
								page === i + 1 ? "font-bold text-red-600" : ""
							}`}
						>
							{i + 1}
						</li>
					))}
					{page < allMovies?.length && (
						<li onClick={handleNextPage} className="cursor-pointer">
							Next
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default App
