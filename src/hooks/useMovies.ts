import { useEffect, useState } from "react"
import { API_options } from "../utils/constants"
import { useDispatch } from "react-redux"
import {
	addMovieDetails,
	addNowPlayingMovies,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
} from "../utils/slices/moviesSlice"

const useMovies = (url) => {
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const getMovies = async () => {
		try {
			const data = await fetch(url, API_options)
			const json = await data.json()
			console.log("movies", json.results)

			//trick
			if (url.toLowerCase().includes("popular")) {
				dispatch(addPopularMovies(json.results))
			} else if (url.toLowerCase().includes("upcoming")) {
				dispatch(addUpcomingMovies(json.results))
			} else if (url.toLowerCase().includes("top_rated")) {
				dispatch(addTopRatedMovies(json.results))
			} else if (url.toLowerCase().includes("now_playing")) {
				dispatch(addNowPlayingMovies(json.results))
			} else if (url.toLowerCase().includes("/movie/")) {
				dispatch(addMovieDetails(json.results))
			}
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		getMovies()
	}, [url])
	return { error, loading }
}

export default useMovies
