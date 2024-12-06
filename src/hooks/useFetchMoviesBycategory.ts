// import { useState, useEffect } from "react"
// import { useDispatch } from "react-redux"
// import {
// 	addMovieBycategory,
// 	setLoading,
// 	setError,
// } from "../utils/slices/AllmoviesSlice"
// import { API_options } from "../utils/constants"

// const useFetchMoviesBycategory = ({ category, page = 1, url }) => {
// 	const dispatch = useDispatch()
// 	const [error, setErrorState] = useState(null)
// 	const [loading, setLoadingState] = useState(false)

// 	const fetchMoviesBycategory = async () => {
// 		dispatch(setLoading({ category })) // Set loading state to true
// 		try {
// 			const response = await fetch(url, API_options)
// 			const json = await response.json()

// 			dispatch(
// 				addMovieBycategory({
// 					category,
// 					movies: json.results,
// 					total_pages: json.total_pages,
// 					total_results: json.total_results,
// 				})
// 			)
// 		} catch (error) {
// 			dispatch(setError({ category, error: error.message }))
// 			setErrorState(error.message) // Set local error state as well
// 		} finally {
// 			setLoadingState(false) // Set loading to false after fetching
// 		}
// 	}

// 	useEffect(() => {
// 		fetchMoviesBycategory()
// 	}, [category, page, url])

// 	return { error: error || setErrorState, loading: loading || setLoadingState }
// }

// export default useFetchMoviesBycategory
