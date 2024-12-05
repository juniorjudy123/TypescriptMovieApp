import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import MovieCardComponent from "../components/MovieCardComponent"
import useFetchMoviesBycategory from "../hooks/useFetchMoviesBycategory"
import Pagination from "../components/PaginationComponent"

const AllMoviesPage = () => {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const category = queryParams.get("category") // Get category from URL

	const [currentPage, setCurrentPage] = useState(1)

	// Dynamically build url
	const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${currentPage}`

	// Call the hook for fetching movies by category
	const { error, loading } = useFetchMoviesBycategory({
		category,
		page: currentPage,
		url: url,
	})

	// Fetch the movies from the Redux store based on category
	const movies = useSelector((state) => state.Allmovies[`${category}Movies`])

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	// Loading and error handling
	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className="px-5">
			<h1 className="text-2xl font-bold text-white">{category} Movies</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
				{movies?.movies?.map((movie) => (
					<MovieCardComponent
						key={movie.id}
						id={movie.id}
						poster_path={movie.poster_path}
					/>
				))}
			</div>

			{/* Pagination Component */}
			<Pagination
				currentPage={currentPage}
				totalPages={movies?.total_pages || 1} // Default to 1 if not available
				onPageChange={handlePageChange}
			/>
		</div>
	)
}

export default AllMoviesPage
