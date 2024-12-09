// import { useEffect, useState } from "react"
// import { API_options } from "../utils/constants"
// import { useDispatch } from "react-redux"
// import {
// 	addMovieDetails,
// 	addNowPlayingMovies,
// 	addPopularMovies,
// 	addTopRatedMovies,
// 	addTrendingMovies,
// 	addUpcomingMovies,
// } from "../utils/slices/moviesSlice"

// const useMovies = (url) => {
// 	const dispatch = useDispatch()
// 	const [error, setError] = useState(null)
// 	const [loading, setLoading] = useState(false)

// 	const getMovies = async () => {
// 		setError(null)
// 		setLoading(true)
// 		try {
// 			const data = await fetch(url, API_options)
// 			const json = await data.json()
// 			// console.log("movies", json.results)

// 			//trick
// 			if (url.toLowerCase().includes("popular")) {
// 				dispatch(addPopularMovies(json.results))
// 			} else if (url.toLowerCase().includes("upcoming")) {
// 				dispatch(addUpcomingMovies(json.results))
// 			} else if (url.toLowerCase().includes("top_rated")) {
// 				dispatch(addTopRatedMovies(json.results))
// 			} else if (url.toLowerCase().includes("now_playing")) {
// 				dispatch(addNowPlayingMovies(json.results))
// 			} else if (url.toLowerCase().includes("/movie/")) {
// 				dispatch(addMovieDetails(json.results))
// 			} else if (url.toLowerCase().includes("trending")) {
// 				dispatch(addTrendingMovies(json.results))
// 			}
// 		} catch (error) {
// 			setError(error.message)
// 		} finally {
// 			setLoading(false)
// 		}
// 	}
// 	useEffect(() => {
// 		getMovies()
// 	}, [url])
// 	return { error, loading }
// }

// export default useMovies

import { useEffect, useState } from "react"
import { API_options } from "../utils/constants"
import { useDispatch } from "react-redux"
import {
	addMovieDetails,
	addNowPlayingMovies,
	addPopularMovies,
	addTopRatedMovies,
	addTrendingMovies,
	addUpcomingMovies,
} from "../utils/slices/moviesSlice"

const useMovies = (url, searchQuery = "", isSearch = false) => {
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [allResults, setAllResults] = useState([])

	const getMovies = async () => {
		setError(null)
		setLoading(true)
		try {
			let apiUrl = url

			if (isSearch && searchQuery) {
				// If it's a search query, modify the URL for the search endpoint
				apiUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=en-US&page=${page}`
			} else {
				// Otherwise, continue with the provided URL
				apiUrl = `${url}&page=${page}`
			}
			const data = await fetch(apiUrl, API_options)
			const json = await data.json()
			console.log("seemovies", json.results)

			// updating total no of pages
			setTotalPages(json.total_pages)
			console.log("totalPages", totalPages)

			// Combine results from multiple pages
			if (page === 1) {
				setAllResults(json.results) // On first page, just set the results
			} else {
				setAllResults((prevResults) => [...prevResults, ...json.results]) // Append results from subsequent pages
			}

			//trick
			if (isSearch && searchQuery) {
				dispatch(addSearchResults(json.results)) // Dispatch search results
			} else if (url.toLowerCase().includes("popular")) {
				dispatch(addPopularMovies(json.results))
			} else if (url.toLowerCase().includes("upcoming")) {
				dispatch(addUpcomingMovies(json.results))
			} else if (url.toLowerCase().includes("top_rated")) {
				dispatch(addTopRatedMovies(json.results))
			} else if (url.toLowerCase().includes("now_playing")) {
				dispatch(addNowPlayingMovies(json.results))
			} else if (url.toLowerCase().includes("/movie/")) {
				dispatch(addMovieDetails(json.results))
			} else if (url.toLowerCase().includes("trending")) {
				dispatch(addTrendingMovies(json.results))
			}
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		if (page <= totalPages) {
			getMovies()
		}
	}, [url, searchQuery, page, totalPages])

	// Function to load next page
	const loadMoreMovies = () => {
		if (page < totalPages) {
			setPage((prevPage) => prevPage + 1) // Increment page number
		}
	}
	return { error, loading }
}

export default useMovies
