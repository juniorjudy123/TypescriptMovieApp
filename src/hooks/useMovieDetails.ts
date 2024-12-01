import { useEffect, useState } from "react"
import { API_options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../utils/slices/moviesSlice"

const useMovieDetails = (url) => {
	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)
	const getMovies = async () => {
		try {
			const data = await fetch(url, API_options)
			const json = await data.json()
			dispatch(addMovieDetails(json))
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

export default useMovieDetails
