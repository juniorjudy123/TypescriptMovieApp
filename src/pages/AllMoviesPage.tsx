import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import MovieCardComponent from "../components/MovieCardComponent"

const AllMoviesPage = () => {
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const category = queryParams.get("category") // Get category from URL
	const dispatch = useDispatch()

	const [currentPage, setCurrentPage] = useState(1)
	const movies = useSelector((state) => state.movies[`${category}Movies`])

	useEffect(() => {
		dispatch(fetchMoviesByCategory({ category, page: currentPage })) // Dispatch action to fetch movies by category and page
	}, [category, currentPage, dispatch])

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	return (
		<div className="px-5">
			<h1 className="text-2xl font-bold text-white">{category} Movies</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
				{movies?.map((movie) => (
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
				totalPages={movies?.total_pages}
				onPageChange={handlePageChange}
			/>
		</div>
	)
}

export default AllMoviesPage
